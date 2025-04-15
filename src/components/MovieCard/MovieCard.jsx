import './moviecard.css';
import Star from '../star/Star';
import { Link } from "react-router-dom"
//import { useFetch } from '../../hooks/useFetch';

function MovieCard({ movie }) {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <section className="moviecard">
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
  );
}

export default MovieCard;
