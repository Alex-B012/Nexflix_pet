import { createElement, memo } from "react";
import type { FavoriteBtnProps } from "./favoriteBtn.types";

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
