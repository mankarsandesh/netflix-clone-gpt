import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
	const movies = useSelector((state) => state.movies)
	return (
		movies.nowPlayingMovies && (
			<div className=" bg-black">
				<div className="-mt-60 relative pl-25 z-20 bg-black ">
					<MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
					<MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
					<MovieList title={'Popular'} movies={movies.popularMovies} />
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
