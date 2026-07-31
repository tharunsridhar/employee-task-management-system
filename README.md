# 🏢 Employee Task Management System

![FastAPI](https://img.shields.io/badge/FastAPI-App-009688?style=flat-square&logo=fastapi&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-D71F00?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=flat-square&logo=sqlite&logoColor=white)

Full-stack web application for managing employees and tasks.

Backend: FastAPI + SQLAlchemy  
Frontend: HTML + CSS + Vanilla JavaScript  

Demonstrates RESTful API design, relational modeling, and frontend integration.

---

## 🧠 Architecture

Browser (Frontend)
        ↓
Fetch API Calls
        ↓
FastAPI REST API
        ↓
CRUD Layer
        ↓
SQLAlchemy ORM
        ↓
SQLite Database

---

## 🚀 Features

- Employee CRUD
- Task CRUD
- Relational mapping (One-to-Many)
- Modular backend architecture
- API documentation (Swagger)
- Responsive UI
- No frontend frameworks

---

## 📂 Structure

```
employee-task-management-system/
├── backend/
├── frontend/
└── README.md
```

---

## ▶️ Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:
```
http://localhost:8000
```

---

## ▶️ Run Frontend

```bash
cd frontend
python -m http.server 8080
```

Open:
```
http://localhost:8080
```

---

## 🔐 Future Improvements

- Authentication (JWT)
- Role-based access control
- PostgreSQL migration
- Dockerization
- Cloud deployment

---

## 👤 Author

Tharun Sridhar
