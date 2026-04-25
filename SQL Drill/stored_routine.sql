SELECT * FROM employees ;


CREATE PROCEDURE update_salray_on_empID (pSalary NUMERIC , pEmpId INT)
LANGUAGE plpgsql
AS $$
BEGIN 
UPDATE employees
SET salary = pSalary WHERE emp_id = pEmpId;
END;
$$;

CREATE PROCEDURE insert_new_emp (
   pFname VARCHAR(200),
   pLname VARCHAR(200),
   pEmail VARCHAR(100),
   pDept VARCHAR(100),
   psalary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN 
INSERT INTO employees (fname , lname , email , dept , salary ) VALUES (
pFname,
pLname,
pEmail,
pDept,
psalary);
END;
$$;

call update_salray_on_empID (80000 , 11);
call insert_new_emp('undertaker' , 'DeadMan' , 'utk.wwe@gmail.com' , 'Hardware' , 1000000 );


UPDATE employees SET fname='Undertaker' WHERE emp_id = 12;


SELECT COALESCE(dept , 'Max Salary'), MAX(salary) AS max_sal
FROM employees
GROUP BY ROLLUP (dept) ORDER BY max_sal;

-- Without User Defined Function 
SELECT e.* FROM employees as e 
WHERE e.salary = (
        SELECT MAX(salary) FROM employees WHERE dept='HR'
);

-- User Defined Function 

CREATE OR REPLACE FUNCTION max_sal_from_dept (u_Dept VARCHAR(100))
RETURNS TABLE(
  emp_id INT,
  fname VARCHAR(100),
  lname VARCHAR(100),
  email VARCHAR(100),
  dept VARCHAR(100),
  salary NUMERIC(10,2)
)
AS $$
BEGIN 
  RETURN QUERY
  SELECT 
    e.emp_id,
    e.fname,
    e.lname,
    e.email,
    e.dept,
    e.salary
  FROM employees AS e
  WHERE e.dept = u_Dept 
    AND e.salary = (
      SELECT MAX(emp.salary) 
      FROM employees AS emp 
      WHERE emp.dept = u_Dept
    );
END;
$$ LANGUAGE plpgsql;

SELECT * FROM max_sal_from_dept('HR');


