import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
const Browse = () => {
	const showGptSearchView = useSelector((store) => store.gpt.showGptSearch)
	useNowPlayingMovies()
	usePopularMovies()
	return (
		<div>
			<Header />
			{showGptSearchView ? (
				<GptSearch />
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
