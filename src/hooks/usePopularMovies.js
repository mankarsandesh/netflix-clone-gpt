import { useEffect } from 'react'
import { API_OPTIONS } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utlis/movieSlice'

const usePopularMovies = () => {
	const dispatch = useDispatch()
	// Get Now Playing Movies list and store in Redux
	const getPopularMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
			API_OPTIONS
		)
		const jsonData = await data.json()
		dispatch(addPopularMovies(jsonData.results))
	}

	useEffect(() => {
		getPopularMovies()
	}, [])
}

export default usePopularMovies
