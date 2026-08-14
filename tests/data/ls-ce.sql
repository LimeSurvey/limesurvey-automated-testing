-- MySQL dump 10.13  Distrib 5.7.39, for Linux (x86_64)
--
-- Host: localhost    Database: ls-ce
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `lime_answer_l10ns`
--

LOCK TABLES `lime_answer_l10ns` WRITE;
/*!40000 ALTER TABLE `lime_answer_l10ns` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_answer_l10ns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_answers`
--

LOCK TABLES `lime_answers` WRITE;
/*!40000 ALTER TABLE `lime_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_archived_table_settings`
--

LOCK TABLES `lime_archived_table_settings` WRITE;
/*!40000 ALTER TABLE `lime_archived_table_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_archived_table_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_assessments`
--

LOCK TABLES `lime_assessments` WRITE;
/*!40000 ALTER TABLE `lime_assessments` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_asset_version`
--

LOCK TABLES `lime_asset_version` WRITE;
/*!40000 ALTER TABLE `lime_asset_version` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_asset_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_boxes`
--

LOCK TABLES `lime_boxes` WRITE;
/*!40000 ALTER TABLE `lime_boxes` DISABLE KEYS */;
INSERT INTO `lime_boxes` VALUES (1,1,'dashboard/view','Dashboard','View dashboard','ri-function-fill','View dashboard','welcome',-1),(2,2,'admin/globalsettings','Global settings','View global settings','ri-settings-3-fill','Edit global settings','welcome',-2),(3,3,'themeOptions','Themes','Edit themes','ri-paint-fill','The themes functionality allows you to edit survey-, admin- or question themes.','welcome',-2),(4,4,'userManagement/index','Manage administrators','Manage administrators','ri-group-line','The user management allows you to add additional users to your survey administration.','welcome',-2),(5,5,'admin/pluginmanager/sa/index','Plugins','Manage plugins','ri-plug-fill','Plugins can be used to add custom features','welcome',-2);
/*!40000 ALTER TABLE `lime_boxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_conditions`
--

LOCK TABLES `lime_conditions` WRITE;
/*!40000 ALTER TABLE `lime_conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_defaultvalue_l10ns`
--

LOCK TABLES `lime_defaultvalue_l10ns` WRITE;
/*!40000 ALTER TABLE `lime_defaultvalue_l10ns` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_defaultvalue_l10ns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_defaultvalues`
--

LOCK TABLES `lime_defaultvalues` WRITE;
/*!40000 ALTER TABLE `lime_defaultvalues` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_defaultvalues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_expression_errors`
--

LOCK TABLES `lime_expression_errors` WRITE;
/*!40000 ALTER TABLE `lime_expression_errors` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_expression_errors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_failed_emails`
--

LOCK TABLES `lime_failed_emails` WRITE;
/*!40000 ALTER TABLE `lime_failed_emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_failed_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_failed_login_attempts`
--

LOCK TABLES `lime_failed_login_attempts` WRITE;
/*!40000 ALTER TABLE `lime_failed_login_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_failed_login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_group_l10ns`
--

LOCK TABLES `lime_group_l10ns` WRITE;
/*!40000 ALTER TABLE `lime_group_l10ns` DISABLE KEYS */;
INSERT INTO `lime_group_l10ns` VALUES (1,1,'My first question group','','en');
/*!40000 ALTER TABLE `lime_group_l10ns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_groups`
--

LOCK TABLES `lime_groups` WRITE;
/*!40000 ALTER TABLE `lime_groups` DISABLE KEYS */;
INSERT INTO `lime_groups` VALUES (1,952972,1,'','1');
/*!40000 ALTER TABLE `lime_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_label_l10ns`
--

LOCK TABLES `lime_label_l10ns` WRITE;
/*!40000 ALTER TABLE `lime_label_l10ns` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_label_l10ns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_labels`
--

LOCK TABLES `lime_labels` WRITE;
/*!40000 ALTER TABLE `lime_labels` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_labels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_labelsets`
--

LOCK TABLES `lime_labelsets` WRITE;
/*!40000 ALTER TABLE `lime_labelsets` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_labelsets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_map_tutorial_users`
--

LOCK TABLES `lime_map_tutorial_users` WRITE;
/*!40000 ALTER TABLE `lime_map_tutorial_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_map_tutorial_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_message`
--

LOCK TABLES `lime_message` WRITE;
/*!40000 ALTER TABLE `lime_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_notifications`
--

LOCK TABLES `lime_notifications` WRITE;
/*!40000 ALTER TABLE `lime_notifications` DISABLE KEYS */;
INSERT INTO `lime_notifications` VALUES (1,'user',1,'SSL not enforced','<span class=\"ri-error-warning-fill\"></span>&nbsp;Warning: Please enforce SSL encryption in Global settings/Security after SSL is properly configured for your webserver.','new',1,'default','e874527c8f54934f3f3f6078ca5b9399c7cca002dc8398e92fcd20628c3e51bb','2026-08-14 16:50:53','2026-08-14 16:50:57');
/*!40000 ALTER TABLE `lime_notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participant_attribute`
--

LOCK TABLES `lime_participant_attribute` WRITE;
/*!40000 ALTER TABLE `lime_participant_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_participant_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participant_attribute_names`
--

LOCK TABLES `lime_participant_attribute_names` WRITE;
/*!40000 ALTER TABLE `lime_participant_attribute_names` DISABLE KEYS */;
INSERT INTO `lime_participant_attribute_names` VALUES (1,'TB','firstname','TRUE','Y','Y'),(2,'TB','lastname','TRUE','Y','Y'),(3,'TB','email','TRUE','Y','Y');
/*!40000 ALTER TABLE `lime_participant_attribute_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participant_attribute_names_lang`
--

LOCK TABLES `lime_participant_attribute_names_lang` WRITE;
/*!40000 ALTER TABLE `lime_participant_attribute_names_lang` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_participant_attribute_names_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participant_attribute_values`
--

LOCK TABLES `lime_participant_attribute_values` WRITE;
/*!40000 ALTER TABLE `lime_participant_attribute_values` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_participant_attribute_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participant_shares`
--

LOCK TABLES `lime_participant_shares` WRITE;
/*!40000 ALTER TABLE `lime_participant_shares` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_participant_shares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_participants`
--

LOCK TABLES `lime_participants` WRITE;
/*!40000 ALTER TABLE `lime_participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_permissions`
--

LOCK TABLES `lime_permissions` WRITE;
/*!40000 ALTER TABLE `lime_permissions` DISABLE KEYS */;
INSERT INTO `lime_permissions` VALUES (1,'global',0,1,'superadmin',0,1,0,0,0,0),(2,'survey',952972,1,'assessments',1,1,1,1,0,0),(3,'survey',952972,1,'quotas',1,1,1,1,0,0),(4,'survey',952972,1,'responses',1,1,1,1,1,1),(5,'survey',952972,1,'statistics',0,1,0,0,0,0),(6,'survey',952972,1,'survey',0,1,0,1,0,0),(7,'survey',952972,1,'surveyactivation',0,0,1,0,0,0),(8,'survey',952972,1,'surveycontent',1,1,1,1,1,1),(9,'survey',952972,1,'surveylocale',0,1,1,0,0,0),(10,'survey',952972,1,'surveysecurity',1,1,1,1,0,0),(11,'survey',952972,1,'surveysettings',0,1,1,0,0,0),(12,'survey',952972,1,'tokens',1,1,1,1,1,1),(13,'survey',952972,1,'translations',0,1,1,0,0,0);
/*!40000 ALTER TABLE `lime_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_permissiontemplates`
--

LOCK TABLES `lime_permissiontemplates` WRITE;
/*!40000 ALTER TABLE `lime_permissiontemplates` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_permissiontemplates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_plugin_settings`
--

LOCK TABLES `lime_plugin_settings` WRITE;
/*!40000 ALTER TABLE `lime_plugin_settings` DISABLE KEYS */;
INSERT INTO `lime_plugin_settings` VALUES (1,1,NULL,NULL,'next_extension_update_check','\"2026-08-15 16:50:54\"');
/*!40000 ALTER TABLE `lime_plugin_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_plugins`
--

LOCK TABLES `lime_plugins` WRITE;
/*!40000 ALTER TABLE `lime_plugins` DISABLE KEYS */;
INSERT INTO `lime_plugins` VALUES (1,'UpdateCheck','core',1,1,'1.0.0',0,NULL),(2,'PasswordRequirement','core',1,1,'1.1.0',0,NULL),(3,'ComfortUpdateChecker','core',1,1,'1.0.0',0,NULL),(4,'Authdb','core',1,1,'1.0.0',0,NULL),(5,'ReactEditor','core',1,0,'1.0.0',0,NULL),(6,'AuthLDAP','core',0,1,'1.0.0',0,NULL),(7,'AuditLog','core',0,1,'1.0.0',0,NULL),(8,'Authwebserver','core',0,1,'1.0.0',0,NULL),(9,'ExportR','core',1,1,'1.0.0',0,NULL),(10,'ExportSTATAxml','core',1,1,'1.0.0',0,NULL),(11,'ExportSPSSsav','core',1,1,'1.0.4',0,NULL),(12,'oldUrlCompat','core',0,1,'1.0.1',0,NULL),(13,'expressionQuestionHelp','core',0,0,'1.0.1',0,NULL),(14,'expressionQuestionForAll','core',0,1,'1.0.1',0,NULL),(15,'expressionFixedDbVar','core',0,1,'1.0.2',0,NULL),(16,'customToken','core',0,1,'1.0.1',0,NULL),(17,'mailSenderToFrom','core',0,1,'1.0.0',0,NULL),(18,'TwoFactorAdminLogin','core',0,1,'1.3.0',0,NULL);
/*!40000 ALTER TABLE `lime_plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_question_attributes`
--

LOCK TABLES `lime_question_attributes` WRITE;
/*!40000 ALTER TABLE `lime_question_attributes` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_question_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_question_l10ns`
--

LOCK TABLES `lime_question_l10ns` WRITE;
/*!40000 ALTER TABLE `lime_question_l10ns` DISABLE KEYS */;
INSERT INTO `lime_question_l10ns` VALUES (1,1,'<p>What animals do you like?</p>','','','en'),(2,2,'<p>cat</p>','','','en'),(3,3,'<p>dog</p>','','','en'),(4,4,'<p>fish</p>','','','en'),(5,5,'<p>parrot</p>','','','en');
/*!40000 ALTER TABLE `lime_question_l10ns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_question_themes`
--

LOCK TABLES `lime_question_themes` WRITE;
/*!40000 ALTER TABLE `lime_question_themes` DISABLE KEYS */;
INSERT INTO `lime_question_themes` VALUES (1,'5pointchoice','Y','application/views/survey/questions/answer/5pointchoice','/assets/images/screenshots/5.png','5 point choice','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','5 point choice question type configuration','2019-09-23 15:05:59',1,'question_theme','5',1,'','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"choice-5-pt-radio\"}'),(2,'arrays/10point','Y','application/views/survey/questions/answer/arrays/10point','/assets/images/screenshots/B.png','Array (10 point choice)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (10 point choice) question type configuration','2019-09-23 15:05:59',1,'question_theme','B',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-10-pt\"}'),(3,'arrays/5point','Y','application/views/survey/questions/answer/arrays/5point','/assets/images/screenshots/A.png','Array (5 point choice)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (5 point choice) question type configuration','2019-09-23 15:05:59',1,'question_theme','A',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-5-pt\"}'),(4,'arrays/array','Y','application/views/survey/questions/answer/arrays/array','/assets/images/screenshots/F.png','Array','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array question type configuration','2019-09-23 15:05:59',1,'question_theme','F',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-flexible-row\"}'),(5,'arrays/column','Y','application/views/survey/questions/answer/arrays/column','/assets/images/screenshots/H.png','Array by column','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array by column question type configuration','2019-09-23 15:05:59',1,'question_theme','H',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-flexible-column\"}'),(6,'arrays/dualscale','Y','application/views/survey/questions/answer/arrays/dualscale','/assets/images/screenshots/1.png','Array dual scale','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array dual scale question type configuration','2019-09-23 15:05:59',1,'question_theme','1',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"2\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-flexible-dual-scale\"}'),(7,'arrays/increasesamedecrease','Y','application/views/survey/questions/answer/arrays/increasesamedecrease','/assets/images/screenshots/E.png','Array (Increase/Same/Decrease)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (Increase/Same/Decrease) question type configuration','2019-09-23 15:05:59',1,'question_theme','E',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-increase-same-decrease\"}'),(8,'arrays/multiflexi','Y','application/views/survey/questions/answer/arrays/multiflexi','/assets/images/screenshots/COLON.png','Array (Numbers)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (Numbers) question type configuration','2019-09-23 15:05:59',1,'question_theme',':',1,'','Arrays','{\"subquestions\":\"2\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-multi-flexi\"}'),(9,'arrays/texts','Y','application/views/survey/questions/answer/arrays/texts','/assets/images/screenshots/;.png','Array (Texts)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (Texts) question type configuration','2019-09-23 15:05:59',1,'question_theme',';',1,'','Arrays','{\"subquestions\":\"2\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"array-multi-flexi-text\"}'),(10,'arrays/yesnouncertain','Y','application/views/survey/questions/answer/arrays/yesnouncertain','/assets/images/screenshots/C.png','Array (Yes/Uncertain/No)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Array (Yes/Uncertain/No) question type configuration','2019-09-23 15:05:59',1,'question_theme','C',1,'','Arrays','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"array-yes-uncertain-no\"}'),(11,'boilerplate','Y','application/views/survey/questions/answer/boilerplate','/assets/images/screenshots/X.png','Text display','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Text display question type configuration','2019-09-23 15:05:59',1,'question_theme','X',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"boilerplate\"}'),(12,'date','Y','application/views/survey/questions/answer/date','/assets/images/screenshots/D.png','Date/Time','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Date/Time question type configuration','2019-09-23 15:05:59',1,'question_theme','D',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"date\"}'),(13,'equation','Y','application/views/survey/questions/answer/equation','/assets/images/screenshots/EQUATION.png','Equation','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Equation question type configuration','2019-09-23 15:05:59',1,'question_theme','*',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"equation\"}'),(14,'file_upload','Y','application/views/survey/questions/answer/file_upload','/assets/images/screenshots/PIPE.png','File upload','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','File upload question type configuration','2019-09-23 15:05:59',1,'question_theme','|',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"upload-files\"}'),(15,'gender','Y','application/views/survey/questions/answer/gender','/assets/images/screenshots/G.png','Gender','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Gender question type configuration','2019-09-23 15:05:59',1,'question_theme','G',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"gender\"}'),(16,'hugefreetext','Y','application/views/survey/questions/answer/hugefreetext','/assets/images/screenshots/U.png','Huge free text','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Huge free text question type configuration','2019-09-23 15:05:59',1,'question_theme','U',1,'','Text questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"text-huge\"}'),(17,'language','Y','application/views/survey/questions/answer/language','/assets/images/screenshots/I.png','Language switch','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Language switch question type configuration','2019-09-23 15:05:59',1,'question_theme','I',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"0\",\"class\":\"language\"}'),(18,'listradio','Y','application/views/survey/questions/answer/listradio','/assets/images/screenshots/L.png','List (Radio)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','List (radio) question type configuration','2019-09-23 15:05:59',1,'question_theme','L',1,'','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-radio\"}'),(19,'list_dropdown','Y','application/views/survey/questions/answer/list_dropdown','/assets/images/screenshots/!.png','List (Dropdown)','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','List (dropdown) question type configuration','2019-09-23 15:05:59',1,'question_theme','!',1,'','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-dropdown\"}'),(20,'list_with_comment','Y','application/views/survey/questions/answer/list_with_comment','/assets/images/screenshots/O.png','List with comment','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','List with comment question type configuration','2019-09-23 15:05:59',1,'question_theme','O',1,'','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-with-comment\"}'),(21,'longfreetext','Y','application/views/survey/questions/answer/longfreetext','/assets/images/screenshots/T.png','Long free text','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Long free text question type configuration','2019-09-23 15:05:59',1,'question_theme','T',1,'','Text questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"text-long\"}'),(22,'multiplechoice','Y','application/views/survey/questions/answer/multiplechoice','/assets/images/screenshots/M.png','Multiple choice','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Multiple choice question type configuration','2019-09-23 15:05:59',1,'question_theme','M',1,'','Multiple choice questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"multiple-opt\"}'),(23,'multiplechoice_with_comments','Y','application/views/survey/questions/answer/multiplechoice_with_comments','/assets/images/screenshots/P.png','Multiple choice with comments','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Multiple choice with comments question type configuration','2019-09-23 15:05:59',1,'question_theme','P',1,'','Multiple choice questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"multiple-opt-comments\"}'),(24,'multiplenumeric','Y','application/views/survey/questions/answer/multiplenumeric','/assets/images/screenshots/K.png','Multiple numerical input','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Multiple numerical input question type configuration','2019-09-23 15:05:59',1,'question_theme','K',1,'','Mask questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"numeric-multi\"}'),(25,'multipleshorttext','Y','application/views/survey/questions/answer/multipleshorttext','/assets/images/screenshots/Q.png','Multiple short text','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Multiple short text question type configuration','2019-09-23 15:05:59',1,'question_theme','Q',1,'','Text questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"multiple-short-txt\"}'),(26,'numerical','Y','application/views/survey/questions/answer/numerical','/assets/images/screenshots/N.png','Numerical input','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Numerical input question type configuration','2019-09-23 15:05:59',1,'question_theme','N',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"numeric\"}'),(27,'ranking','Y','application/views/survey/questions/answer/ranking','/assets/images/screenshots/R.png','Ranking','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Ranking question type configuration','2019-09-23 15:05:59',1,'question_theme','R',1,'','Mask questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"ranking\"}'),(28,'shortfreetext','Y','application/views/survey/questions/answer/shortfreetext','/assets/images/screenshots/S.png','Short free text','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Short free text question type configuration','2019-09-23 15:05:59',1,'question_theme','S',1,'','Text questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"text-short\"}'),(29,'yesno','Y','application/views/survey/questions/answer/yesno','/assets/images/screenshots/Y.png','Yes/No','2018-09-08 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Yes/No question type configuration','2019-09-23 15:05:59',1,'question_theme','Y',1,'','Mask questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"yes-no\"}'),(30,'bootstrap_dropdown','Y','themes/question/bootstrap_dropdown/survey/questions/answer/list_dropdown','/themes/question/bootstrap_dropdown/survey/questions/answer/list_dropdown/assets/bootstrap_dropdown_list_dropdown.png','Bootstrap dropdown','1970-01-01 01:00:00','Adam Zammit','adam.zammit@acspri.org.au','https://www.acspri.org.au','Copyright (C) 2021 The Australian Consortium for Social and Political Research Incorporated (ACSPRI)','GNU General Public License version 2 or later','1.0','1','Bootstrap dropdown theme','2021-09-29 12:00:00',1,'question_theme','!',1,'!','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-dropdown\"}'),(31,'bootstrap_buttons','Y','themes/question/bootstrap_buttons/survey/questions/answer/listradio','/themes/question/bootstrap_buttons/survey/questions/answer/listradio/assets/bootstrap_buttons_listradio.png','Bootstrap buttons','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','New implementation of the Bootstrap buttons question theme','2019-09-23 15:05:59',1,'question_theme','L',1,'L','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-radio\"}'),(32,'bootstrap_buttons_multi','Y','themes/question/bootstrap_buttons_multi/survey/questions/answer/multiplechoice','/themes/question/bootstrap_buttons_multi/survey/questions/answer/multiplechoice/assets/bootstrap_buttons_multiplechoice.png','Bootstrap buttons','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2018 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','New implementation of the Bootstrap buttons question theme','2019-09-23 15:05:59',1,'question_theme','M',1,'M','Multiple choice questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"multiple-opt\"}'),(33,'browserdetect','Y','themes/question/browserdetect/survey/questions/answer/shortfreetext','themes/question/browserdetect/survey/questions/answer/shortfreetext/assets/browserdetect.png','Browser detection','2017-07-09 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2017 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Browser, Platform and Proxy detection','2019-09-23 15:05:59',1,'question_theme','S',1,'S','Text questions','{\"subquestions\":\"0\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"text-short\"}'),(34,'image_select-listradio','Y','themes/question/image_select-listradio/survey/questions/answer/listradio','themes/question/image_select-listradio/survey/questions/answer/listradio/assets/image_select_listradio.png','Image select list (Radio)','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2016 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','List Radio with images.','2019-09-23 15:05:59',1,'question_theme','L',1,'L','Single choice questions','{\"subquestions\":\"0\",\"answerscales\":\"1\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"list-radio\"}'),(35,'image_select-multiplechoice','Y','themes/question/image_select-multiplechoice/survey/questions/answer/multiplechoice','themes/question/image_select-multiplechoice/survey/questions/answer/multiplechoice/assets/image_select_multiplechoice.png','Image select multiple choice','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2016 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Multiplechoice with images.','2019-09-23 15:05:59',1,'question_theme','M',1,'M','Multiple choice questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"1\",\"class\":\"multiple-opt\"}'),(36,'inputondemand','Y','themes/question/inputondemand/survey/questions/answer/multipleshorttext','themes/question/inputondemand/survey/questions/answer/multipleshorttext/assets/inputondemand.png','Input on demand','2019-10-04 00:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2019 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','Hide not needed input fields in multiple shorttext','2019-09-23 15:05:59',1,'question_theme','Q',1,'Q','Text questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"1\",\"assessable\":\"0\",\"class\":\"multiple-short-txt\"}'),(37,'ranking_advanced','Y','themes/question/ranking_advanced/survey/questions/answer/ranking','themes/question/ranking_advanced/survey/questions/answer/ranking/assets/advanced_ranking.png','Ranking advanced','1970-01-01 01:00:00','LimeSurvey GmbH','info@limesurvey.org','http://www.limesurvey.org','Copyright (C) 2005 - 2017 LimeSurvey Gmbh, Inc. All rights reserved.','GNU General Public License version 2 or later','1.0','1','New implementation of the ranking question','2019-09-23 15:05:59',1,'question_theme','R',1,'R','Mask questions','{\"subquestions\":\"1\",\"answerscales\":\"0\",\"hasdefaultvalues\":\"0\",\"assessable\":\"1\",\"class\":\"ranking\"}');
/*!40000 ALTER TABLE `lime_question_themes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_questions`
--

LOCK TABLES `lime_questions` WRITE;
/*!40000 ALTER TABLE `lime_questions` DISABLE KEYS */;
INSERT INTO `lime_questions` VALUES (1,0,952972,1,'M','Q00',NULL,'N','N','N',1,0,0,'1','multiplechoice',NULL,0),(2,1,952972,1,'T','SQ001',NULL,'N','N','N',0,0,0,'1',NULL,NULL,0),(3,1,952972,1,'T','SQ002',NULL,'N','N','N',1,0,0,'1',NULL,NULL,0),(4,1,952972,1,'T','SQ003',NULL,'N','N','N',2,0,0,'1',NULL,NULL,0),(5,1,952972,1,'T','SQ004',NULL,'N','N','N',3,0,0,'1',NULL,NULL,0);
/*!40000 ALTER TABLE `lime_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_quota`
--

LOCK TABLES `lime_quota` WRITE;
/*!40000 ALTER TABLE `lime_quota` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_quota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_quota_languagesettings`
--

LOCK TABLES `lime_quota_languagesettings` WRITE;
/*!40000 ALTER TABLE `lime_quota_languagesettings` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_quota_languagesettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_quota_members`
--

LOCK TABLES `lime_quota_members` WRITE;
/*!40000 ALTER TABLE `lime_quota_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_quota_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_saved_control`
--

LOCK TABLES `lime_saved_control` WRITE;
/*!40000 ALTER TABLE `lime_saved_control` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_saved_control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_sessions`
--

LOCK TABLES `lime_sessions` WRITE;
/*!40000 ALTER TABLE `lime_sessions` DISABLE KEYS */;
INSERT INTO `lime_sessions` VALUES ('0ZEWW2USWkD03Q7NoDiYbAxAk34iU1Tk',1787331081,_binary 'admin');
/*!40000 ALTER TABLE `lime_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_settings_user`
--

LOCK TABLES `lime_settings_user` WRITE;
/*!40000 ALTER TABLE `lime_settings_user` DISABLE KEYS */;
INSERT INTO `lime_settings_user` VALUES (1,1,NULL,NULL,'welcome_page_widget','list-widget');
/*!40000 ALTER TABLE `lime_settings_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_source_message`
--

LOCK TABLES `lime_source_message` WRITE;
/*!40000 ALTER TABLE `lime_source_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_source_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_survey_links`
--

LOCK TABLES `lime_survey_links` WRITE;
/*!40000 ALTER TABLE `lime_survey_links` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_survey_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_survey_url_parameters`
--

LOCK TABLES `lime_survey_url_parameters` WRITE;
/*!40000 ALTER TABLE `lime_survey_url_parameters` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_survey_url_parameters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveymenu`
--

LOCK TABLES `lime_surveymenu` WRITE;
/*!40000 ALTER TABLE `lime_surveymenu` DISABLE KEYS */;
INSERT INTO `lime_surveymenu` VALUES (1,NULL,NULL,NULL,'settings',1,0,'Survey settings','side','Survey settings',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(2,NULL,NULL,NULL,'mainmenu',2,0,'Survey menu','side','Main survey menu',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(3,NULL,NULL,NULL,'quickmenu',3,0,'Quick menu','collapsed','Quick menu',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0);
/*!40000 ALTER TABLE `lime_surveymenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveymenu_entries`
--

LOCK TABLES `lime_surveymenu_entries` WRITE;
/*!40000 ALTER TABLE `lime_surveymenu_entries` DISABLE KEYS */;
INSERT INTO `lime_surveymenu_entries` VALUES (1,1,NULL,1,'overview','Survey overview','Overview','Open the general survey overview','ri-bar-chart-horizontal-line','remix','','surveyAdministration/view','','','','','','','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(2,1,NULL,2,'generalsettings','General survey settings','General','Open general survey settings','ri-tools-line','remix','','','updatesurveylocalesettings_generalsettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_generaloptions_panel','','surveysettings','read',NULL,'generalTabEditSurvey','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(3,1,NULL,3,'surveytexts','Survey text elements','Text elements','Survey text elements','ri-text-spacing','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/tab_edit_view','','surveylocale','read',NULL,'getTextEditData','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(4,1,NULL,4,'datasecurity','Privacy policy settings','Privacy policy','Edit privacy policy settings','ri-shield-line','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/tab_edit_view_datasecurity','','surveylocale','read',NULL,'getDataSecurityEditData','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(5,1,NULL,5,'theme_options','Theme options','Theme options','Edit theme options for this survey','ri-contrast-drop-fill','remix','','themeOptions/updateSurvey','','','','','surveysettings','update','{\"render\": {\"link\": { \"pjaxed\": true, \"data\": {\"surveyid\": [\"survey\",\"sid\"], \"gsid\":[\"survey\",\"gsid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(6,1,NULL,6,'presentation','Presentation & navigation settings','Presentation','Edit presentation and navigation settings','ri-slideshow-line','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_presentation_panel','','surveylocale','read',NULL,'tabPresentationNavigation','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(7,1,NULL,7,'tokens','Survey participant settings','Participant settings','Set additional options for survey participants','ri-body-scan-fill','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_tokens_panel','','surveylocale','read',NULL,'tabTokens','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(8,1,NULL,8,'notification','Notification and data management settings','Notifications & data','Edit settings for notification and data management','ri-notification-line','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_notification_panel','','surveylocale','read',NULL,'tabNotificationDataManagement','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(9,1,NULL,9,'publication','Publication & access control settings','Publication & access','Edit settings for publication and access control','ri-key-line','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_publication_panel','','surveylocale','read',NULL,'tabPublicationAccess','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(10,1,NULL,10,'surveypermissions','Edit survey permissions','Survey permissions','Edit permissions for this survey','ri-lock-password-line','remix','','surveyPermissions/index','','','','','surveysecurity','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(11,2,NULL,1,'listQuestions','Overview questions & groups','Overview questions & groups','Overview of questions and groups where you can add, edit and reorder them','','remix','','questionAdministration/listQuestions','','','','','surveycontent','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(12,2,NULL,4,'participants','Survey participants','Participants','Go to survey participant and token settings','','remix','','admin/tokens/sa/index/','','','','','tokens','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(13,2,NULL,5,'emailtemplates','Email templates','Email templates','Edit the templates for invitation, reminder and registration emails','','remix','','admin/emailtemplates/sa/index/','','','','','surveylocale','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(14,2,NULL,6,'failedemail','Failed email notifications','Failed email notifications','View and resend failed email notifications','','remix','','failedEmail/index/','','','','','surveylocale','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(15,2,NULL,7,'quotas','Edit quotas','Quotas','Edit quotas for this survey.','','remix','','quotas/index/','','','','','quotas','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(16,2,NULL,8,'assessments','Edit assessments','Assessments','Edit and look at the assessements for this survey.','','remix','','assessment/index','','','','','assessments','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(17,2,NULL,9,'panelintegration','Edit survey panel integration','Panel integration','Define panel integrations for your survey','','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_integration_panel','','surveylocale','read','{\"render\": {\"link\": { \"pjaxed\": false}}}','tabPanelIntegration','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(18,2,NULL,10,'responses','Responses','Responses','Responses','','remix','','responses/browse/','','','','','responses','read','{\"render\": {\"isActive\": true, \"link\": {\"data\": {\"surveyId\": [\"survey\", \"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(19,2,NULL,11,'statistics','Statistics','Statistics','Statistics','','remix','','admin/statistics/sa/simpleStatistics/','','','','','statistics','read','{\"render\": {\"isActive\": true, \"link\": {\"data\": {\"surveyid\": [\"survey\", \"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(20,2,NULL,12,'resources','Add/edit resources (files/images) for this survey','Resources','Add/edit resources (files/images) for this survey','','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_resources_panel','','surveylocale','read','{\"render\": { \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','tabResourceManagement','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(21,2,NULL,13,'plugins','Simple plugin settings','Simple plugins','Edit simple plugin settings','','remix','','','updatesurveylocalesettings','editLocalSettings_main_view','/admin/survey/subview/accordion/_plugins_panel','','surveysettings','read','{\"render\": {\"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','pluginTabSurvey','en-GB',0,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(22,3,NULL,1,'activateSurvey','Activate survey','Activate survey','Activate survey','ri-play-fill','remix','','surveyAdministration/activate','','','','','surveyactivation','update','{\"render\": {\"isActive\": false, \"link\": {\"data\": {\"iSurveyID\": [\"survey\",\"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(23,3,NULL,2,'deactivateSurvey','Stop survey','Stop survey','Stop this survey','ri-stop-fill','remix','','surveyAdministration/deactivate','','','','','surveyactivation','update','{\"render\": {\"isActive\": true, \"link\": {\"data\": {\"surveyid\": [\"survey\",\"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(24,3,NULL,3,'testSurvey','Go to survey','Go to survey','Go to survey','ri-settings-5-fill','remix','','survey/index/','','','','','','','{\"render\": {\"link\": {\"external\": true, \"data\": {\"sid\": [\"survey\",\"sid\"], \"newtest\": \"Y\", \"lang\": [\"survey\",\"language\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(25,3,NULL,4,'surveyLogicFile','Survey logic overview','Survey logic overview','Survey logic overview','ri-git-branch-fill','remix','','admin/expressions/sa/survey_logic_file/','','','','','surveycontent','read','{\"render\": { \"link\": {\"data\": {\"sid\": [\"survey\",\"sid\"]}}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0),(26,3,NULL,5,'cpdb','Central participant database','Central participant database','Central participant database','ri-group-fill','remix','','admin/participants/sa/displayParticipants','','','','','tokens','read','{\"render\": {\"link\": {}}}','','en-GB',1,1,'2026-08-14 16:50:30',0,'2026-08-14 16:50:30',0);
/*!40000 ALTER TABLE `lime_surveymenu_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveys`
--

LOCK TABLES `lime_surveys` WRITE;
/*!40000 ALTER TABLE `lime_surveys` DISABLE KEYS */;
INSERT INTO `lime_surveys` VALUES (952972,1,1,'inherit','N',NULL,NULL,'inherit','I','I','I','inherit','en','','I','I','I','I',0,'I','I','I','I','I','I','2026-08-14 16:51:19',0,'I','I','I','I','I','I','I','I','I','E','N','inherit',NULL,'inherit','inherit',-1,'I','I','I','I',NULL,'N',NULL,NULL,NULL,NULL,NULL,'I','I',-1,-1,'I',NULL,NULL,'','O','2026-08-14 16:51:19');
/*!40000 ALTER TABLE `lime_surveys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveys_groups`
--

LOCK TABLES `lime_surveys_groups` WRITE;
/*!40000 ALTER TABLE `lime_surveys_groups` DISABLE KEYS */;
INSERT INTO `lime_surveys_groups` VALUES (1,'default','Default',NULL,'Default survey group',0,1,NULL,NULL,'2026-08-14 16:50:30','2026-08-14 16:50:30',1);
/*!40000 ALTER TABLE `lime_surveys_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveys_groupsettings`
--

LOCK TABLES `lime_surveys_groupsettings` WRITE;
/*!40000 ALTER TABLE `lime_surveys_groupsettings` DISABLE KEYS */;
INSERT INTO `lime_surveys_groupsettings` VALUES (0,1,'Administrator','admin@test.ing','N','G','N','fruity_twentythree','Y','N','N','Y',0,'N','N','N','N','N','N',0,'N','N','N','N','N','Y','Y','N','N','N',NULL,NULL,NULL,NULL,15,'Y','B','Y','X','Y','Y',0,0,'N'),(1,-1,'inherit','inherit','I','I','I','inherit','I','I','I','I',0,'I','I','I','I','I','I',0,'I','I','I','I','I','I','I','I','I','E','inherit',NULL,'inherit','inherit',-1,'I','I','I','I','I','I',-1,-1,'I');
/*!40000 ALTER TABLE `lime_surveys_groupsettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_surveys_languagesettings`
--

LOCK TABLES `lime_surveys_languagesettings` WRITE;
/*!40000 ALTER TABLE `lime_surveys_languagesettings` DISABLE KEYS */;
INSERT INTO `lime_surveys_languagesettings` VALUES (952972,'en','Default survey','','','','','','','','','Invitation to participate in a survey','Dear {FIRSTNAME},<br />\n<br />\nYou have been invited to participate in a survey.<br />\n<br />\nThe survey is titled:<br />\n\"{SURVEYNAME}\"<br />\n<br />\n\"{SURVEYDESCRIPTION}\"<br />\n<br />\nTo participate, please click on the link below.<br />\n<br />\nSincerely,<br />\n<br />\n{ADMINNAME} ({ADMINEMAIL})<br />\n<br />\n----------------------------------------------<br />\nClick here to do the survey:<br />\n{SURVEYURL}<br />\n<br />\nIf you do not want to participate in this survey and don\'t want to receive any more invitations please click the following link:<br />\n{OPTOUTURL}<br />\n<br />\nIf you are blocklisted but want to participate in this survey and want to receive invitations please click the following link:<br />\n{OPTINURL}','Reminder to participate in a survey','Dear {FIRSTNAME},<br />\n<br />\nRecently we invited you to participate in a survey.<br />\n<br />\nWe note that you have not yet completed the survey, and wish to remind you that the survey is still available should you wish to take part.<br />\n<br />\nThe survey is titled:<br />\n\"{SURVEYNAME}\"<br />\n<br />\n\"{SURVEYDESCRIPTION}\"<br />\n<br />\nTo participate, please click on the link below.<br />\n<br />\nSincerely,<br />\n<br />\n{ADMINNAME} ({ADMINEMAIL})<br />\n<br />\n----------------------------------------------<br />\nClick here to do the survey:<br />\n{SURVEYURL}<br />\n<br />\nIf you do not want to participate in this survey and don\'t want to receive any more invitations please click the following link:<br />\n{OPTOUTURL}','Survey registration confirmation','Dear {FIRSTNAME},<br />\n<br />\nYou, or someone using your email address, have registered to participate in an online survey titled {SURVEYNAME}.<br />\n<br />\nTo complete this survey, click on the following URL:<br />\n<br />\n{SURVEYURL}<br />\n<br />\nIf you have any questions about this survey, or if you did not register to participate and believe this email is in error, please contact {ADMINNAME} at {ADMINEMAIL}.','Confirmation of your participation in our survey','Dear {FIRSTNAME},<br />\n<br />\nThis email is to confirm that you have completed the survey titled {SURVEYNAME} and your response has been saved. Thank you for participating.<br />\n<br />\nIf you have any further questions about this email, please contact {ADMINNAME} on {ADMINEMAIL}.<br />\n<br />\nSincerely,<br />\n<br />\n{ADMINNAME}',9,NULL,'','Response submission for survey {SURVEYNAME}','Hello,<br />\n<br />\nA new response was submitted for your survey \'{SURVEYNAME}\'.<br />\n<br />\nClick the following link to see the individual response:<br />\n{VIEWRESPONSEURL}<br />\n<br />\nClick the following link to edit the individual response:<br />\n{EDITRESPONSEURL}<br />\n<br />\nView statistics by clicking here:<br />\n{STATISTICSURL}','Response submission for survey {SURVEYNAME} with results','Hello,<br />\n<br />\nA new response was submitted for your survey \'{SURVEYNAME}\'.<br />\n<br />\nClick the following link to see the individual response:<br />\n{VIEWRESPONSEURL}<br />\n<br />\nClick the following link to edit the individual response:<br />\n{EDITRESPONSEURL}<br />\n<br />\nView statistics by clicking here:<br />\n{STATISTICSURL}<br />\n<br />\n<br />\nThe following answers were given by the participant:<br />\n{ANSWERTABLE}',0,NULL);
/*!40000 ALTER TABLE `lime_surveys_languagesettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_template_configuration`
--

LOCK TABLES `lime_template_configuration` WRITE;
/*!40000 ALTER TABLE `lime_template_configuration` DISABLE KEYS */;
INSERT INTO `lime_template_configuration` VALUES (1,'vanilla',NULL,NULL,NULL,'{\"add\":[\"css/base.css\",\"css/theme.css\",\"css/noTablesOnMobile.css\",\"css/custom.css\"]}','{\"add\":[\"scripts/theme.js\",\"scripts/ajaxify.js\",\"scripts/custom.js\"]}','{\"add\":[\"css/print_theme.css\"]}','{\"animatebody\":\"off\", \"fixnumauto\":\"enable\",\"brandlogo\":\"on\",\"container\":\"on\", \"hideprivacyinfo\": \"off\", \"brandlogofile\":\"themes/survey/vanilla/files/logo.png\",\"font\":\"noto\", \"showpopups\":\"1\", \"showclearall\":\"off\", \"questionhelptextposition\":\"top\"}','bootstrap','{}','','{\"add\":[\"pjax\",\"font-noto\",\"moment\"]}',NULL,NULL),(2,'fruity',NULL,NULL,NULL,'{\"add\":[\"css/ajaxify.css\",\"css/animate.css\",\"css/variations/sea_green.css\",\"css/theme.css\",\"css/custom.css\"]}','{\"add\":[\"scripts/theme.js\",\"scripts/ajaxify.js\",\"scripts/custom.js\"]}','{\"add\":[\"css/print_theme.css\"]}','{\"fixnumauto\":\"enable\",\"brandlogo\":\"on\",\"brandlogofile\":\"themes/survey/fruity/files/logo.png\",\"container\":\"on\",\"backgroundimage\":\"off\",\"backgroundimagefile\":null,\"animatebody\":\"off\",\"bodyanimation\":\"fadeInRight\",\"bodyanimationduration\":\"500\",\"animatequestion\":\"off\",\"questionanimation\":\"flipInX\",\"questionanimationduration\":\"500\",\"animatealert\":\"off\",\"alertanimation\":\"shake\",\"alertanimationduration\":\"500\",\"font\":\"noto\",\"bodybackgroundcolor\":\"#ffffff\",\"fontcolor\":\"#444444\",\"questionbackgroundcolor\":\"#ffffff\",\"questionborder\":\"on\",\"questioncontainershadow\":\"on\",\"checkicon\":\"f00c\",\"animatecheckbox\":\"on\",\"checkboxanimation\":\"rubberBand\",\"checkboxanimationduration\":\"500\",\"animateradio\":\"on\",\"radioanimation\":\"zoomIn\",\"radioanimationduration\":\"500\",\"zebrastriping\":\"off\",\"stickymatrixheaders\":\"off\",\"greyoutselected\":\"off\",\"hideprivacyinfo\":\"off\",\"crosshover\":\"off\",\"showpopups\":\"1\", \"showclearall\":\"off\", \"questionhelptextposition\":\"top\",\"notables\":\"1\"}','bootstrap','{}','','{\"add\":[\"pjax\",\"font-noto\",\"moment\"]}',NULL,NULL),(3,'bootswatch',NULL,NULL,NULL,'{\"add\":[\"css/ajaxify.css\",\"css/theme.css\",\"css/custom.css\"]}','{\"add\":[\"scripts/theme.js\",\"scripts/ajaxify.js\",\"scripts/custom.js\"]}','{\"add\":[\"css/print_theme.css\"]}','{\"fixnumauto\":\"enable\",\"brandlogo\":\"on\",\"container\":\"on\",\"brandlogofile\":\"themes/survey/bootswatch/files/logo.png\", \"showpopups\":\"1\", \"showclearall\":\"off\", \"hideprivacyinfo\": \"off\", \"questionhelptextposition\":\"top\"}','bootstrap','{\"replace\":[[\"css/bootstrap.css\",\"css/variations/flatly.min.css\"]]}','','{\"add\":[\"pjax\",\"font-noto\",\"moment\"]}',NULL,NULL),(4,'fruity_twentythree',NULL,NULL,NULL,'{\"add\":[\"css/variations/theme_apple.css\",\"css/base.css\",\"css/custom.css\"], \"remove\":[\"survey.css\", \"template-core.css\", \"awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css\", \"awesome-bootstrap-checkbox/awesome-bootstrap-checkbox-rtl.css\"]}','{\"add\":[\"scripts/theme.js\",\"scripts/custom.js\"], \"remove\":[\"survey.js\", \"template-core.js\"]}','{\"add\":[\"css/print_theme.css\"]}','{\"hideprivacyinfo\":\"off\",\"showpopups\":\"1\",\"showclearall\":\"off\",\"questionhelptextposition\":\"top\",\"fixnumauto\":\"enable\",\"backgroundimage\":\"off\",\"backgroundimagefile\":\".\\/files\\/pattern.png\",\"brandlogo\":\"off\",\"brandlogofile\":\"image::theme::files\\/logo.png\",\"font\":\"ibm-sans\", \"bodybackgroundcolor\":\"#ffffff\",\"fontcolor\":\"#444444\", \"questionbackgroundcolor\":\"#ffffff\", \"checkicon\":\"EB7A\",\"cssframework\":\"Apple\", \"notables\":\"1\"}','','','','{\"add\":[\"pjax\",\"moment\",\"font-ibm-sans\",\"font-ibm-serif\"]}',NULL,NULL),(5,'fruity_twentythree',952972,NULL,NULL,'inherit','inherit','inherit','inherit','inherit','inherit','inherit','inherit',NULL,NULL),(6,'fruity_twentythree',NULL,1,NULL,'inherit','inherit','inherit','inherit','inherit','inherit','inherit','inherit',NULL,NULL);
/*!40000 ALTER TABLE `lime_template_configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_templates`
--

LOCK TABLES `lime_templates` WRITE;
/*!40000 ALTER TABLE `lime_templates` DISABLE KEYS */;
INSERT INTO `lime_templates` VALUES (1,'vanilla','vanilla','Bootstrap Vanilla','2026-08-14 16:50:30','LimeSurvey GmbH','info@limesurvey.org','https://www.limesurvey.org/','Copyright (C) 2007-2026 The LimeSurvey Project Team\\r\\nAll rights reserved.','License: GNU/GPL License v2 or later, see LICENSE.php\\r\\n\\r\\nLimeSurvey is free software. This version may have been modified pursuant to the GNU General Public License, and as distributed it includes or is derivative of works licensed under the GNU General Public License or other free or open source software licenses. See COPYRIGHT.php for copyright notices and details.','3.0','3.0','views','files','A clean and simple base that can be used by developers to create their own Bootstrap based theme.',NULL,1,''),(2,'fruity','fruity','Fruity','2026-08-14 16:50:30','LimeSurvey GmbH','info@limesurvey.org','https://www.limesurvey.org/','Copyright (C) 2007-2026 The LimeSurvey Project Team\\r\\nAll rights reserved.','License: GNU/GPL License v2 or later, see LICENSE.php\\r\\n\\r\\nLimeSurvey is free software. This version may have been modified pursuant to the GNU General Public License, and as distributed it includes or is derivative of works licensed under the GNU General Public License or other free or open source software licenses. See COPYRIGHT.php for copyright notices and details.','3.0','3.0','views','files','A fruity theme for a flexible use. This theme offers monochromes variations and many options for easy customizations.',NULL,1,'vanilla'),(3,'bootswatch','bootswatch','Bootswatch','2026-08-14 16:50:30','LimeSurvey GmbH','info@limesurvey.org','https://www.limesurvey.org/','Copyright (C) 2007-2026 The LimeSurvey Project Team\\r\\nAll rights reserved.','License: GNU/GPL License v2 or later, see LICENSE.php\\r\\n\\r\\nLimeSurvey is free software. This version may have been modified pursuant to the GNU General Public License, and as distributed it includes or is derivative of works licensed under the GNU General Public License or other free or open source software licenses. See COPYRIGHT.php for copyright notices and details.','3.0','3.0','views','files','{{gT(\"Based on BootsWatch Themes:\")}}<br><a href=\'https://bootswatch.com/3/\' target=\'_blank\' rel=\'external\' title=\'{{gT(\"Visit Bootswatch page in a new window.\")}}\'>{{gT(\"Visit Bootswatch page\")}} <i class=\'ri-external-link-line\'></i><span class=\'visually-hidden\'>{{gT(\"(Opens in a new window)\")}}</span></a>',NULL,1,'vanilla'),(4,'fruity_twentythree','fruity_twentythree','Fruity TwentyThree','2026-08-14 16:50:30','LimeSurvey GmbH','info@limesurvey.org','https://www.limesurvey.org/','Copyright (C) 2005 - 2023 LimeSurvey Gmbh, Inc. All rights reserved.','License: GNU/GPL License v2 or later, see LICENSE.php\\r\\n\\r\\nLimeSurvey is free software. This version may have been modified pursuant to the GNU General Public License, and as distributed it includes or is derivative of works licensed under the GNU General Public License or other free or open source software licenses. See COPYRIGHT.php for copyright notices and details.','1.0.0','3.0','views','files','Our default theme for a fruity and flexible use. This theme offers single color variations',NULL,1,'');
/*!40000 ALTER TABLE `lime_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_tutorial_entries`
--

LOCK TABLES `lime_tutorial_entries` WRITE;
/*!40000 ALTER TABLE `lime_tutorial_entries` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_tutorial_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_tutorial_entry_relation`
--

LOCK TABLES `lime_tutorial_entry_relation` WRITE;
/*!40000 ALTER TABLE `lime_tutorial_entry_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_tutorial_entry_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_tutorials`
--

LOCK TABLES `lime_tutorials` WRITE;
/*!40000 ALTER TABLE `lime_tutorials` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_tutorials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_user_groups`
--

LOCK TABLES `lime_user_groups` WRITE;
/*!40000 ALTER TABLE `lime_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_user_in_groups`
--

LOCK TABLES `lime_user_in_groups` WRITE;
/*!40000 ALTER TABLE `lime_user_in_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_user_in_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_user_in_permissionrole`
--

LOCK TABLES `lime_user_in_permissionrole` WRITE;
/*!40000 ALTER TABLE `lime_user_in_permissionrole` DISABLE KEYS */;
/*!40000 ALTER TABLE `lime_user_in_permissionrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lime_users`
--

LOCK TABLES `lime_users` WRITE;
/*!40000 ALTER TABLE `lime_users` DISABLE KEYS */;
INSERT INTO `lime_users` VALUES (1,'admin','$2y$10$P12IlN9MGbrof//j9UxAZeSYOGIOU48YaxK8ZAp03vT14/ncbKB7q','Administrator',0,'en','admin@test.ing','default','default','default',NULL,1,'2026-08-14 16:50:52','2026-08-14 16:50:45','2026-08-14 16:50:52',NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `lime_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-14 16:51:44
