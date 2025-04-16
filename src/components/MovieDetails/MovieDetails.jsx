import BackIcon from "../Icons/BackIcon"
import "./movieDetails.css"

function MovieDetails( {movie} ) {
    console.log(movie)
  return (
    <section className="movie__details">
        <section>
        <h2 className="movie__details-title">{movie.Title}</h2>
        <p className="movie__details-director"><span className="movie__details__span">Driected by: </span>{movie.Director}</p>
        </section>
        <section>
            <p className="movie__details-plot">{movie.Plot}</p>
        </section>
        <section className="movie__details-container">
            <article className="movie__details-extra">
            <p><span className="movie__details__span">Released:</span> {movie.Year}</p>
            <p><span className="movie__details__span">Writer:</span> {movie.Writer}</p>
            </article>
            <article className="movie__details-extra">  
            <p><span className="movie__details__span">Runtime:</span> {movie.Runtime}</p>
            <p>{movie.imdbRating}  &#11088;</p>
            </article>
            
        </section>
        <BackIcon/>
    </section>
  )
}

export default MovieDetails