import React, { useRef, useState } from 'react'
import lang from '../../utlis/languageConstants'
import openai from '../../utlis/openai'
import { API_OPTIONS } from '../../utlis/constants'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addGptMoviesResults } from '../../utlis/gptSlice'

const GptSearchForm = () => {
	const dispatch = useDispatch()
	const langKey = useSelector((store) => store.config.languages)
	const searchText = useRef(null)
	const [loading, setLoading] = useState(null)

	// Movie Search API
	const fetchMovies = async (movie) => {
		const data = await fetch(
			'https://api.themoviedb.org/3/search/movie?query=' +
				movie +
				'&include_adult=false&language=en-US&page=1',
			API_OPTIONS
		)
		const json = await data.json()
		console.log(json)
		return json.results
	}

	const handleGptSearch = async () => {
		setLoading('Searching...')
		// Make an api call to GPT API and get movies results
		const gptQuery =
			'Act as a Movie Recommendation system and sugest some movies for the query: ' +
			searchText.current.value +
			'only give me names of 5 movies, comma seprated like we example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil gaya'
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-3.5-turbo',
		})
		if (!gptResults.choices) {
		}
		setLoading('Finding...')
		const gptMovies = gptResults.choices?.[0].message?.content.split(',')
		const promisesArray = gptMovies.map((movie) => fetchMovies(movie))

		const tmdbResults = await Promise.all(promisesArray)
		dispatch(
			addGptMoviesResults({
				gptMovieName: gptMovies,
				gptMovieResults: tmdbResults,
			})
		)
		setLoading(null)
	}

	return (
		<div className="">
			<form
				className="flex mx-auto w-1/3 bg-black py-6 px-10 rounded-md "
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					placeholder={lang[langKey].searchPlaceholder}
					className="px-2 py-2 rounded-sm w-3/4"
				/>
				<button
					className="bg-red-600 text-white px-2 rounded-sm w-1/4"
					onClick={handleGptSearch}
					disabled={loading}
				>
					{loading ? 'Searching...' : lang[langKey].search}
				</button>
			</form>
		</div>
	)
}

export default GptSearchForm
