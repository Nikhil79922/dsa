

-- Window Function 

SELECT SUM(salary) OVER()
   FROM employees;

SELECT fname , lname , SUM(salary) OVER(ORDER BY salary)
   FROM employees;

SELECT fname , lname , salary , AVG(salary) OVER(ORDER BY salary)
   FROM employees;

SELECT  fname , lname , dept , ROW_NUMBER() OVER(PARTITION BY dept ORDER BY dept)
   FROM employees;

   SELECT  fname , lname , dept , salary , RANK() OVER(ORDER BY salary DESC)
   FROM employees LIMIT 3;

   SELECT  fname , lname , dept , salary , DENSE_RANK() OVER(ORDER BY salary DESC)
   FROM employees LIMIT 3;

SELECT  fname , lname , dept , salary, (salary - LAG(salary) OVER(ORDER BY salary)) AS Running_diff
    FROM employees;

SELECT  fname , lname , dept , salary, COALESCE(salary - LEAD(salary) OVER(ORDER BY salary),0) AS Running_diff
    FROM employees;

   SELECT  fname , lname , dept , salary , FIRST_VALUE(salary) OVER(PARTITION BY dept ORDER BY salary DESC)
   FROM employees;