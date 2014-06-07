CREATE TABLE Schooltype
(id int,
name varchar);

INSERT INTO Schooltype
(id, name)
VALUES(1,'Elementary'),(2,'Middle'),(3,'High')

DROP TABLE schools;

CREATE TABLE schools
(id int, name varchar, type int);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 from s5
where sno not in (select id from schools);;

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM m3
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM m4
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM m5
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM r3
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM r4
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM r5
where sno not in (select id from schools);

INSERT INTO schools
(id, name, type)
Select sno, sname, 1 FROM w4
where sno not in (select id from schools);


Create table elementary
(id int, 
name varchar,
S5 int, M3 int, M4 int, m5 int, r3 int, r4 int, r5 int, w4 int)

INSERT INTO elementary
(id,name,S5 , M3 , M4 , m5, r3 , r4, r5, w4)
Select id, initicap(name), 
s5.passpc AS S5, 
m3.passpc as m3, 
m4.passpc as m4,
m5.passpc as m5,
r3.passpc as r3,
r4.passpc as r4,
r5.passpc as r5,
w4.passpc as w4
FROM schools S 
LEFT OUTER JOIN S5 on S.id = s5.sno
LEFT OUTER JOIN M3 ON S.id = M3.sno
LEFT OUTER JOIN M4 on S.id = M4.sno
LEFT OUTER JOIN M5 on S.id = M5.sno
LEFT OUTER JOIN R3 on S.id = R3.sno
LEFT OUTER JOIN R4 on S.id = R4.sno
LEFT OUTER JOIN R5 on S.id = R5.sno
LEFT OUTER JOIN W4 on S.id = W4.sno
WHERE S.type = 1


select * from elementary

