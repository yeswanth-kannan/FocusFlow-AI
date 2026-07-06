import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProgressCard({ completed, total }) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Today's Progress
            </h2>

            <p className="text-slate-500 mt-1">
              Keep pushing toward your goals 🚀
            </p>
          </div>

          <h2 className="text-4xl font-bold text-blue-600">
            {percentage}%
          </h2>
        </div>

        <Progress
          value={percentage}
          className="mt-6 h-3"
        />

        <div className="flex justify-between mt-4 text-slate-500">
          <span>
            {completed} of {total} tasks completed
          </span>

          <span>View Analytics →</span>
        </div>
      </CardContent>
    </Card>
  );
}