import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
	name: 'config',
	initialState: {
		languages: 'en',
	},
	reducers: {
		setLanguages: (state, action) => {
			state.languages = action.payload
		},
	},
})

export const { setLanguages } = configSlice.actions
export default configSlice.reducer
