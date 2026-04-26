
		--Triggers 
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