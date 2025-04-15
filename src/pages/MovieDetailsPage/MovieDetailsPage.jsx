import "./movieDetailsPage.css"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

import BackIcon from "../../components/Icons/BackIcon"
import MovieCard from "../../components/MovieCard/MovieCard"
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import MovieDetails from "../../components/MovieDetails/MovieDetails"

function MovieDetailsPage() {
  
  const { id } = useParams() 
  const apiKey = "3b30178e&s"
  const { data: movie, isLoading, isError } = useFetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
  
    return (
     <section className='search'>
        <section className="single-page">
          {isLoading && <p className="loadingText">Loading..</p>}
          {isError && <p className="loading">ops...Something went wrong...</p>}
          

          {movie && (
            <section className="details__page-container">
            <MovieCard movie={movie}/>
            <MovieDetails movie={movie}/>
            </section>
            
          )}

        </section>
        
    </section> 
    )
}

export default MovieDetailsPage