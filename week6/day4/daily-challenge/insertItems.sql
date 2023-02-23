INSERT INTO
    items(name, price, product_order_id)
VALUES
    ('Table', 1000.50, get_order_id('R-001')),
    ('Chair', 100, get_order_id('R-001')),
    ('Shelves', 9999, get_order_id('R-001'));

INSERT INTO
    items(name, price, product_order_id)
VALUES
    ('Office desk', 6000.75, get_order_id('R-002')),
    ('Office Chair', 7555.99, get_order_id('R-002'));