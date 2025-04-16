import { useState, useEffect } from 'react';
import "./star.css";

function Star({ movie }) {
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		// Getting movies from localStorage, if none, show an empty array
		const saved = JSON.parse(localStorage.getItem('savedMovies')) || [];
		// Checking if the movieID already exists in localStorage
		const exists = saved.some(m => m.imdbID === movie.imdbID);
		setIsSaved(exists);
	}, [movie.imdbID]);

	const handleClick = (e) => {
		e.preventDefault(); 
		e.stopPropagation();
		// Getting list of movies from localStorage
		const saved = JSON.parse(localStorage.getItem('savedMovies')) || [];	
		if (!isSaved) {
			// If movie is not saved, add to list when star is clicked
			const updated = [...saved, movie];
			localStorage.setItem('savedMovies', JSON.stringify(updated));
			console.log(`${movie.Title} saved`);
			setIsSaved(true);
		} else {
			// If it is on the list, remove it when star is clicked
			const updated = saved.filter(m => m.imdbID !== movie.imdbID);
			localStorage.setItem('savedMovies', JSON.stringify(updated));
			console.log(`${movie.Title} removed`);
			setIsSaved(false);
		}
	};

	return (
		<span
			onClick={handleClick}
			title={isSaved ? 'Remove from watchlist' : 'Add to watchlist'}
			className={`moviecard__info-star ${isSaved ? 'filled' : ''}`}
		>
			★
		</span>
	);
}

export default Star;