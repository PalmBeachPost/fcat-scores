CREATE TABLE M6
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY M6
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\M6.csv' DELIMITER ',' CSV;

delete from M6 where Dno <> 50;

CREATE TABLE M7
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY M7
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\M7.csv' DELIMITER ',' CSV;

delete from M7 where Dno <> 50;

CREATE TABLE M8
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY M8
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\M8.csv' DELIMITER ',' CSV;

delete from M8 where Dno <> 50;

CREATE TABLE R6
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R6
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\R6.csv' DELIMITER ',' CSV;

delete from R6 where Dno <> 50;

CREATE TABLE R7
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R7
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\R7.csv' DELIMITER ',' CSV;

delete from R7 where Dno <> 50;

CREATE TABLE R8
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R8
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\R8.csv' DELIMITER ',' CSV;

delete from R8 where Dno <> 50;

CREATE TABLE s8
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY s8
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\s8.csv' DELIMITER ',' CSV;

delete from s8 where Dno <> 50;

CREATE TABLE W8
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY W8
FROM 'D:\pbpost\fcat-scores\data\cleandata\middle\W8.csv' DELIMITER ',' CSV;

delete from W8 where Dno <> 50;

CREATE TABLE R10
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R10
FROM 'D:\pbpost\fcat-scores\data\cleandata\high\R10.csv' DELIMITER ',' CSV;

delete from R10 where Dno <> 50;

CREATE TABLE R9
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R9
FROM 'D:\pbpost\fcat-scores\data\cleandata\high\R9.csv' DELIMITER ',' CSV;

delete from R9 where Dno <> 50;

CREATE TABLE w10
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY w10
FROM 'D:\pbpost\fcat-scores\data\cleandata\high\w10.csv' DELIMITER ',' CSV;

delete from w10 where Dno <> 50;