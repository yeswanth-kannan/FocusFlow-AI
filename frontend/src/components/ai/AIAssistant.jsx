import { Sparkles, Target, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AIAssistant({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  const message =
    pending > 0
      ? `Complete "${tasks.find((t) => !t.completed)?.title}" first.`
      : "You're all caught up! 🎉";

  const score =
    tasks.length === 0
      ? 100
      : Math.round((completed / tasks.length) * 100);

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-blue-600" />
          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>
        </div>

        <div className="space-y-6">

          <div className="flex gap-3">

            <Target className="text-blue-600 mt-1" />

            <div>

              <p className="font-semibold">
                Today's Recommendation
              </p>

              <p className="text-slate-500 text-sm">
                {message}
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <CheckCircle2 className="text-green-600 mt-1" />

            <div>

              <p className="font-semibold">
                Productivity Score
              </p>

              <p className="text-slate-500 text-sm">
                {score}% Complete
              </p>

            </div>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}