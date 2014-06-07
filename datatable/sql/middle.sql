INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from M6
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from m6)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from M7
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from m7)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from M8
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from m8)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from R6
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from r6)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from R7
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from r7)
and type=1;


INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from R8
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from r8)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from S8
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from s8)
and type=1;

INSERT INTO schools
(id, name, type)
Select sno, sname, 2 from W8
where sno not in (select id from schools);

UPDATE schools
SET type = 4
WHERE id in (select sno from w8)
and type=1;

Create table middle
(id int, 
name varchar,
M6 int, M7 int, M8 int, R6 int, R7 int, R8 int, S8 int, W8 int);

INSERT INTO middle
(id,name,M6, M7, M8, R6, R7, R8, S8, W8)
Select id, initcap(name), 
m6.passpc AS M6, 
m7.passpc as m7, 
m8.passpc as m8,
r6.passpc as r6,
r7.passpc as r7,
r8.passpc as r8,
s8.passpc as s8,
w8.passpc as w8
FROM schools S 
LEFT OUTER JOIN M6 on S.id = m6.sno
LEFT OUTER JOIN M7 ON S.id = M7.sno
LEFT OUTER JOIN M8 on S.id = M8.sno
LEFT OUTER JOIN R6 on S.id = r6.sno
LEFT OUTER JOIN R7 on S.id = R7.sno
LEFT OUTER JOIN R8 on S.id = R8.sno
LEFT OUTER JOIN S8 on S.id = s8.sno
LEFT OUTER JOIN W8 on S.id = W8.sno
WHERE S.type in (2,4, 6);
