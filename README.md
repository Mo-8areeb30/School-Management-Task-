# School-Management-Task-

School Management System

I didn't have the specified requirements as the link in the application form lead to an old project with no readme files or requirements. So, I only created a basic application.

This is a simple school management system built using Node.js and MongoDB. It allows you to manage teachers, students, and other entities within a school environment. Below is an overview of the project structure and functionality:

Project Structure

app.js: This file contains the main application logic. It sets up the Express server, connects to MongoDB, and defines middleware and routes for handling HTTP requests.
models/Teacher.js: This file defines the schema for the Teacher model using Mongoose. It specifies the fields and data types for storing teacher information in the database.
routes/teachers.js: This file contains routes for handling CRUD operations related to teachers. It includes endpoints for getting all teachers, creating a new teacher, updating a teacher, deleting a teacher, and getting a single teacher by ID.
Getting Started

To run the application locally, follow these steps:

Clone this repository to your local machine.
Install dependencies by running npm install.
Start the server by running node app.js.
Access the endpoints using a REST client like Postman or cURL.
Dependencies

Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: Elegant MongoDB object modeling for Node.js.
Body-parser: Node.js body parsing middleware.

