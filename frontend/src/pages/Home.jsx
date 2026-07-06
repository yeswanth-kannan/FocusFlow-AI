import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Navbar from "../components/layout/Navbar";

import StatsGrid from "../components/dashboard/StatsGrid";
import ProgressCard from "../components/dashboard/ProgressCard";

import TaskInput from "../components/tasks/TaskInput";
import TaskList from "../components/tasks/TaskList";
import SearchBar from "../components/tasks/SearchBar";

import AIAssistant from "../components/ai/AIAssistant";

import useTasks from "../hooks/useTasks";
import WelcomeCard from "../components/dashboard/WelcomeCard";

export default function Home() {
  const {
    tasks,
    addTask,
    deleteTask,
    completeTask,
  } = useTasks();

  const [search, setSearch] = useState("");

  const completed = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) =>
    task.title
      .trim()
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <MainLayout>
      <Navbar />
      <div className="mt-8">
        <WelcomeCard />
        </div>

      <div className="space-y-8">

        <StatsGrid tasks={tasks} />

        <ProgressCard
          completed={completed}
          total={tasks.length}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">

            <TaskInput onAdd={addTask} />

            <TaskList
              tasks={search === "" ? tasks : filteredTasks}
              onDelete={deleteTask}
              onToggle={(id) => {
                const task = tasks.find((t) => t.id === id);

                if (task) {
                  completeTask(id, !task.completed);
                }
              }}
            />

          </div>

          {/* Right Side */}
          <div>

            <AIAssistant tasks={tasks} />

          </div>

        </div>

      </div>

    </MainLayout>
  );
}