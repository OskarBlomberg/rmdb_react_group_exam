import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Carousel from "../../components/carousel/Carousel";

function HomePage() {
  const {
    data: movies,
    isLoading: moviesLoading,
    isError,
  } = useFetch("https://santosnr6.github.io/Data/favoritemovies.json");

  const errorMsg = <h2 style={{ color: "mintcream" }}>No top movies found</h2>;

  if (moviesLoading) {
    return (
      <main>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="homePage">
      <Carousel />
      <h1 className="heading">Top Movies</h1>
      {isError ? errorMsg : <MovieGrid movies={movies} />}
    </main>
  );
}

export default HomePage;
