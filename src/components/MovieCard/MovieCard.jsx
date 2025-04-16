import "./moviecard.css";
import Star from "../star/Star";
import { Link } from "react-router-dom";
import brokenposter from "../../assets/missing-poster.svg";

function MovieCard({ movie, isSingle = false }) {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Link className="link single-book-link" to={`/moviedetails/${movie.imdbID}`}>
      <section className={isSingle ? "moviecard moviecard__isSingle" : "moviecard"}>
        <div>
          <Star movie={movie} />
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : brokenposter}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = brokenposter;
            }}
            alt={`Poster for ${movie.Title}`}
            className="moviecard__poster"
          />
        </div>
        <div className="moviecard__info">
          <h2 className="moviecard__info-title">{movie.Title}</h2>
        </div>
      </section>
    </Link>
  );
}

export default MovieCard;
