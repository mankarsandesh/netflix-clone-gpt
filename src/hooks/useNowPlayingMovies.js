import { useEffect } from 'react'
import { API_OPTIONS } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utlis/movieSlice'

const useNowPlayingMovies = () => {
	const dispatch = useDispatch()
	// Get Now Playing Movies list and store in Redux
	const getNowPlaying = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
			API_OPTIONS
		)
		const jsonData = await data.json()
		dispatch(addNowPlayingMovies(jsonData.results))
	}

	useEffect(() => {
		getNowPlaying()
	}, [])
}

export default useNowPlayingMovies
