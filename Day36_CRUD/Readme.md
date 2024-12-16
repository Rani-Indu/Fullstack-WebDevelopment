CRUD API Project

Overview

This project demonstrates the implementation of a basic CRUD (Create, Read, Update, Delete) API using Node.js, Express, and MongoDB. The project is designed to handle user data and provides endpoints to create, retrieve, update, and delete users in a MongoDB database. It also incorporates best practices for error handling and middleware usage.

Features

Create User: Add a new user to the database.

Read Users: Fetch a list of all users or specific user details.

Update User: Modify existing user data.

Delete User: Remove a user from the database.

Database Integration: Connects to a MongoDB database using Mongoose.

Environment Configuration: Supports environment variables using dotenv.

Middleware:

express.json() for parsing JSON bodies.

cors for enabling Cross-Origin Resource Sharing.

Prerequisites

Ensure you have the following installed on your system:

Node.js (v16 or later)

MongoDB

A package manager like npm or yarn

Installation

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Create a .env file in the root directory and configure it with the following:

PORT=8000
MONGO_URL=<your-mongodb-connection-string>

Start the server:

npm start

The server will run on http://localhost:8000/.

API Endpoints

Base URL: http://localhost:8000

1. Home

GET /

Description: Returns a welcome message.

Response:

"Hello World !!"

2. Create User

POST /createUser

Description: Creates a new user.

Request Body:

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}

Response:

{
  "success": true,
  "message": "User created successfully",
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}

3. #Get All Users

GET /getUsers

Description: Fetches all users from the database.

Response:

{
  "success": true,
  "message": "Process successful",
  "users": [
    {
      "_id": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
}

4. #Delete User

DELETE /deleteUser/:id

Description: Deletes a user by ID.

Response:

{
  "success": true,
  "message": "User deleted successfully",
  "user": {
    "_id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}

5. Update User

PUT /editUser/:id

Description: Updates user details by ID.

Request Body:

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}

Response:

{
  "success": true,
  "message": "User updated successfully",
  "user": {
    "_id": "12345",
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
}



Technologies Used

Backend: Node.js, Express

Database: MongoDB with Mongoose

Environment Configuration: dotenv

Middleware: cors, express.json







Author

Name: Indu Rani

Contact: raniindu22@gmail.com

Feel free to contribute or raise issues! 🎉