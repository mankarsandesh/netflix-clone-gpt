import { useEffect } from 'react'
import { API_OPTIONS } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utlis/movieSlice'

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch()
	const getMovieVideo = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/' +
				movieId +
				'/videos?language=en-US',
			API_OPTIONS
		)
		const jsonData = await data.json()
		const filterData = jsonData.results.filter(
			(result) => result.type === 'Trailer'
		)
		const trailer = filterData.length ? filterData[0] : jsonData.results[0]
		console.log(trailer)
		dispatch(addTrailerVideo(trailer))
	}

	useEffect(() => {
		getMovieVideo()
	}, [])
}

export default useMovieTrailer
