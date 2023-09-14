import React from 'react'
import GptSearchForm from './GptSearch/GptSearchForm'
import GptMovieSuggestions from './GptSearch/GptMovieSuggestions'

const GptSearch = () => {
	return (
		<div className=" loginBackground pt-[10%] px-10">
			<GptSearchForm />
			<GptMovieSuggestions />
		</div>
	)
}

export default GptSearch
