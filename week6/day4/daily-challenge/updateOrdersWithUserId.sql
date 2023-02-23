UPDATE product_orders
SET customer_id = get_customer_id('Bob', 'Bobson')
WHERE serial_number IN ('R-001', 'R-003');

UPDATE product_orders
SET customer_id = get_customer_id('Sponge', 'Bob')
WHERE serial_number = 'R-002';