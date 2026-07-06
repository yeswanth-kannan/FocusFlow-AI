import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Sparkles,
  Target,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    active: true,
  },
  {
    icon: CheckSquare,
    title: "Tasks",
  },
  {
    icon: Calendar,
    title: "Calendar",
  },
  {
    icon: BarChart3,
    title: "Analytics",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
  },
  {
    icon: Target,
    title: "Goals",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col justify-between rounded-r-3xl">

      <div>

        <div className="p-8">

          <h1 className="text-3xl font-bold">
            FocusFlow AI
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Organize smarter.
            <br />
            Execute faster.
          </p>

        </div>

        <nav className="space-y-2 px-4">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition ${
                  item.active
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />

                <span>{item.title}</span>

              </button>
            );

          })}

        </nav>

      </div>

      <div className="p-6">

        <div className="bg-slate-900 rounded-2xl p-5">

          <p className="font-semibold">
            Yeswanth
          </p>

          <p className="text-slate-400 text-sm">
            Free Plan
          </p>

        </div>

      </div>

    </aside>
  );
}