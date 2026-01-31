# AthleticShop 

A full-stack e-commerce demo application built as a portfolio project.

The goal of this project is to demonstrate practical full-stack development skills, including frontend development with React, backend API design with Node.js and Express, and database integration using MySQL.

---

## Tech Stack

### Frontend
- React
- Bootstrap
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MySQL

---

## Project Structure

```
AthleticShop/
│
├── frontend/        # React frontend application
│
├── backend/         # Express backend API
│
├── LICENSE
└── README.md
```

---

##  Installation & Setup

### Prerequisites
- Node.js (LTS version recommended)
- npm
- MySQL

---

###  Database Setup (MySQL)

Create the database and table using the following SQL commands:

```sql
CREATE DATABASE IF NOT EXISTS signup;
USE signup;

CREATE TABLE IF NOT EXISTS login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  password VARCHAR(120) NOT NULL
);
```

---

###  Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
npm start
```

The backend server runs on:

```
http://localhost:8081
```

---

### Frontend Setup

Navigate to the frontend folder and start the React application:

```bash
cd frontend
npm install
npm start
```

The frontend application runs on:

```
http://localhost:3000
```

---

## Features

- User registration
- User login
- REST API communication between frontend and backend
- MySQL database integration

---

## Purpose

This project was developed for educational and portfolio purposes, focusing on:

- Full-stack application architecture
- Client–server communication
- Practical use of React with Node.js and MySQL

---

## License

This project is licensed under the terms of the included LICENSE file.
