#!/bin/zsh

# Export data from database
# - CREATE TABLE statements only for pattern-matching tables
# - INSERT data for ALL tables (except lime_settings_global)
# Usage: ./export_data.sh [db_name] [output_file]

DB_NAME=${1:-ls-ce}
OUTPUT_FILE=${2:-ls-ce.sql}
PATTERN="^(lime_survey_[0-9]|lime_tokens_[0-9]|lime_old_survey_[0-9_]|lime_old_tokens_[0-9_])"

echo "Exporting data from database '$DB_NAME'..." >&2

# Get all tables except lime_settings_global (via Docker)
ALL_TABLES=$(docker exec ls-dev-mysql mysql -u root -proot -Nse "USE $DB_NAME; SHOW TABLES;" | grep -v "^lime_settings_global$" | tr '\n' ' ')

if [ -z "$ALL_TABLES" ]; then
  echo "No tables found in database '$DB_NAME'" >&2
  exit 1
fi

# Get tables matching the pattern (for CREATE statements)
PATTERN_TABLES=$(echo "$ALL_TABLES" | grep -oE "(lime_survey_[0-9]+|lime_tokens_[0-9]+|lime_old_survey_[0-9_]+|lime_old_tokens_[0-9_]+)" | tr '\n' ' ')

echo "Pattern tables (with CREATE): $(echo $PATTERN_TABLES | wc -w)" >&2
echo "All data tables: $(echo $ALL_TABLES | wc -w)" >&2

# Create temporary file
TEMP_FILE=$(mktemp)
trap "rm -f $TEMP_FILE" EXIT

# 1. Export structure (CREATE TABLE) for pattern-matching tables only
if [ -n "$PATTERN_TABLES" ]; then
  echo "Exporting CREATE TABLE statements..." >&2
  eval "docker exec ls-dev-mysql mysqldump \
    -u root -proot \
    --no-data \
    \"$DB_NAME\" \
    $PATTERN_TABLES" >> "$TEMP_FILE"
  if [ $? -ne 0 ]; then
    echo "Failed to export CREATE statements" >&2
    exit 1
  fi
fi

# 2. Export data for ALL tables (except lime_settings_global)
echo "Exporting data from all tables..." >&2
eval "docker exec ls-dev-mysql mysqldump \
  -u root -proot \
  --no-create-info \
  \"$DB_NAME\" \
  $ALL_TABLES" >> "$TEMP_FILE"
if [ $? -ne 0 ]; then
  echo "Failed to export data" >&2
  echo "Table list: $ALL_TABLES" >&2
  exit 1
fi

# 3. Move to final location
mv "$TEMP_FILE" "$OUTPUT_FILE"

if [ $? -eq 0 ]; then
  echo "Export complete: $OUTPUT_FILE" >&2
  echo "File size: $(du -h "$OUTPUT_FILE" | cut -f1)" >&2
  echo "Line count: $(wc -l < "$OUTPUT_FILE")" >&2
else
  echo "Export failed!" >&2
  exit 1
fi
