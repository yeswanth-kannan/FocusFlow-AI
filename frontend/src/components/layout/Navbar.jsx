import {
  Menu,
  Search,
  Bell,
  Moon,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white rounded-3xl shadow-sm px-8 py-5 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-5">

        <button className="hover:bg-slate-100 p-2 rounded-xl transition">
          <Menu size={22} />
        </button>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

      </div>

      {/* Center */}

      <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-5 py-3 w-[450px]">

        <Search className="text-slate-400" size={18} />

        <input
          placeholder="Search tasks, goals, notes..."
          className="bg-transparent outline-none ml-3 flex-1"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="hover:bg-slate-100 p-2 rounded-xl transition">
          <Bell size={20} />
        </button>

        <button className="hover:bg-slate-100 p-2 rounded-xl transition">
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-2xl">

          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-9 h-9 rounded-full"
          />

          <span className="font-medium">
            Yeswanth
          </span>

        </div>

      </div>

    </header>
  );
}