CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    'name' VARCHAR (100) NOT NULL,
    price DECIMAL NOT NULL
);

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL
);