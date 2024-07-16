-- Drop existing tables (if needed, be cautious in production)
--DROP TABLE IF EXISTS orders;
--DROP TABLE IF EXISTS products;
--DROP TABLE IF EXISTS customers;

-- Create customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Create products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Indexes for faster querying
CREATE INDEX idx_customer_id ON orders(customer_id);
CREATE INDEX idx_product_id ON orders(product_id);

-- Example of partitioning (optional, for large datasets)
-- Example partition by range for orders table
-- CREATE TABLE orders_partition_2023 PARTITION OF orders FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
-- Ensure to manage partitions according to data growth and query patterns.

-- Example of triggers (for automation, enforce business rules)
-- Triggers could be added to update inventory, calculate totals, etc.

-- Additional tables and schema enhancements can be added as needed

