CREATE DATABASE IF NOT EXISTS creator_pro_core;
CREATE USER 'wizard'@'%' IDENTIFIED WITH caching_sha2_password BY 'MithrandirTheGray';
GRANT ALL PRIVILEGES ON *.* TO 'wizard'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;