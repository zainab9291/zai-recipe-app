import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  );
}