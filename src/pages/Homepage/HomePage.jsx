import { useFetch } from "../../hooks/useFetch"
// import Carousel from "../components/Carousel/Carousel";
import MovieGrid from "../../components/MovieGrid/MovieGrid"

function HomePage() {
  const { data: trailers, loading: trailersLoading } = useFetch("");
  const { data: movies, loading: moviesLoading } = useFetch("https://santosnr6.github.io/Data/favoritemovies.json");
  
  if (trailersLoading || moviesLoading)
    return <h1 className="loadingText">Loading...</h1>;

  return (
    <main className="homePage">
      {/* <Carousel trailers={trailers} /> */}
      <MovieGrid movies={movies} />
    </main>
  );
}

export default HomePage;