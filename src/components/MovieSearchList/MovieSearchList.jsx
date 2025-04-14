import React from 'react'

function MovieSearchList({movies}) {
    if (!movies || movies.length === 0) {
        return <p className="loadingText">Could not find any movies</p>;
      }

  return (
    <section>
        <MovieGrid/>
        {/* {movies.map((movie) => (
            <section key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} width="150" />
            </section>
        ))} */}
    </section>
  )
}

export default MovieSearchList