import { useState, useEffect } from 'react';

function Star({ movie }) {
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('savedMovies')) || [];
		const exists = saved.some(m => m.imdbID === movie.imdbID);
		setIsSaved(exists);
	}, [movie.imdbID]);

	const handleClick = () => {
		const saved = JSON.parse(localStorage.getItem('savedMovies')) || [];

		if (!isSaved) {
			const updated = [...saved, movie];
			localStorage.setItem('savedMovies', JSON.stringify(updated));
			console.log(`${movie.Title} saved`);
			setIsSaved(true);
		} else {
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