import { localStorageFetch } from "../../hooks/localStorageFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function WatchListPage() {
  const { data: movies, loading: moviesLoading } = localStorageFetch("savedMovies");

  if (moviesLoading)
    return (
      <main className='mainLoading'>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );

  return (
    <main className='home'>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default WatchListPage;
