import 'moviecard.css';

function MovieCard({ movie }) {
  return (
	<section className="moviecard__wrapper">
		<div className="moviecard">
			<img 
				src={movie.Poster !== 'N/A' ? movie.Poster : '../../assets/missing-poster.svg'} 
				alt="The poster for the movie. If no poster is found, a placeholder image is shown"
				className="moviecard__poster" 
			/>
		</div>
		<div className="moviecard__info">
			<h2 className="moviecard__info-title">{movie.Title}</h2>
			<p className="moviecard__info-year">{movie.Year}</p>
		</div>
	</section>
  );
};

export default MovieCard;