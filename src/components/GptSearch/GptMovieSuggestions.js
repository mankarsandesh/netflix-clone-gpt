import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'
const GptMovieSuggestions = () => {
	const { gptMovieResults, gptMovieName } = useSelector((store) => store.gpt)
	if (!gptMovieName) return null
	console.log(typeof gptMovieResults[0], 'sasa')
	return (
		<div className="bg-black w-full p-10 mt-10 text-white opacity-80">
			<div>
				{gptMovieName.map((movieName, index) => (
					<MovieList
						key={movieName}
						title={movieName}
						movies={gptMovieResults[index]}
					/>
				))}
			</div>
		</div>
	)
}

export default GptMovieSuggestions
