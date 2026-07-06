import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onDelete,
  onToggle,
}) {
  return (
    <div className="space-y-4 mt-6">

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}

    </div>
  );
}