import './moviecard.css';
import Star from '../star/Star';
import { Link } from "react-router-dom"
//import { useFetch } from '../../hooks/useFetch';

function MovieCard({ movie }) {

	if (!movie) {
		return <p>Loading...</p>;
	}

	return (
		<Link className="link" to={`/moviedetails/${movie.imdbID}`}>
		<section className="moviecard">
			<div>
				<Star movie={movie} />
				<img 
					src={movie.Poster !== 'N/A' ? movie.Poster : '../../assets/missing-poster.svg'} 
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
};

export default MovieCard;