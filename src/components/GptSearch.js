import React from 'react'
import GptSearchForm from './GptSearch/GptSearchForm'
import GptMovieSuggestions from './GptSearch/GptMovieSuggestions'
import { BG_URL } from '../utlis/constants'
const GptSearch = () => {
	return (
		<div>
			<div className="fixed">
				<img src={BG_URL} alt="back" />
			</div>
			<GptSearchForm />
			<GptMovieSuggestions />
		</div>
	)
}

export default GptSearch
