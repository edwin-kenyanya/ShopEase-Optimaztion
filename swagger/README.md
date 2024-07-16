# ShopEase E-Commerce Database Optimization

## Setup Instructions

### PostgreSQL

1. Execute SQL Scripts:
   - Ensure PostgreSQL is installed and running.
   - Open a terminal or command prompt.

2. //Navigate to the Directory Containing SQL Scripts:
   //```bash//
   cd path/to/your/sql/scripts
   //```bash//
   psql -U (db-user) -d shopease -f schema.sql
   psql -U (db-user) -d shopease -f data_population.sql

2.NODEjs application
Install Dependencies using npm install
3.Create .env file with PostgreSQL details:
DB_USER=edwin
DB_HOST=localhost
DB_NAME=shopease
DB_PASSWORD=" "
DB_PORT=5432

4.Start the Application:

npm start

this launches the Node.js application with PostgreSQL database connectivity.
//## 5. Access API by Visit http://localhost:3000/api-docs in your web browser to view Swagger UI for API documentation.//

This now includes detailed instructions on how to navigate to the directory containing SQL scripts and how to execute them using `psql`. Adjust the paths and database details (`your_db_user`, `your_db_name`, etc.) according to your specific setup.
