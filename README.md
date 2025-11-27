# Employee Task Management System - Full Stack

A complete full-stack web application for managing employees and tasks, built with FastAPI backend and pure HTML/CSS/JS frontend.

---

## Overview

This project demonstrates a modern full-stack architecture with:
- Backend: FastAPI + SQLAlchemy + SQLite
- Frontend: Pure HTML5 + CSS3 + Vanilla JavaScript
- Communication: RESTful API with JSON
- Features: CRUD operations, responsive design, real-time updates

---

## Features

### Backend Features
- RESTful API with FastAPI
- SQLAlchemy ORM with SQLite database
- Pydantic data validation
- Auto-generated API documentation (Swagger UI)
- CORS enabled for frontend communication
- Modular architecture (MVC pattern)

### Frontend Features
- Modern gradient UI design
- Fully responsive (mobile/tablet/desktop)
- Smooth animations and transitions
- Real-time notifications
- No framework dependencies
- Clean, maintainable code

### Core Functionality
- Employee Management: Add, view, and delete employees
- Task Management: Create and assign tasks with priorities
- Task Tracking: Monitor status (Pending/In Progress/Completed)
- Notifications: Real-time feedback for user actions

---

## Quick Start

### Prerequisites
- Python 3.8+
- Web browser (Chrome/Firefox/Safari/Edge)
- pip (Python package manager)

### Installation Steps

1. Extract the project folder

2. Install backend dependencies:
   cd backend
   pip install -r requirements.txt

3. Start the backend server:
   uvicorn app.main:app --reload

4. Open browser and go to:
   http://localhost:8000

   The frontend is automatically served by the backend.

### Alternative: Run Frontend Separately

If you want to run frontend on a different port:

cd frontend
python -m http.server 8080

Then open: http://localhost:8080

Note: Make sure to update API_URL in script.js if needed.

---

## Project Structure

employee-task-manager/

├── README.md

├── backend/

│ ├── app/

│ │ ├── init.py

│ │ ├── main.py

│ │ ├── database.py

│ │ ├── models.py

│ │ ├── schemas.py

│ │ ├── crud/

│ │ │ ├── init.py

│ │ │ ├── employees.py

│ │ │ └── tasks.py

│ │ └── routers/

│ │ ├── init.py

│ │ ├── employees.py

│ │ └── tasks.py

│ ├── requirements.txt

│ └── README.md

└── frontend/

├── index.html

├── styles.css

├── script.js

└── README.md

---

## API Endpoints

### Employee Endpoints

Method    Endpoint              Description
POST      /employees/           Create new employee
GET       /employees/           Get all employees
GET       /employees/{id}       Get specific employee by ID
DELETE    /employees/{id}       Delete employee

### Task Endpoints

Method    Endpoint              Description
POST      /tasks/               Create new task
GET       /tasks/               Get all tasks
GET       /tasks/{id}           Get specific task by ID
DELETE    /tasks/{id}           Delete task

### Documentation Endpoints

GET       /docs                 Swagger UI (Interactive API docs)
GET       /redoc                ReDoc (Alternative API docs)
GET       /                     Frontend application

---

## Database Schema

### Employee Table

Field           Type            Description
id              Integer         Primary key, auto-increment
name            String          Employee full name
email           String          Unique email address
department      String          Department name
position        String          Job position/title
created_at      DateTime        Timestamp of creation

### Task Table

Field           Type            Description
id              Integer         Primary key, auto-increment
title           String          Task title
description     String          Task details (optional)
status          String          pending/in-progress/completed
priority        String          low/medium/high
employee_id     Integer         Foreign key to employees table
created_at      DateTime        Timestamp of creation

Relationship: One employee can have multiple tasks (One-to-Many)

---

## Technology Stack

### Backend Technologies

Component       Technology      Version     Purpose
Framework       FastAPI         0.115.0     Web framework
Server          Uvicorn         0.32.0      ASGI server
ORM             SQLAlchemy      2.0.36      Database ORM
Validation      Pydantic        2.9.2       Data validation
Database        SQLite          3.x         Database (dev)

### Frontend Technologies

Component       Technology      Version     Purpose
Structure       HTML5           -           Markup
Styling         CSS3            -           Styling and animations
Logic           JavaScript      ES6+        Functionality
HTTP Client     Fetch API       -           API requests

---

## Usage Guide

### Using the Web Interface

1. Start the Backend:
   cd backend
   uvicorn app.main:app --reload

