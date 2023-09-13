import React from 'react'
import GptSearchForm from './GptSearch/GptSearchForm'
import GptMovieSuggestions from './GptSearch/GptMovieSuggestions'

const GptSearch = () => {
	return (
		<div className="loginBackground pt-[15%]">
			<GptSearchForm />
			<GptMovieSuggestions />
		</div>
	)
}

export default GptSearch
