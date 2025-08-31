import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center gap-3">
          <span className="text-2xl">🍽️</span>
          <span>Zai Recipe App</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;