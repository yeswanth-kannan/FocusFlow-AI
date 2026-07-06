import api from "./api";

export async function getTasks() {
  const response = await api.get("/tasks");
  return response.data;
}

export async function createTask(title, priority) {
  const response = await api.post("/tasks", {
    title,
    priority,
  });

  return response.data;
}

export async function removeTask(id) {
  await api.delete(`/tasks/${id}`);
}

export async function toggleTask(id, completed) {
  const response = await api.put(`/tasks/${id}`, {
    completed,
  });

  return response.data;
}