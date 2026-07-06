import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      <div className="flex items-center gap-3">

        <Search className="text-slate-400" />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-lg"
        />

      </div>

    </div>
  );
}