import './moviecard.css';
import Star from '../star/Star';

function MovieCard({ movie }) {

	if (!movie) {
		return <p>Loading...</p>;
	}

	return (
		<section className="moviecard">
			<div>
			<p className="moviecard__info-star">★</p>
				<img 
					src={movie.Poster !== 'N/A' ? movie.Poster : '/assets/missing-poster.svg'} 
					alt={`Poster for ${movie.Title}`}
					className="moviecard__poster" 
				/>
			</div>
			<div className="moviecard__info">
				<h2 className="moviecard__info-title">{movie.Title}</h2>
				<Star movie={movie} />
			</div>
		</section>
	);
};

export default MovieCard;