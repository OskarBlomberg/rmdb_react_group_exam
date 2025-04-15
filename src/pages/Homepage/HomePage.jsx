import { useFetch } from "../../hooks/useFetch"
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import Carousel from "../../components/carousel/Carousel";

function HomePage() {
  const { data: trailers, loading: trailersLoading } = useFetch("");
  const { data: movies, loading: moviesLoading } = useFetch("https://santosnr6.github.io/Data/favoritemovies.json");

  if (trailersLoading || moviesLoading)
    return (
      <main className='mainLoading'>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );

  return (
    <main className="homePage">
      <Carousel />
      <MovieGrid movies={movies} />
    </main>
  );
}

export default HomePage;