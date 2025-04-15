import { localStorageFetch } from "../../hooks/localStorageFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import "./watchlistpage.css"

function WatchListPage() {
  const { data: movies, loading: moviesLoading } = localStorageFetch("savedMovies");

  if (moviesLoading)
    return (
      <main className='mainLoading'>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );

  if (!movies || movies.length === 0) {
    return (
      <main className="home home--no-movies">
        <h1 className="home__no-movies-message">Your watchlist is currently empty! Click the star icon to add movies.</h1>
      </main>
    )
  }

  return (
    <main className='home'>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default WatchListPage;
