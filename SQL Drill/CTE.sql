--CTE 
	WITH max_sal_with_userdetails AS(
	SELECT dept, MAX(salary) as max_salary FROM employees GROUP BY dept
)
		SELECT e.emp_id , e.fname , e.lname , e.dept , e.salary  FROM 
		employees e JOIN 
		max_sal_with_userdetails ms ON e.dept= ms.dept
		WHERE e.salary=ms.max_salary;

        -- INFo :- data is not persisted , so needed to include in query time when every needed to includes