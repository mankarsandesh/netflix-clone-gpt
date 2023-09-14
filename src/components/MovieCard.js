import React from 'react'
import { BASE_IMAGE } from '../utlis/constants'
const MovieCard = ({ posterPath }) => {
	if (!posterPath) return null
	return (
		<div className="w-48 cursor-pointer">
			<img src={BASE_IMAGE + posterPath} alt="movie poster" />
		</div>
	)
}

export default MovieCard
