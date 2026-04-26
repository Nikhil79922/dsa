
		--Triggers  Before
	    CREATE OR REPLACE FUNCTION finite_sal_trigger()
		RETURNS TRIGGER 
		AS $$
		BEGIN 
        IF NEW.salary < 0 THEN 
		NEW.salary=0;
		END IF;
		RETURN NEW ;
		END; 
		$$ LANGUAGE plpgsql;

		CREATE TRIGGER before_salary_update
		BEFORE UPDATE ON employees
		FOR EACH ROW 
		EXECUTE FUNCTION finite_sal_trigger();


        -- After cases 
        CREATE TABLE employee_audit (
  emp_id INT,
  old_salary NUMERIC,
  new_salary NUMERIC,
  changed_at TIMESTAMP DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION audit_salary()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO employee_audit(emp_id, old_salary, new_salary)
  VALUES (OLD.emp_id, OLD.salary, NEW.salary);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER salary_update_audit
AFTER UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION audit_salary();



-- 🔥 TRIGGER PROBLEM (INTERVIEW LEVEL)
-- 🧠 Scenario

-- You have a table:

-- employees (
--   emp_id INT,
--   name VARCHAR,
--   dept_id INT,
--   salary NUMERIC
-- )
-- 🎯 Task

-- Whenever an employee’s salary is updated, store the change in a log table.

-- 📦 Log table structure
-- salary_log (
--   log_id SERIAL,
--   emp_id INT,
--   old_salary NUMERIC,
--   new_salary NUMERIC,
--   changed_at TIMESTAMP
-- )
-- ⚠️ Requirements
-- Only log when salary actually changes
-- Capture:
-- emp_id
-- old salary
-- new salary
-- timestamp
-- Use a trigger

CREATE OR REPLACE FUNCTION insert_sal_log()
RETURNS TRIGGER 
AS $$ 
BEGIN 
  IF OLD.salary <> NEW.salary THEN
    INSERT INTO salary_log(emp_id, old_salary, new_salary, changed_at)
    VALUES (OLD.emp_id, OLD.salary, NEW.salary, NOW());
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_sal_log
AFTER UPDATE ON employees
FOR EACH ROW 
EXECUTE FUNCTION insert_sal_log();



-- 🔥 FINAL TRIGGER QUESTION (DO OR DIE)
-- 🧠 Scenario

-- You have a table:

-- orders (
--   order_id INT,
--   user_id INT,
--   amount NUMERIC
-- )
-- 🎯 Task

-- Whenever a new order is inserted:

-- 👉 If amount <= 0
-- ➡️ Reject the insert with an error

-- 👉 Else
-- ➡️ Allow insert normally
CREATE OR REPLACE FUNCTION safe_amount()
RETURNS TRIGGER
AS $$
BEGIN 
  IF NEW.amount <= 0 THEN 
    RAISE EXCEPTION 'Cannot insert non-positive amount';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER safe_amount_entries_alert
BEFORE INSERT ON orders
FOR EACH ROW 
EXECUTE FUNCTION safe_amount();