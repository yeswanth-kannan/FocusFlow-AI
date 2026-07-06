import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TaskInput({ onAdd }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  async function handleAdd() {
    if (!task.trim()) return;

    await onAdd(task, priority);

    setTask("");
    setPriority("Medium");
  }

  return (
    <Card className="mt-8 rounded-2xl shadow-md">
      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-5">
          ✨ Add New Task
        </h2>

        <div className="flex flex-col md:flex-row gap-3">

          <Input
            placeholder="What do you want to accomplish today?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded-md px-3 py-2 bg-white"
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <Button onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}