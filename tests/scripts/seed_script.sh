#!/bin/zsh

# Import data into database
# Usage: ./seed_script.sh [db_name] [input_file]

DB_NAME=${1:-ls-ce}
INPUT_FILE=${2:-ls-ce.sql}

mysql -Nse 'show tables' $DB_NAME | while read table; do if [ $table != "lime_settings_global" ]; then mysql -e "truncate table $table" $DB_NAME; fi; done

mysql -Nse 'show tables' $DB_NAME | while read table; do if [[ $table =~ "lime_survey_[0-9].*" || $table =~ "lime_tokens_[0-9].*" || $table =~ "lime_old_survey_[0-9_].*" || $table =~ "lime_old_tokens_[0-9_].*" ]]; then mysql -e "drop table $table" $DB_NAME; fi; done

mysql $DB_NAME < $INPUT_FILE