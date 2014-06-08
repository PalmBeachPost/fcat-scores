--Insert all schools that are just high schools
INSERT INTO schools
(id, name, type)
Select sno, sname, 3 from R10
where sno not in (select id from schools);

-- update schools that are middle schools
UPDATE schools
SET type = 5
WHERE id in (select sno from R10)
and type=2;

-- update schools that are elementary and middle schools
UPDATE schools
SET type = 6
WHERE id in (select sno from R10)
and type=4;

--Insert all schools that are just high schools
INSERT INTO schools
(id, name, type)
Select sno, sname, 3 from R9
where sno not in (select id from schools);

-- update schools that are middle schools
UPDATE schools
SET type = 5
WHERE id in (select sno from R9)
and type=2;

-- update schools that are elementary and middle schools
UPDATE schools
SET type = 6
WHERE id in (select sno from R9)
and type=4;

--Insert all schools that are just high schools
INSERT INTO schools
(id, name, type)
Select sno, sname, 3 from w10
where sno not in (select id from schools);

-- update schools that are middle schools
UPDATE schools
SET type = 5
WHERE id in (select sno from w10)
and type=2;

-- update schools that are elementary and middle schools
UPDATE schools
SET type = 6
WHERE id in (select sno from w10)
and type=4;

Create table high
(id int, 
name varchar,
r10 int, R9 int, w10 int);

INSERT INTO middle
(id,name, R9, R10, W10)
Select id, initcap(name), 
m6.passpc AS r9, 
m7.passpc as r10, 
m8.passpc as w10
FROM schools S 
LEFT OUTER JOIN R9 on S.id = R9.sno
LEFT OUTER JOIN R10 ON S.id = R10.sno
LEFT OUTER JOIN W10 on S.id = W10.sno
WHERE S.type in (3,5,6);