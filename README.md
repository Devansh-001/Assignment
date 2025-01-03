# To-Do List API with JWT Authentication

This is a simple **To-Do List API** built using **Node.js**, **Express**, and **MongoDB** with **JWT authentication** for secure access.

## Features

- **User Authentication**:
  - Register a new user.
  - Login to obtain a JWT token.
  
- **Task Management**:
  - Create, read, update, and delete tasks.
  - Task fields include `title`, `description`, and `status` (pending, in-progress, completed).
  
- **JWT Authentication**:
  - All task-related operations require JWT token-based authentication for secure access.

---

## Endpoints

### Authentication Routes

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and get a JWT token.

### Task Routes (Requires JWT token in `Authorization` header)

- **GET /api/tasks**: Get all tasks.
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/:id**: Get a specific task by its ID.
- **PUT /api/tasks/:id**: Update a task's status.
- **DELETE /api/tasks/:id**: Delete a task.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 14 or higher
- **MongoDB**: Local instance or MongoDB Atlas for cloud storage.

---

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/todolist-api.git
cd todolist-api
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
MONGO_URI=mongodb://localhost:27017/todolist
JWT_SECRET=your_random_generated_secret_key
```

Ensure that `MONGO_URI` points to your MongoDB instance and that `JWT_SECRET` is a securely generated secret key for signing JWT tokens.

### 4. Start the Server

Start the server with the following command:

```bash
npm start
```

The server will run on [http://localhost:5000].

---

## Run the Application

1. **Start MongoDB**: If using a local MongoDB instance, ensure that MongoDB is running.
2. **Start the Express Server**: Use `npm start` to run the backend API on your local server.

---

## Testing the API

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login to get the JWT token for authentication.

### Task Operations

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/:id**: Retrieve a task by ID.
- **PUT /api/tasks/:id**: Update the task’s status (e.g., "pending", "in-progress", "completed").
- **DELETE /api/tasks/:id**: Delete a task.

Make sure to include the `Authorization: Bearer <token>` header in requests that require JWT authentication.

---

## Environment Variables

The application uses environment variables for sensitive information. Create a `.env` file in the root of the project directory and set the following:

- **MONGO_URI**: MongoDB connection URI.
- **JWT_SECRET**: A securely generated secret key used for signing JWT tokens.

Example `.env` file:

```bash
MONGO_URI=mongodb://localhost:27017/todolist
JWT_SECRET=your_random_generated_secret_key
```

---
