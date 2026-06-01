import { memo, useCallback, useState } from "react";
import { getTitlePositionClass } from "../../utils/movieCard";
import { MemoizedFavoriteBtn } from "../../pages/home/FavoriteBtn";
import Modal from "../../components/ui/Modal.jsx";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../data/router.data";

const MovieCard = ({ data, isFavorite, setFavorites }) => {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const title_pos_class = getTitlePositionClass(data.image_pos);
  const title_stroke_color = data.title_stroke_color || "";

  const openTrailer = useCallback(() => setIsOpenTrailer(true), []);

  const toggleFavorite = () => {
    setFavorites((prev) => {
      const updated = prev.includes(data.id)
        ? prev.filter((id) => id !== data.id)
        : [...prev, data.id];

      localStorage.setItem("favorites", JSON.stringify(updated));

      return updated;
    });
  };

  return (
    <Link
      to={`/${ROUTERS.movie}/${data.id}`}
      className="movie-card relative btn w-60 h-85 rounded-lg overflow-hidden group"
    >
      {isOpenTrailer && (
        <Modal
          onClose={() => {
            setIsOpenTrailer(false);
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "630px",
              aspectRatio: "16 / 9",
              height: "100%",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
              }}
              src={`https://www.youtube.com/embed/${data.trailerYT_id}?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </Modal>
      )}

      <img
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        src={data.image}
        alt={data.title}
      />

      <div
        className={`absolute inset-0 h-full ${title_pos_class} flex items-center justify-center`}
      >
        <p
          className={`px-2 text-white text-3xl font-bold uppercase text-shadow-md`}
          style={{
            WebkitTextStroke: `1px ${title_stroke_color}`,
          }}
        >
          {data.title}
        </p>
      </div>

      <p className="absolute bottom-0.5 left-1 px-2 py-1 bg-black/20 rounded text-white text-sm font-semibold">
        IMDb: {data.rating}
      </p>

      <div className="absolute top-1 right-1 w-11 flex">
        <MemoizedFavoriteBtn
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
        <button onClick={openTrailer}>▶️</button>
      </div>
    </Link>
  );
};

export const MemoizedMovieCard = memo(MovieCard);
