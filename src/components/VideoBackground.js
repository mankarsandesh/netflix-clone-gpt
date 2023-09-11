import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
const VideoBackground = ({ movieId }) => {
	const TrailerVideo = useSelector((state) => state.movies?.trailerVideo)

	useMovieTrailer(movieId)
	return (
		<div className="w-screen">
			<iframe
				className="w-screen aspect-video"
				src={'https://www.youtube.com/embed/' + TrailerVideo?.key}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	)
}

export default VideoBackground
