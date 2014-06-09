SET CLIENT_ENCODING TO UTF8;
SET STANDARD_CONFORMING_STRINGS TO ON;

BEGIN;

/*----------------------------School table--------------------------*/
	DROP TABLE IF EXISTS schools CASCADE;
	CREATE TABLE schools (
		 id int 	PRIMARY KEY,
		 name varchar NOT NULL,
		 isElementary	boolean	DEFAULT false,
		 isMiddle	boolean DEFAULT false,
		 isHigh	boolean DEFAULT false,
		 isCharter boolean DEFAULT false
		);

	INSERT INTO schools
	VALUES (0,'State Average', DEFAULT, DEFAULT, DEFAULT, DEFAULT);

/*----------------------------Subject table--------------------------*/
	DROP TABLE IF EXISTS subjects CASCADE;
	CREATE TABLE subjects (
		 id SERIAL PRIMARY KEY,
		 name varchar UNIQUE NOT NULL
		);

	INSERT INTO subjects 	(name)
	VALUES ('math'), 
		 ('science'), 
		 ('reading'),
	 	 ('writing'),
	 	 ('unknown');

/*----------------------------Grades table--------------------------*/
	DROP TABLE IF EXISTS grades;
	CREATE TABLE grades (
		 school_id int REFERENCES schools (id),
		 subject_id int REFERENCES subjects (id),
		 grade int NOT NULL,
		 score int,
		 PRIMARY KEY (school_id, subject_id, grade)
		);

COMMIT;