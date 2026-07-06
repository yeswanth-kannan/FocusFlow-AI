from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import TaskCreate, TaskResponse, TaskUpdate
from app.crud import (
    create_task,
    get_tasks,
    update_task,
    delete_task
)

from app.database import Base, engine, get_db
from app.models import Task
from app.schemas import TaskCreate, TaskResponse
from app.crud import create_task, get_tasks

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Smart Todo API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "AI Smart Todo Backend Running 🚀"
    }


@app.post("/tasks", response_model=TaskResponse)
def add_task(
    task: TaskCreate,
    db: Session = Depends(get_db)
):
    return create_task(db, task)


@app.get("/tasks", response_model=list[TaskResponse])
def read_tasks(
    db: Session = Depends(get_db)
):
    return get_tasks(db)

@app.put("/tasks/{task_id}", response_model=TaskResponse)
def edit_task(
    task_id: int,
    task: TaskUpdate,
    db: Session = Depends(get_db)
):
    return update_task(
        db,
        task_id,
        task.completed
    )
@app.delete("/tasks/{task_id}")
def remove_task(
    task_id: int,
    db: Session = Depends(get_db)
):
    return delete_task(db, task_id)