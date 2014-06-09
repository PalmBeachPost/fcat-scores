SET CLIENT_ENCODING TO UTF8;
SET STANDARD_CONFORMING_STRINGS TO ON;

BEGIN;

/* Create a temp table */
	DROP TABLE IF EXISTS temp;
	CREATE TABLE temp (
		grade int,
		Dno int ,
		Dname varchar ,
		Sno int ,
		Sname varchar ,
		Stcount int,
		Passpc int
		);

	COPY temp FROM :file DELIMITER ',' CSV;

	INSERT INTO schools
	(id, name)
	SELECT sno, sname FROM temp
	WHERE dno = 50 AND sno <> 0
	AND NOT EXISTS (SELECT id FROM schools WHERE id = sno);

	INSERT INTO grades (
		SELECT sno,
		CASE 
			WHEN :subject = 'm' THEN (SELECT id FROM subjects Where name = 'math' limit 1)
			WHEN :subject = 's' THEN (SELECT id FROM subjects Where name = 'science' limit 1)
			WHEN :subject = 'r' THEN (SELECT id FROM subjects Where name = 'reading' limit 1)
			WHEN :subject = 'w' THEN (SELECT id FROM subjects Where name = 'writing' limit 1)
		 	ELSE (SELECT MAX(id) FROM subjects)
		END ,
		grade,
		passpc
		FROM temp
		WHERE (dno = 50 OR dno = 0) AND grade IS NOT NULL AND Sno IS NOT NULL
	  );

	UPDATE schools
	SET isElementary = true
	WHERE id in 
	(SELECT DISTINCT school_id from grades where grade <=5);

	UPDATE schools
	SET isMiddle = true
	WHERE id in 
	(SELECT DISTINCT school_id from grades where grade<=8 AND grade>=6);

	
	UPDATE schools
	SET isHigh = true
	WHERE id in 
	(SELECT DISTINCT school_id from grades where grade>=9);

COMMIT;