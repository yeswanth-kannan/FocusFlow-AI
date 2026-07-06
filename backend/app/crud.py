from sqlalchemy.orm import Session

from app.models import Task
from app.schemas import TaskCreate


def create_task(db: Session, task: TaskCreate):
    new_task = Task(title=task.title,priority=task.priority)

    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task


def get_tasks(db: Session):
    return db.query(Task).all()


def update_task(db: Session, task_id: int, completed: bool):
    task = db.query(Task).filter(Task.id == task_id).first()

    if task:
        task.completed = completed
        db.commit()
        db.refresh(task)

    return task
def delete_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()

    if task:
        db.delete(task)
        db.commit()

    return {"message": "Task deleted successfully"}