import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({
  icon,
  title,
  value,
  subtitle,
  iconBg = "bg-blue-100",
}) {
  const Icon = icon;

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border-0">

      <CardContent className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center`}>

              <Icon className="text-blue-600" size={28} />

            </div>

          </div>

        </div>

        <p className="text-slate-500 mt-6">
          {title}
        </p>

        <h2 className="text-5xl font-bold mt-2">
          {value}
        </h2>

        <p className="text-slate-400 mt-4 text-sm">
          {subtitle}
        </p>

      </CardContent>

    </Card>
  );
}