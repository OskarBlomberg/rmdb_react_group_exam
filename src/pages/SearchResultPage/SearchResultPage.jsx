import React from "react";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function SearchResultPage() {
  const { searchUrl } = useOutletContext();
  const { data: movies, loading: moviesLoading, isError } = useFetch(searchUrl);

  if (moviesLoading) {
    return (
      <main>
        <h1 className="loadingText">Loading...</h1>
      </main>
    );
  }

  if (!movies.Search) {
    return (
      <main>
        <h1 className="loadingText">No movies found</h1>
      </main>
    );
  }

  if (isError) {
    return <p style={{ color: "mintcream" }}>Something went wrong...</p>;
  }

  return (
    <main className="searchresultpage">
      <h1 className="heading">Search results</h1>
      <MovieGrid movies={movies.Search} />
    </main>
  );
}

export default SearchResultPage;
