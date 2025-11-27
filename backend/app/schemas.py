from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: str = "pending"
    priority: str = "medium"

class TaskCreate(TaskBase):
    employee_id: int

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    priority: Optional[str] = None

class Task(TaskBase):
    id: int
    employee_id: int
    created_at: datetime

    class Config:
        from_attributes = True


class EmployeeBase(BaseModel):
    name: str
    email: EmailStr
    department: str
    position: str

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    department: Optional[str] = None
    position: Optional[str] = None

class Employee(EmployeeBase):
    id: int
    created_at: datetime
    tasks: List[Task] = []

    class Config:
        from_attributes = True
