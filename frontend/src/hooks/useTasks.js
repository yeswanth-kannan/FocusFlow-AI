import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  removeTask,
  toggleTask,
} from "@/api/tasks";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  async function refresh() {
    const data = await getTasks();
    setTasks(data);
  }

  async function addTask(title) {
    await createTask(title);
    refresh();
  }

  async function deleteTask(id) {
    await removeTask(id);
    refresh();
  }

  async function completeTask(id, completed) {
    await toggleTask(id, completed);
    refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    refresh,
  };
}