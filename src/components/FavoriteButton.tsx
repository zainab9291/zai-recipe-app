import React, { useEffect, useState } from "react";
import { readFavorites, toggleFavorite } from "../utils/localStorage";

const FavoriteButton: React.FC<{ mealId: string }> = ({ mealId }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(readFavorites().includes(mealId));
  }, [mealId]);

  const handle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(mealId);
    setIsFav(readFavorites().includes(mealId));
  };

  return (
    <button
      onClick={handle}
      aria-label={isFav ? "Remove favorite" : "Add favorite"}
      className={`px-3 py-1 rounded-lg border ${isFav ? "bg-red-100 border-red-400" : "bg-white"}`}
    >
      {isFav ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;