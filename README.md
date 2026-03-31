# 🧩 Role-Based Dashboard (MERN Stack)

A full-stack **Role-Based Dashboard Application** built using the MERN stack (MongoDB, Express, React, Node.js).
The system supports authentication, role-based access control, and CRUD operations with a clean and responsive UI.

---

## 🚀 Features

### 🔐 Authentication

* Login using email and password
* Passwords securely hashed using bcrypt
* JWT-based authentication
* Role-based redirection after login

---

### 👑 Roles & Permissions

#### Super Admin

* Create, view, update, delete **Admins**
* Create, view, update, delete **Users**
* Full system access

#### Admin

* Create, view, update, delete **Users created by them**
* Cannot access other Admins or their Users

#### User

* Login and access personal dashboard
* Perform CRUD operations on **Notes**

---

### 🛠 CRUD Modules

* Admin Management
* User Management
* Notes Management (User-specific)

---

### 🎨 Frontend

* Built with React + Vite
* Styled using Tailwind CSS
* Fully responsive UI
* Protected routes
* Reusable components

---

### ⚙️ Backend

* Node.js + Express APIs
* MongoDB database
* JWT authentication
* Middleware for role-based access control

---

## 📁 Project Structure

```
role-based-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
```

---

## 🧑‍💻 Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB
* JWT (jsonwebtoken)
* bcryptjs

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository

```
git clone <your-repo-url>
cd role-based-dashboard
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/role_dashboard
JWT_SECRET=supersecret
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongod
```

---

## 🌱 Initial Data Setup

⚠️ Important: Do NOT insert users manually (password hashing required)

### Create Super Admin

Use API:

```
POST /api/auth/register-super
```

Body:

```json
{
  "name": "Super Admin",
  "email": "super@admin.com",
  "phone": "9999999999",
  "password": "123456"
}
```

---

## 🔑 API Endpoints

### Auth

* `POST /api/auth/login`

### Super Admin

* `POST /api/admin`
* `GET /api/admin`
* `DELETE /api/admin/:id`

### Admin

* `POST /api/user`
* `GET /api/user`

### User

* `POST /api/notes`
* `GET /api/notes`
* `DELETE /api/notes/:id`

---

## 🔐 Authentication Flow

1. User logs in
2. Backend validates credentials
3. JWT token is generated
4. Token stored in localStorage
5. Protected routes validate token & role

---

## 🛡 Security Features

* Password hashing (bcrypt)
* JWT authentication
* Role-based authorization middleware
* Protected API routes

---

## 📸 UI Highlights

* Responsive dashboards
* Form-based CRUD operations
* Clean Tailwind UI
* Role-specific views

---

## 🚀 Future Enhancements

* ✏️ Edit (Update) functionality UI
* 🔍 Search & Pagination
* 📊 Dashboard analytics
* 🌐 Deployment (Vercel + Render + MongoDB Atlas)
* 🔐 Refresh tokens & advanced auth

---

## 🧠 Learnings

* Role-Based Access Control (RBAC)
* JWT Authentication
* Full-stack MERN architecture
* Secure password handling
* API design & middleware usage

---



## 👨‍💻 Author

**Yogesh Sharma**

---

⭐ If you found this helpful, give it a star!
