CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE questions(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    gender VARCHAR(150) NOT NULL,
	q_one INT NOT NULL,
    q_two INT NOT NULL,
	q_three INT NOT NULL,
	q_four INT NOT NULL,
	q_five INT NOT NULL,
	q_six INT NOT NULL,
	q_seven INT NOT NULL,
	q_eight INT NOT NULL,
	q_nine INT NOT NULL,
	q_ten INT NOT NULL,
	PRIMARY KEY (id)
);




ALTER TABLE questions
ADD COLUMN gender VARCHAR(150) AFTER name;


INSERT INTO questions (name, gender,q_one,q_two,q_three,q_four,q_five,q_six,q_seven,q_eight,q_nine,q_ten) VALUES ('jason', 'male', '1', '3', '4', '5', '2', '3', '5', '5', '1', '2');