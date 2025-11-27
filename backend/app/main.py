from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import employees, tasks

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Employee & Task Management API",
    description="ProU Technology Assessment - Backend Track",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(employees.router)
app.include_router(tasks.router)

@app.get("/")
def root():
    return {
        "message": "Employee & Task Management API",
        "docs": "/docs",
        "author": "Tharun Sridhar"
    }
