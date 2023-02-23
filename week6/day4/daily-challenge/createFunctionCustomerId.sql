CREATE
or REPLACE FUNCTION get_customer_id(fn varchar(50), ln varchar(100)) RETURNS INTEGER AS $customer_id$ BEGIN RETURN(
    SELECT
        id
    FROM
        customers
    WHERE
        fname = fn
        AND lname = ln
);

END;

$customer_id$ LANGUAGE plpgsql;