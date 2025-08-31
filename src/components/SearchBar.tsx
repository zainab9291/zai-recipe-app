import React, { useState } from "react";

type Props = {
  initialQuery?: string;
  onSearch: (q: string) => void;
};

const SearchBar: React.FC<Props> = ({ initialQuery = "", onSearch }) => {
  const [q, setQ] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(q.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
      <input
        className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search recipes by name (e.g., Arrabiata, Chicken)..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search recipes"
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;