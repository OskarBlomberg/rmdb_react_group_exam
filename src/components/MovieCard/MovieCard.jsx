import './moviecard.css';
import { Link } from "react-router-dom"
//import { useFetch } from '../../hooks/useFetch';

function MovieCard({ movie }) {

	//const {data, isLoading, isError} = useFetch("https://santosnr6.github.io/Data/favoritemovies.json")

	return (
		<Link className="link" to={`/moviedetails/${movie.imdbID}`}>
		<section className="moviecard">
			<div>
			<p className="moviecard__info-star">★</p>
				<img 
					src={movie.Poster !== 'N/A' ? movie.Poster : '../../assets/missing-poster.svg'} 
					alt="The poster for the movie. If no poster is found, a placeholder image is shown"
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