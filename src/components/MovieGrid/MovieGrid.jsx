import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ movies }) {
  return (
    <section className="movieGrid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}

export default MovieGrid;
