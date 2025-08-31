import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import type { Meal } from "../types";

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        if (!res.ok) throw new Error(`Network error (${res.status})`);
        const data = await res.json();
        setMeals(data.meals || []);
      } catch (e: any) {
        setError(e?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🍽️ Recipe Finder</h1>

      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl mb-6 shadow"
      />

      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && filteredMeals.length === 0 && (
        <p>No recipes found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMeals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}