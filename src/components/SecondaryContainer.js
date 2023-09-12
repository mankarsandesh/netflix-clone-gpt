import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
	const movies = useSelector((state) => state.movies)
	console.log(movies, 'ssas')
	return (
		movies.nowPlayingMovies && (
			<div className=" bg-black">
				<div className="-mt-60 relative pl-25 z-20 bg-black border border-cyan-50">
					<MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
					<MovieList title={'Tending'} movies={movies.nowPlayingMovies} />
					<MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
					<MovieList
						title={'Up Coming Movies'}
						movies={movies.nowPlayingMovies}
					/>
				</div>
			</div>
		)
	)
}

export default SecondaryContainer
