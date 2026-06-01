import { useMemo, useState } from "react";
import { MOVIES } from "../../data/movies.data";
import useDebounce from "../../hooks/useDebounce.js";
import { MemoizedMovieCard } from "./MovieCard.js";

function getInitialFavorites(): number[] {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? (JSON.parse(stored) as number[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<number[]>(getInitialFavorites);

  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  const movies = useMemo(() => {
    return MOVIES.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [debouncedSearchTerm]);

  return (
    <>
      <main className="container flex flex-col items-center mx-auto">
        <div className="search-bar w-full max-w-lg mt-12 mb-5 px-2">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input w-full px-4 py-2 rounded-lg border border-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="movies-list flex flex-wrap justify-center gap-12 py-8">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MemoizedMovieCard
                key={movie.id}
                data={movie}
                isFavorite={favorites.includes(movie.id)}
                setFavorites={setFavorites}
              />
            ))
          ) : (
            <p className="text-gray-500 min-h-100 flex items-center">
              No movies found!
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
