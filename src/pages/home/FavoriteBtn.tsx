import { createElement, memo } from "react";

interface FavoriteBtnProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FavoriteBtn = ({ isFavorite, onToggleFavorite }: FavoriteBtnProps) =>
  createElement(
    "button",
    {
      className: "cursor-pointer",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite();
      },
    },
    isFavorite ? "❤️" : "🤍",
  );

export const MemoizedFavoriteBtn = memo(FavoriteBtn);
