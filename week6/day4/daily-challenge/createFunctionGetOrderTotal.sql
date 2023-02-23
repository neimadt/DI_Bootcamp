CREATE
or REPLACE FUNCTION get_order_total(sn varchar(50)) RETURNS decimal AS $sum$ BEGIN RETURN(
    SELECT
        coalesce(SUM(i.price), 0)
    FROM
        product_orders AS o
        INNER JOIN items as i ON o.id = i.product_order_id
    WHERE
        o.serial_number = sn
);

END;

$sum$ LANGUAGE plpgsql;