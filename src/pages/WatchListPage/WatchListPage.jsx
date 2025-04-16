import { localStorageFetch } from "../../hooks/localStorageFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function WatchListPage() {
  const { data: movies, loading: moviesLoading } = localStorageFetch("savedMovies");

  if (moviesLoading)
    return (
      <main>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );

  if (movies.length === 0)
    return (
      <main>
        <h1 className="loadingText">Watchlist is empty</h1>
      </main>
    );

  return (
    <main className='home'>
      <h1 className="heading">Watchlist</h1>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default WatchListPage;
