--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(255) not null, 
    password VARCHAR(255) not null, 
    PRIMARY KEY (id)
    );
CREATE TABLE gameresults(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    scorepoints INT not null, 
    date DATE NOT NULL,
    userid INT NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
    );
