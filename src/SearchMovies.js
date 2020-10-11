import React, { useState } from 'react'
import Card from "./Card.js"

function SearchMovies() {

	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([])

	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=c20af7c4da66c9900028c9f42cde75b9&language=en-US&query=${query}&page=1&include_adult=false`;
	
		try{
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		}catch(err){
			console.log(err)
		}
	}

	return (
		<div>
			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="query">Search Movies: </label>
				<input 
					className="input"
					type="text"
					name="query"
					placeholder="i.e. The Big Lebowski"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					/>
				<button type="submit" className="button">Submit</button>			
			</form>
			<div className='card-list'>
				{movies.filter(movie => movie.poster_path).map(movie => (
					<Card movie={movie} key={movie.id}/>
				))}
			</div>
		</div>
	)
}

export default SearchMovies