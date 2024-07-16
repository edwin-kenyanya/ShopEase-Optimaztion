import psycopg2
from faker import Faker
import random
from datetime import timedelta, datetime

# Function to establish connection to PostgreSQL
def connect():
    conn = psycopg2.connect(
        dbname='shopease',
        user='edwin',
        password='',
        host='localhost',
        port='5432'
    )
    return conn

# Function to generate sample data for products
def generate_products(conn, num_records):
    cursor = conn.cursor()
    fake = Faker()
    
    for _ in range(num_records):
        name = fake.word()
        price = round(random.uniform(10, 1000), 2)
        stock = random.randint(1, 100)
        cursor.execute('INSERT INTO products (name, price, stock) VALUES (%s, %s, %s)', (name, price, stock))

    conn.commit()
    cursor.close()
    print(f"{num_records} products inserted successfully.")

# Function to generate sample data for customers
def generate_customers(conn, num_records):
    cursor = conn.cursor()
    fake = Faker()

    for _ in range(num_records):
        name = fake.name()
        email = fake.email()
        cursor.execute('INSERT INTO customers (name, email) VALUES (%s, %s)', (name, email))

    conn.commit()
    cursor.close()
    print(f"{num_records} customers inserted successfully.")

# Function to generate sample data for orders
def generate_orders(conn, num_records):
    cursor = conn.cursor()
    fake = Faker()

    for _ in range(num_records):
        customer_id = random.randint(1, 10000)
        product_id = random.randint(1, 10000)
        quantity = random.randint(1, 5)
        order_date = fake.date_between(start_date='-1y', end_date='today')
        cursor.execute('INSERT INTO orders (customer_id, product_id, quantity, order_date) VALUES (%s, %s, %s, %s)', 
                       (customer_id, product_id, quantity, order_date))

    conn.commit()
    cursor.close()
    print(f"{num_records} orders inserted successfully.")

# Main function to run the script
def main():
    num_products = 10000
    num_customers = 10000
    num_orders = 10000

    conn = connect()

    generate_products(conn, num_products)
    generate_customers(conn, num_customers)
    generate_orders(conn, num_orders)

    conn.close()

if __name__ == "__main__":
    main()
