import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardContent className="p-8">

        <h1 className="text-4xl font-bold">
          {greeting}, Yeswanth 👋
        </h1>

        <p className="text-slate-500 mt-2 text-lg">
          Let's make today productive.
        </p>

        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <h2 className="font-bold text-blue-700">
            🎯 Today's Goal
          </h2>

          <p className="text-slate-600 mt-2">
            Complete your most important tasks before the day ends.
          </p>
        </div>

      </CardContent>
    </Card>
  );
}