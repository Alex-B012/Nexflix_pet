import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme.js";
import { MOVIES } from "../../data/movies.data.js";
import MovieDetailsLayout from "./MovieDetailsLayout.js";
import type { MovieComment } from "../home/movie.interface.js";

const MovieCommentsComponent = lazy(() =>
  import("./MovieComments.js").then((module) => ({
    default: module.MovieComments,
  })),
);

const LazyMovieComments = ({ comments }: { comments: MovieComment[] }) => {
  return (
    <Suspense fallback={<p>Loading comments...</p>}>
      <MovieCommentsComponent comments={comments} />
    </Suspense>
  );
};

const MovieDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const movie = MOVIES.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <MovieDetailsLayout>
        <p className={`text-gray-500  text-lg `}>Movie not found!</p>
      </MovieDetailsLayout>
    );
  }

  return (
    <MovieDetailsLayout>
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster */}
          <img
            src={movie.image}
            alt={movie.title}
            className={`w-full  rounded-xl shadow-md  ${theme === "dark" && "dark:shadow-black/40"} shadow-gray-300 object-cover md:w-72`}
          />

          {/* Info */}
          <div className="flex flex-col gap-10 text-red">
            <h1
              className={`text-3xl font-bold ${theme === "dark" && "text-white"}`}
            >
              {movie.title}
            </h1>

            <p
              className={`text-yellow-500 dark:text-yellow-400 ${theme === "dark" && "text-gold-700 dark:text-gold-600"} font-semibold`}
            >
              IMDb: ⭐ {movie.rating}/10
            </p>

            {/* Genres */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className={`px-3 py-1 text-xs rounded-full capitalize bg-gray-100 text-gray-900 border border-gray-600 ${theme === "dark" && "dark:bg-white/10 dark:text-gray-200 dark:border-white/20"}`}
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className={`text-gray-700 ${theme === "dark" && "dark:text-gray-300"}  leading-relaxed`}
            >
              {movie.description}
            </p>
          </div>
        </div>

        {/* Trailer */}
        <div
          className={`w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg shadow-gray-300 ${theme === "dark" && "dark:shadow-none"}`}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${movie.trailerYT_id}?autoplay=1&mute=1`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <LazyMovieComments comments={movie.comments} />
      </div>
    </MovieDetailsLayout>
  );
};

export default MovieDetails;
