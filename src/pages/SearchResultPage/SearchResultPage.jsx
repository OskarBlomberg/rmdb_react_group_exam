import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies, loading: moviesLoading } = useFetch(
    "https://santosnr6.github.io/Data/favoritemovies.json"
  );

  if (moviesLoading) return <h1 className="loadingText">Loading...</h1>;

  return (
    <main className="searchresultpage">
      <MovieGrid movies={movies} />
    </main>
  );
}

export default SearchResultPage;