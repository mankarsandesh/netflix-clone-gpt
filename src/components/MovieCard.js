import React from 'react'
import { BASE_IMAGE } from '../utlis/constants'
const MovieCard = ({ posterPath }) => {
	return (
		<div className="w-48">
			<img src={BASE_IMAGE + posterPath} alt="movie poster" />
		</div>
	)
}

export default MovieCard