2. Open Browser:
   Navigate to http://localhost:8000

3. Add Employee:
   - Click "Employees" tab
   - Fill in: Name, Email, Department, Position
   - Click "Add Employee" button
   - Employee appears in the list below

4. Add Task:
   - Click "Tasks" tab
   - Enter task title and description
   - Select employee from dropdown
   - Choose priority level
   - Choose status
   - Click "Add Task" button
   - Task appears in the list below

5. Delete Items:
   - Click red "Delete" button on any employee or task card
   - Confirm deletion in the popup dialog

### Using the API Directly

Example using curl:

# Create Employee
curl -X POST http://localhost:8000/employees/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tharun Sridhar",
    "email": "tharun@vit.edu",
    "department": "Engineering",
    "position": "Full Stack Developer"
  }'

# Get All Employees
curl http://localhost:8000/employees/

# Create Task
curl -X POST http://localhost:8000/tasks/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Implement authentication",
    "description": "Add JWT-based authentication",
    "employee_id": 1,
    "priority": "high",
    "status": "pending"
  }'

# Get All Tasks
curl http://localhost:8000/tasks/

# Delete Employee
curl -X DELETE http://localhost:8000/employees/1

# Delete Task
curl -X DELETE http://localhost:8000/tasks/1

---

## Configuration

### Change Backend Port

uvicorn app.main:app --host 0.0.0.0 --port 8001 --reload

Then update API_URL in frontend/script.js:
const API_URL = 'http://localhost:8001';

### Switch to PostgreSQL

Edit backend/app/database.py:

SQLALCHEMY_DATABASE_URL = "postgresql://username:password@localhost/dbname"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

Install PostgreSQL driver:
pip install psycopg2-binary

### Configure CORS

Edit backend/app/main.py:

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

---

## Troubleshooting

### Backend Issues

Problem: Port 8000 already in use
Solution:
  lsof -i :8000
  kill -9 <PID>
  OR use different port: --port 8001

Problem: Module not found
Solution:
  cd backend
  pip install -r requirements.txt --force-reinstall

Problem: Database locked
Solution:
  rm backend/app.db
  Restart server (new database will be created)

### Frontend Issues

Problem: Cannot connect to API
Solution:
  - Verify backend is running
  - Check API_URL in frontend/script.js
  - Open browser console (F12) for errors
  - Check CORS settings in backend

Problem: Styles not loading
Solution:
  - Clear browser cache (Ctrl+Shift+Delete)
  - Verify all files are in frontend/ folder
  - Check browser console for 404 errors

Problem: Blank employee dropdown in Tasks
Solution:
  - Add at least one employee first
  - Refresh the page
  - Check browser console for API errors

---

## Deployment

### Backend Deployment

Options:
- Heroku: Add Procfile
- AWS/GCP/Azure: Use Docker
- DigitalOcean: Deploy on VPS

Production Checklist:
- Switch to PostgreSQL/MySQL
- Add authentication (JWT)
- Use environment variables
- Enable HTTPS
- Add rate limiting
- Configure logging
- Setup monitoring

### Frontend Deployment

Options:
- Netlify: Drag and drop
- Vercel: Connect GitHub
- GitHub Pages: Push to gh-pages branch

Update API_URL in script.js to production backend URL.

---

## Security Considerations

Current State: Development Only

For Production, Add:
- User authentication (JWT/OAuth2)
- Password hashing (bcrypt)
- Input validation and sanitization
- SQL injection prevention (handled by SQLAlchemy)
- XSS protection
- CSRF tokens
- Rate limiting
- HTTPS/SSL certificates
- Environment variables for secrets
- Database backups

---

## Future Enhancements

Planned Features:
- User authentication and authorization
- Task editing functionality
- Search and filter options
- Task assignment notifications
- File attachments for tasks
- Task comments and activity log
- Dashboard with statistics
- Data export (CSV/PDF)
- Email notifications
- Calendar view for tasks
- Task deadlines and reminders
- Multi-user support
- Role-based access control

---

## Contributing

How to Contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit pull request

---

## Developer

Name: Tharun Sridhar
Institution: VIT Vellore
Specialization: Information Security
Tech Stack: FastAPI, SQLAlchemy, HTML5, CSS3, Vanilla JavaScript

---

## License

---

## Support

For issues or questions:
1. Check backend/README.md for API details
2. Check frontend/README.md for UI details
3. Debug using browser console (F12)
4. Test API at http://localhost:8000/docs

---

Built with code, not complexity.
