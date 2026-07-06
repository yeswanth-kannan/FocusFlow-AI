import {
  Trash2,
  Circle,
  CircleCheckBig,
  Calendar,
  Star,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TaskCard({
  task,
  onDelete,
  onToggle,
}) {
  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <CardContent className="flex justify-between items-center p-6">

        <div className="flex items-center gap-5">

          <button onClick={() => onToggle(task.id)}>
            {task.completed ? (
              <CircleCheckBig
                className="text-green-600"
                size={28}
              />
            ) : (
              <Circle size={28} />
            )}
          </button>

          <div>

            <h2
              className={`text-xl font-bold ${
                task.completed
                  ? "line-through text-slate-400"
                  : ""
              }`}
            >
              {task.title}
            </h2>

            <div className="flex gap-3 mt-3">

              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                Medium
              </Badge>

              <Badge
                variant="outline"
                className="flex items-center gap-1"
              >
                <Calendar size={14} />
                Today
              </Badge>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button className="hover:text-yellow-500 transition">
            <Star size={20} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="hover:text-red-600 transition"
          >
            <Trash2 size={22} />
          </button>

        </div>

      </CardContent>

    </Card>
  );
}