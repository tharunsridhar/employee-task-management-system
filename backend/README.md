# 🧩 Employee & Task Management API (Backend)

RESTful API built using FastAPI and SQLAlchemy for managing employees and tasks with relational database modeling.

---

## 🚀 Overview

This backend service provides:

- Employee CRUD operations
- Task CRUD operations
- One-to-Many relationship (Employee → Tasks)
- Pydantic validation
- SQLAlchemy ORM
- Auto-generated Swagger documentation
- CORS configuration for frontend integration

---

## 🏗 Architecture

FastAPI Router Layer  
        ↓  
CRUD Layer  
        ↓  
SQLAlchemy ORM  
        ↓  
SQLite Database  

Layered separation improves maintainability and scalability.

---

## 🛠 Tech Stack

- FastAPI
- Uvicorn
- SQLAlchemy 2.x
- Pydantic v2
- SQLite

Dependencies:
:contentReference[oaicite:0]{index=0}  

---

## 📂 Structure

```
backend/
├── app/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud/
│   │   ├── employees.py
│   │   └── tasks.py
│   └── routers/
│       ├── employees.py
│       └── tasks.py
├── requirements.txt
└── README.md
```

---

## 🧱 Database Models

Relational mapping defined in:
:contentReference[oaicite:1]{index=1}  

- One employee can have multiple tasks
- Foreign key relationship enforced

---

## 🔌 API Endpoints

### Employees

POST   /employees/  
GET    /employees/  
GET    /employees/{id}  
PUT    /employees/{id}  
DELETE /employees/{id}  

### Tasks

POST   /tasks/  
GET    /tasks/  
GET    /tasks/{id}  
PUT    /tasks/{id}  
DELETE /tasks/{id}  

Task router implementation:
:contentReference[oaicite:2]{index=2}  

---

## ▶️ Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API Base URL:
```
http://localhost:8000
```

Swagger Docs:
```
http://localhost:8000/docs
```

App initialization:
:contentReference[oaicite:3]{index=3}  

---

## 🔐 Production Improvements

- JWT authentication
- Role-based access control
- PostgreSQL migration
- Environment variables
- HTTPS
- Rate limiting

---

## 👤 Author

Tharun Sridhar
