# 🏢 Employee Task Management System

A full-stack RESTful web application for managing employees and their assigned tasks.

Built using FastAPI (backend), SQLAlchemy ORM, SQLite database, and a responsive Vanilla JavaScript frontend.

---

## 🚀 Overview

This project demonstrates a modular, layered full-stack architecture:

- Backend: FastAPI + SQLAlchemy
- Database: SQLite (easily switchable to PostgreSQL)
- Frontend: HTML5 + CSS3 + Vanilla JavaScript
- Architecture: Router-based REST API + CRUD layer separation
- Relationship Model: One-to-Many (Employee → Tasks)

Designed to showcase backend engineering fundamentals, relational modeling, API design, and frontend integration.

---

## 🧠 System Architecture

Client (Browser)
        ↓
Vanilla JS (Fetch API)
        ↓
FastAPI REST Endpoints
        ↓
CRUD Layer
        ↓
SQLAlchemy ORM
        ↓
SQLite Database

---

## 📂 Project Structure

```
employee-task-management-system/

├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI app config
│   │   ├── database.py          # DB engine & session
│   │   ├── models.py            # SQLAlchemy models
│   │   ├── schemas.py           # Pydantic validation
│   │   ├── crud/
│   │   │   ├── employees.py
│   │   │   └── tasks.py
│   │   └── routers/
│   │       ├── employees.py
│   │       └── tasks.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md
```

---

## 🛠 Technology Stack

### Backend
- FastAPI
- Uvicorn (ASGI server)
- SQLAlchemy 2.x
- Pydantic v2
- SQLite

Dependencies defined in:
```
requirements.txt
```
:contentReference[oaicite:9]{index=9}  

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API

---

## 🧱 Database Design

### Employee Table

- id (Primary Key)
- name
- email (Unique)
- department
- position
- created_at

### Task Table

- id (Primary Key)
- title
- description
- status (pending / in-progress / completed)
- priority (low / medium / high)
- employee_id (Foreign Key)
- created_at

Relational mapping defined in SQLAlchemy models :contentReference[oaicite:10]{index=10}  

One employee → Multiple tasks.

---

## 🔌 REST API Endpoints

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /employees/ | Create employee |
| GET    | /employees/ | Get all employees |
| GET    | /employees/{id} | Get employee by ID |
| PUT    | /employees/{id} | Update employee |
| DELETE | /employees/{id} | Delete employee |

Router implementation :contentReference[oaicite:11]{index=11}  

---

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /tasks/ | Create task |
| GET    | /tasks/ | Get all tasks |
| GET    | /tasks/{id} | Get task by ID |
| PUT    | /tasks/{id} | Update task |
| DELETE | /tasks/{id} | Delete task |

Router implementation :contentReference[oaicite:12]{index=12}  

---

## 🧪 Backend Design Principles

### Layered Separation

- Router Layer → Handles HTTP logic
- CRUD Layer → Business logic abstraction :contentReference[oaicite:13]{index=13}  
- Models → ORM mapping :contentReference[oaicite:14]{index=14}  
- Schemas → Validation layer :contentReference[oaicite:15]{index=15}  
- Database session management :contentReference[oaicite:16]{index=16}  

This separation improves maintainability and scalability.

---

## 🌐 Frontend Functionality

Implemented using pure JavaScript without frameworks.

- Dynamic tab switching
- Fetch API integration
- Real-time DOM updates
- Toast notifications
- Form validation
- Status & priority badges
- Delete confirmation dialogs

API communication handled in:
:contentReference[oaicite:17]{index=17}  

---

## ⚙️ How to Run

### Backend Setup

```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend starts at:

```
http://localhost:8000
```

Swagger UI:

```
http://localhost:8000/docs
```

FastAPI initialization defined in:
:contentReference[oaicite:18]{index=18}  

---

### Frontend Setup

Option 1 (Serve separately):

```
cd frontend
python -m http.server 8080
```

Open:

```
http://localhost:8080
```

Option 2:

Open `index.html` directly in browser.

---

## 🔐 Security Considerations

Current state: Development-ready

Production improvements recommended:

- JWT Authentication
- Role-based access control
- Environment variable configs
- PostgreSQL migration
- HTTPS
- Rate limiting
- Logging & monitoring

---

## 🎯 Engineering Highlights

This project demonstrates:

- RESTful API design
- Proper ORM modeling
- Relational database concepts
- CRUD abstraction
- Dependency injection (FastAPI Depends)
- CORS configuration
- Frontend-backend integration
- Clean layered architecture
- No-framework frontend engineering

It is designed to showcase backend system design capability rather than just UI development.

---

## 🚀 Future Enhancements

- Authentication (JWT)
- Role-based access control
- Task filtering & search
- Pagination
- Dashboard analytics
- Dockerization
- Cloud deployment (AWS/GCP)

---

## 👤 Author

Tharun Sridhar  
