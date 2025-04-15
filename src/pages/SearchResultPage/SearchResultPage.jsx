import React from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function SearchResultPage() {
  const { searchUrl } = useOutletContext();
  const { data: movies, loading: moviesLoading, isError } = useFetch(searchUrl);

  if (moviesLoading)
    return (
      <main className="mainLoading">
        <h1 className="loadingText">Loading...</h1>
      </main>
    );

  return (
    <main className="searchresultpage">
      {movies.Search && <MovieGrid movies={movies.Search} />}
    </main>
  );
}

export default SearchResultPage;
