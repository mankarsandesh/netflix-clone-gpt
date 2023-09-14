import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
	name: 'gpt', // name of the slice
	initialState: {
		showGptSearch: false,
		gptMovieName: null,
		gptMovieResults: null,
	},
	reducers: {
		toggleGptSearchView: (state, action) => {
			state.showGptSearch = !state.showGptSearch
		},
		addGptMoviesResults: (state, action) => {
			console.log(action.payload, 'sasa')
			const { gptMovieName, gptMovieResults } = action.payload
			state.gptMovieName = gptMovieName
			state.gptMovieResults = gptMovieResults
		},
	},
})

export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions
export default gptSlice.reducer
