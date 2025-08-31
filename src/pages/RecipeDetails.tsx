import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../types";

export default function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!res.ok) throw new Error(`Network error (${res.status})`);
        const data = await res.json();
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        } else {
          setError("Recipe not found");
        }
      } catch (e: any) {
        setError(e?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchMeal();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!meal) return <p className="p-4">No recipe found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      {meal.strCategory && (
        <p className="text-gray-600 mb-2">Category: {meal.strCategory}</p>
      )}
      {meal.strArea && (
        <p className="text-gray-600 mb-4">Cuisine: {meal.strArea}</p>
      )}
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
    </div>
  );
}