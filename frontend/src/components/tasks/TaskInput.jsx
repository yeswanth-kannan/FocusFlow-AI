import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TaskInput({ onAdd }) {
  const [task, setTask] = useState("");

  async function handleAdd() {
    if (!task.trim()) return;

    await onAdd(task);

    setTask("");
  }

  return (
    <Card className="mt-8 rounded-2xl shadow-md">
      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-5">
          ✨ Add New Task
        </h2>

        <div className="flex gap-3">

          <Input
            placeholder="What do you want to accomplish today?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <Button onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}