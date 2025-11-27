# Employee Task Management - Backend API

FastAPI-based REST API for managing employees and tasks with SQLAlchemy ORM and SQLite database.

---

## Features

- RESTful API with FastAPI
- Database ORM using SQLAlchemy
- Data Validation with Pydantic schemas
- Auto Documentation (Swagger UI & ReDoc)
- CORS Enabled for frontend integration
- SQLite Database (easy to switch to PostgreSQL)
- Modular Architecture (CRUD, Routers, Models)

---

## Quick Start

### Prerequisites
- Python 3.8 or higher
- pip

### Installation

1. Navigate to backend folder
   cd backend

2. Install dependencies
   pip install -r requirements.txt

3. Run the server
   uvicorn app.main:app --reload

4. Server starts at:
   http://localhost:8000

5. API Documentation:
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

---

## Project Structure

backend/

├── app/

│   ├── __init__.py

│   ├── main.py              # FastAPI app & CORS config

│   ├── database.py          # SQLAlchemy setup

│   ├── models.py            # Database models (Employee, Task)

│   ├── schemas.py           # Pydantic validation schemas

│   ├── crud/

│   │   ├── __init__.py

│   │   ├── employees.py     # Employee CRUD operations

│   │   └── tasks.py         # Task CRUD operations

│   └── routers/

│       ├── __init__.py

│       ├── employees.py     # Employee endpoints

│       └── tasks.py         # Task endpoints

├── app.db                   # SQLite database (auto-generated)

├── requirements.txt         # Python dependencies

└── README.md               # This file

---

## API Endpoints

### Employee Endpoints

Method    Endpoint              Description
POST      /employees/           Create new employee
GET       /employees/           Get all employees
GET       /employees/{id}       Get employee by ID
DELETE    /employees/{id}       Delete employee

### Task Endpoints

Method    Endpoint              Description
POST      /tasks/               Create new task
GET       /tasks/               Get all tasks
GET       /tasks/{id}           Get task by ID
DELETE    /tasks/{id}           Delete task

---

## Request/Response Examples

### Create Employee
POST /employees/
Content-Type: application/json

{
  "name": "Tharun Sridhar",
  "email": "tharun@vit.edu",
  "department": "Engineering",
  "position": "Full Stack Developer"
}

Response:
{
  "id": 1,
  "name": "Tharun Sridhar",
  "email": "tharun@vit.edu",
  "department": "Engineering",
  "position": "Full Stack Developer",
  "created_at": "2025-11-27T22:00:00",
  "tasks": []
}

### Create Task
POST /tasks/
Content-Type: application/json

{
  "title": "Fix authentication bug",
  "description": "Update JWT validation",
  "employee_id": 1,
  "priority": "high",
  "status": "pending"
}

Response:
{
  "id": 1,
  "title": "Fix authentication bug",
  "description": "Update JWT validation",
  "employee_id": 1,
  "priority": "high",
  "status": "pending",
  "created_at": "2025-11-27T22:05:00"
}

---

## Database Schema

### Employee Table
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    department VARCHAR NOT NULL,
    position VARCHAR NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

### Task Table
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR,
    status VARCHAR DEFAULT 'pending',
    priority VARCHAR DEFAULT 'medium',
    employee_id INTEGER REFERENCES employees(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

---

## Technology Stack

- Framework: FastAPI 0.115.0
- Server: Uvicorn 0.32.0 (ASGI)
- ORM: SQLAlchemy 2.0.36
- Validation: Pydantic 2.9.2
- Database: SQLite (dev) / PostgreSQL (prod)

---

## Configuration

### Change Database to PostgreSQL

Edit app/database.py:
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/dbname"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

### Change Port

uvicorn app.main:app --host 0.0.0.0 --port 8001

### Enable/Disable CORS

Edit app/main.py:
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

---

## Troubleshooting

### Port already in use
lsof -i :8000
kill -9 <PID>

### Database locked error
rm app.db
uvicorn app.main:app --reload

### Module not found errors
pip install -r requirements.txt --force-reinstall

---

## Testing with curl

# Create employee
curl -X POST http://localhost:8000/employees/ \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","department":"IT","position":"Dev"}'

# Get all employees
curl http://localhost:8000/employees/

# Create task
curl -X POST http://localhost:8000/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"Test","employee_id":1,"priority":"high","status":"pending"}'

# Get all tasks
curl http://localhost:8000/tasks/

---

## Security Notes (Production)

- Add authentication (JWT/OAuth2)
- Use environment variables for secrets
- Switch to PostgreSQL/MySQL
- Enable HTTPS
- Add rate limiting
- Implement input sanitization
- Add logging and monitoring

---

## Developer

Name: Tharun Sridhar
Institution: VIT Vellore
Specialization: Information Security
Tech Stack: Python, FastAPI, SQLAlchemy

---

## License

Open source - Educational purposes
