CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(100) NOT NULL
);

CREATE TABLE product_orders (
    id SERIAL PRIMARY KEY,
    serial_number VARCHAR(50) NOT NULL
);

ALTER TABLE
    product_orders
ADD
    COLUMN customer_id INTEGER;
ALTER TABLE
    product_orders
ADD
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers (id);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL DEFAULT 0.00
);

ALTER TABLE
    items
ADD
    COLUMN product_order_id INTEGER;
ALTER TABLE
    items
ADD
    CONSTRAINT fk_product_order_id FOREIGN KEY (product_order_id) REFERENCES product_orders (id);