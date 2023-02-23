CREATE
or REPLACE FUNCTION get_order_id(sn varchar(50)) RETURNS INTEGER AS $order_id$ BEGIN RETURN(
    SELECT
        id
    FROM
        product_orders
    WHERE
        serial_number = sn
);

END;

$order_id$ LANGUAGE plpgsql;