import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Carousel from "../../components/carousel/Carousel";

function HomePage() {
  const { data: movies, isLoading: moviesLoading } = useFetch("https://santosnr6.github.io/Data/favoritemovies.json");
  
  if (moviesLoading) {
    return (
      <main className="mainLoading">
        <h1 className="loadingText">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="homePage">
      <Carousel />
      <h1 className="heading">Top Movies</h1>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default HomePage;
