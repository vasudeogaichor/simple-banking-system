# Simple Banking System
A web application built with Node.js, Express.js, React.js, and MySQL.

Visit to access: http://vasudeogaichor.pythonanywhere.com/bank-system

## Description

This project is a web application that demonstrates the integration of Node.js, Express.js, React.js, and MySQL. It provides a basic CRUD (Create, Read, Update, Delete) functionality for managing data stored in a MySQL database. The backend is built with Node.js and Express.js, serving RESTful APIs to the frontend React.js application. The frontend is implemented using React.js, providing a user-friendly interface for interacting with the data.

## Features

- User authentication
- Create, read, update, and delete transactions and users
- Responsive user interface using React.js
- Integration with MySQL database for data storage

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vasudeogaichor/simple-banking-system
   cd simple-banking-system
   ```
2. Install backend dependencies:
    ```bash
    cd backend-nodejs-mysql
    npm install
    npm install -g sequelize-cli
    npm install -g nodemon
    ```
3. Setup database, seed data and start server
    ```bash
    docker-compose up -d
    sequelize db:migrate
    sequelize db:seed:all
    npm start
    ```

4. Install frontend dependencies:
    ```bash
    cd ../frontend-react
    npm install
    ```

5. Open your browser and navigate to http://localhost:3001 to view the application.
