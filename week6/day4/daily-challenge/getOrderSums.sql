SELECT
    o.serial_number,
    SUM(i.price)
FROM
    product_orders AS o
    INNER JOIN items AS i ON o.id = i.product_order_id
GROUP BY
    o.serial_number;