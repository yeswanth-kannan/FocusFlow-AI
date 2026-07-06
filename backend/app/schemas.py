from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
    priority: str = "Medium"

class TaskUpdate(BaseModel):
    completed: bool


class TaskResponse(BaseModel):
    id: int
    title: str
    completed: bool
    priority: str

    class Config:
        from_attributes = True