import { memo } from "react";

const FavoriteBtn = ({ isFavorite, onToggleFavorite }) => (
  <button
    className="cursor-pointer"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onToggleFavorite();
    }}
  >
    {isFavorite ? "❤️" : "🤍"}
  </button>
);

export const MemoizedFavoriteBtn = memo(FavoriteBtn);
