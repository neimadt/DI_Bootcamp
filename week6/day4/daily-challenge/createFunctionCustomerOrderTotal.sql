CREATE
or REPLACE FUNCTION get_customer_order_total(fn VARCHAR(50), ln VARCHAR(100), sn varchar(50)) RETURNS decimal AS $sum$ BEGIN RETURN(
    SELECT
        coalesce(SUM(i.price), 0)
    FROM
        customers AS u
        INNER JOIN product_orders AS o ON u.id = o.customer_id
        INNER JOIN items AS i ON o.id = i.product_order_id
    WHERE
        u.fname = fn
        AND u.lname = ln
        AND o.serial_number = sn
);

END;

$sum$ LANGUAGE plpgsql;