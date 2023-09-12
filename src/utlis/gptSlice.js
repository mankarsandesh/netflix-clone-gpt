import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
	name: 'gpt', // name of the slice
	initialState: {
		showGptSearch: false,
	},
	reducers: {
		toggleGptSearchView: (state, action) => {
			state.showGptSearch = !state.showGptSearch
		},
	},
})

export const { toggleGptSearchView } = gptSlice.actions
export default gptSlice.reducer
