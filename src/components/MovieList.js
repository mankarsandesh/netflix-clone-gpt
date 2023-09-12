import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {
	console.log(movies, 'Movie')
	return (
		<div className="p-6 text-white">
			<h1 className="py-6 text-3xl">{title}</h1>
			<div className="flex overflow-x-scroll ">
				<div className="flex gap-2">
					{movies?.map((movie) => (
						<MovieCard key={movie.id} posterPath={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieList
