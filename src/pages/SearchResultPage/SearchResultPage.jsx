import React from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function SearchResultPage() {
  const { searchUrl } = useOutletContext();
  //const { data, isLoading, isError } = useFetch(searchUrl);
  //const [searchParams] = useSearchParams();
  //const query = searchParams.get("q");
  const { data: movies, loading: moviesLoading, isError } = useFetch(searchUrl);

  console.log(movies.Search);

  if (moviesLoading) return <h1 className="loadingText">Loading...</h1>;

  return (
    <main className="searchresultpage">
      {<MovieGrid movies={movies.Search} />}
    </main>
  );
}

export default SearchResultPage;
