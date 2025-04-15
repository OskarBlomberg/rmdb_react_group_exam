import BackIcon from "../Icons/BackIcon"
import "./movieDetails.css"

function MovieDetails( {movie} ) {
    console.log(movie)
  return (
    <section className="movie__details">
        <section>
        <h2 className="movie__details-title">{movie.Title}</h2>
        <p className="movie__details-director">{movie.Director}</p>
        </section>
        <section>
            <p className="movie__details-plot">{movie.Plot}</p>
        </section>
        <section className="movie__details-container">
            <article className="movie__details-extra">
            <p>Year: {movie.Year}</p>
            <p>Writer: {movie.Writer}</p>
            </article>
            <article className="movie__details-extra">
            <p>Runtime: {movie.Runtime}</p>
            <p>&#11088;{movie.imdbRating} / 10</p>
            </article>
            
        </section>
        <BackIcon/>
    </section>
  )
}

export default MovieDetails