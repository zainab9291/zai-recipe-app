import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
};

const RecipeCard: React.FC<{ meal: Meal }> = ({ meal }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden group">
      <Link to={`/meal/${meal.idMeal}`} className="block">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-44 object-cover group-hover:scale-[1.02] transition"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold line-clamp-2">{meal.strMeal}</h3>
          <div className="text-sm text-gray-600 mt-2 flex gap-2 flex-wrap">
            <span className="bg-gray-100 px-2 py-1 rounded-lg">Category: {meal.strCategory || "—"}</span>
            <span className="bg-gray-100 px-2 py-1 rounded-lg">Cuisine: {meal.strArea || "—"}</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <FavoriteButton mealId={meal.idMeal} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;