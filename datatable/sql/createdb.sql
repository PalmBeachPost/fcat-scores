CREATE TABLE R3
(GRADE char(3),Dno int ,Dname varchar,Sno int, Sname varchar, Stcount int, Passpc int);

COPY R3
FROM 'D:\R3.csv' DELIMITER ',' CSV;

delete from R3 where Dname <> 'PALM BEACH'

select count(8) from R3

Select S.sno, W.Sno, S.sname, W.Sname From S5 S FULL OUTER join W4 W on S.Sno = W.Sno
