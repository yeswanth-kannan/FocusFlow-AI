import {
  FileText,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsGrid({ tasks }) {

  const total = tasks.length;

  const completed = tasks.filter(
    t => t.completed
  ).length;

  const pending = total - completed;

  return (

    <div className="grid md:grid-cols-3 gap-6">

      <StatsCard
        icon={FileText}
        title="Total Tasks"
        value={total}
        subtitle="All your tasks"
        iconBg="bg-blue-100"
      />

      <StatsCard
        icon={CheckCircle2}
        title="Completed"
        value={completed}
        subtitle={`${Math.round(
          total === 0 ? 0 : completed / total * 100
        )}% completed`}
        iconBg="bg-green-100"
      />

      <StatsCard
        icon={Clock3}
        title="Pending"
        value={pending}
        subtitle="Tasks remaining"
        iconBg="bg-orange-100"
      />

    </div>

  );

}