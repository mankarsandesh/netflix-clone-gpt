import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'

const Browse = () => {
	const showGptSearchView = useSelector((store) => store.gpt.showGptSearch)
	useNowPlayingMovies()
	usePopularMovies()
	return (
		<div>
			<Header />
			{showGptSearchView ? (
				<div>hello</div>
			) : (
				<>
					<MainContainer />

					<SecondaryContainer />
				</>
			)}
		</div>
	)
}

export default Browse
