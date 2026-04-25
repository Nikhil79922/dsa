

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



     -- Window Function Pattern 1 :- 🔥 PATTERN 1: Top N per Group (MOST IMPORTANT)
        --🧠 Problem :- “Get top 3 highest paid employees per department”

		SELECT * FROM 
		(
          SELECT *, DENSE_RANK() 
		   OVER(PARTITION BY dept ORDER BY salary DESC) AS rnk
		   FROM employees
		) AS t
		WHERE rnk <= 3;

-- Pattern 2 :- 
-- 🔥 PATTERN 2: Deduplication (REAL INTERVIEW QUESTION)
-- 🧠 Full Question

-- You have a table:

-- users (
--   user_id INT,
--   email VARCHAR,
--   name VARCHAR,
--   created_at TIMESTAMP
-- )

--  Due to a bug, duplicate users were created.

--  Task

-- Return only one record per email, keeping the latest created record.

-- ⚠️ Constraints (important)
-- Multiple rows can have same email
-- You must keep the most recent one
-- No data loss except duplicates

SELECT * FROM (
    SELECT * , ROW_NUMBER() OVER(PARTITION BY EMAIL ORDER BY created_at DESC) AS unique_email FROM users
) AS t WHERE unique_email = 1;



-- 🔥 PATTERN 3: Running Total (VERY COMMON)
-- 🧠 Full Question

-- You have a table:

-- sales (
--   order_id INT,
--   order_date DATE,
--   amount NUMERIC
-- )
-- 🎯 Task

-- Return each order with a running total of sales based on order_date.

-- ⚠️ Important
-- Running total = cumulative sum
-- Ordered by date
-- Each row should include sum of all previous + current

SELECT 
  order_id,
  order_date,
  amount,
  SUM(amount) OVER (
    ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total
FROM sales;



-- 🔥 PATTERN 4: Previous vs Current (LAG / LEAD)
-- 🧠 Full Question

-- You have a table:

-- employees (
--   emp_id INT,
--   salary NUMERIC
-- )
-- 🎯 Task

-- For each employee, show:

-- current salary
-- previous employee’s salary
-- difference between them

SELECT 
  emp_id,
  salary,
  prev_salary,
  salary - prev_salary AS diff
FROM (
  SELECT 
    emp_id,
    salary,
    LAG(salary) OVER (ORDER BY emp_id) AS prev_salary
  FROM employees
) AS salary_with_prev;


-- 🔥 PATTERN 5: Gap & Island (Consecutive Records)
-- 🧠 Full Question

-- You have a table:

-- logins (
--   user_id INT,
--   login_date DATE
-- )
-- 🎯 Task

-- Find continuous login streaks for each user
-- 👉 Return:

-- user_id
-- start_date
-- end_date

SELECT user_id , MIN(login_date) AS start_date , MAX(login_date) AS end_date FROM (
    SELECT 
    user_id,
    login_date,
    login_date - INTERVAL '1 day' * ROW_NUMBER() OVER(
        PARTITION BY user_id  ORDER BY login_date
    ) AS grp FROM logins
) AS t
GROUP BY user_id , grp
ORDER BY user_id , start_date

-- 🔥 PATTERN 6: Top N + JOIN (Production-Level)
-- 🧠 Full Question

-- You have two tables:

-- employees (
--   emp_id INT,
--   name VARCHAR,
--   dept_id INT,
--   salary NUMERIC
-- )

-- departments (
--   dept_id INT,
--   dept_name VARCHAR
-- )
-- 🎯 Task

-- Get top 2 highest paid employees in each department,
-- 👉 along with:

-- employee name
-- department name
-- salary

SELECT 
  name,
  dept_name,
  salary
FROM (
  SELECT 
    e.name,
    d.dept_name,
    e.salary,
    DENSE_RANK() OVER (
      PARTITION BY e.dept_id 
      ORDER BY e.salary DESC
    ) AS rnk
  FROM employees e
  JOIN departments d
    ON e.dept_id = d.dept_id
) t
WHERE rnk <= 2;


-- 🔥 PATTERN 7: Conditional Ranking / Filtering (INTERVIEW TRAP)
-- 🧠 Full Question

-- You have:

-- employees (
--   emp_id INT,
--   dept_id INT,
--   salary NUMERIC,
--   status VARCHAR  -- 'active' or 'inactive'
-- )
-- 🎯 Task

-- Get top 2 highest paid ACTIVE employees per department

SELECT 
emp_id , dept_id , salary , status 
FROM (
  SELECT 
   emp_id , dept_id , salary , status , DENSE_RANK () OVER(
    PARTITION BY dept_id 
    ORDER BY salary DESC 
   ) AS rnk FROM employees
   WHERE status = 'active'
) t
WHERE rnk <= 2;

-- 🔥 FINAL INTERVIEW QUESTION

-- You have a table:

-- transactions (
--   user_id INT,
--   txn_date DATE,
--   amount NUMERIC
-- )
-- 🎯 Task

-- For each user, find the longest streak of consecutive transaction days

-- 👉 Output:

-- user_id
-- streak_length (max consecutive days)
-- 🧠 Example
-- user_id	txn_date
-- 1	2024-01-01
-- 1	2024-01-02
-- 1	2024-01-03
-- 1	2024-01-05


SELECT 
  user_id,
  MAX(streak_length) AS streak_length
FROM (
  SELECT 
    user_id,
    COUNT(*) AS streak_length
  FROM (
    SELECT 
      user_id,
      txn_date,
      txn_date - INTERVAL '1 day' * 
        ROW_NUMBER() OVER (
          PARTITION BY user_id 
          ORDER BY txn_date
        ) AS grp
    FROM transactions
  ) t
  GROUP BY user_id, grp
) s
GROUP BY user_id;