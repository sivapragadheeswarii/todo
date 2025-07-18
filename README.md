## Full-Stack To-Do List App (MERN)

A full-stack To-Do list app with user authentication built using:

-  React (Frontend)
-  Node.js + Express (Backend)
-  MongoDB (Database)
-  JWT (Authentication)

---

##  Project Structure

todo-app
- backend/ # Express.js + MongoDB API
- frontend/ # React.js UI
- README.md # Combined documentation


---

##  How to Run This Project Locally

###  1. Backend Setup

#### Step 1: Navigate to backend folder

cd backend
Step 2: Install dependencies
npm install

Step 3: Create .env file in backend

Mongo_URI=mongodb+srv://sivapragadheeswari2004:sivapragadheeswari@siva.ccriw9e.mongodb.net/Nodej?retryWrites=true&w=majority&appName=siva
PORT=5000
JWT_SECRET=ThisIsMySuperSecretKey@2025!

Step 4: Start backend server
npm run dev

 2. Frontend Setup
Step 1: Navigate to frontend folder
cd frontend

Step 2: Install frontend packages
npm install

Step 3: Start the frontend
npm start


Features
User Signup/Login

JWT token-based authentication

Create, Read, Update, Delete Todos

Protected routes

Each user sees only their todos

 Tech Stack

Frontend	- React, Axios
Backend	    - Node.js, Express
Database    - MongoDB, Mongoose
Auth	    - bcryptjs, JWT





 Postman Testing Endpoints
POST /api/auth/signup – Register user

POST /api/auth/login – Login & get JWT

GET /api/todos – Fetch user's todos (requires token)

POST /api/todos – Add a new todo (requires token)

PUT /api/todos/:id – Update todo (requires token)

DELETE /api/todos/:id – Delete todo (requires token)

