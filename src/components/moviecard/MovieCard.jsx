import './moviecard.css';
//import { useFetch } from '../../hooks/useFetch';

function MovieCard() {

	//const {data, isLoading, isError} = useFetch("https://santosnr6.github.io/Data/favoritemovies.json")

	return (
		<section className="moviecard">
			<div>
				<img 
					src={movie.Poster !== 'N/A' ? movie.Poster : '../../assets/missing-poster.svg'} 
					alt="The poster for the movie. If no poster is found, a placeholder image is shown"
					className="moviecard__poster" 
				/>
			</div>
			<div className="moviecard__info">
				<h2 className="moviecard__info-title">{movie.Title}</h2>
				<p className="moviecard__info-star">★</p>
			</div>
		</section>
	);
};

export default MovieCard;