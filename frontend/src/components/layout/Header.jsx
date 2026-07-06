import { Moon, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white rounded-2xl shadow-md p-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          🤖 AI Smart Todo
        </h1>

        <p className="text-slate-500 mt-1">
          Stay focused. Win today.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="p-2 rounded-xl hover:bg-slate-100 transition">
          <Moon size={22} />
        </button>

        <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl">

          <User size={18} />

          <span className="font-medium">
            Yeswanth
          </span>

        </div>

      </div>

    </header>
  );
}