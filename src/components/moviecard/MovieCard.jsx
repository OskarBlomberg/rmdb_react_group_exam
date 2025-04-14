import './moviecard.css';
import Star from '../star/Star';
//import { useFetch } from '../../hooks/useFetch';

function MovieCard({ movie }) {

	//const {data, isLoading, isError} = useFetch("https://santosnr6.github.io/Data/favoritemovies.json")

	if (!movie) {
		return <p>Loading...</p>;
	}

	return (
		<section className="moviecard">
			<div>
				<img 
					src={movie.Poster !== 'N/A' ? movie.Poster : '/assets/missing-poster.svg'} 
					alt={`Poster for ${movie.Title}`}
					className="moviecard__poster" 
				/>
			</div>
			<div className="moviecard__info">
				<h2 className="moviecard__info-title">{movie.Title}</h2>
				<Star movie={movie} className="movie__info-star"/>
			</div>
		</section>
	);
};

export default MovieCard;