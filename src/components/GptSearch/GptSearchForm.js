import React from 'react'
import lang from '../../utlis/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchForm = () => {
	const langKey = useSelector((store) => store.config.languages)
	console.log(langKey, 'langKey')
	return (
		<div>
			<form className="flex mx-auto w-1/3 bg-black p-4 rounded-sm">
				<input
					type="text"
					placeholder={lang[langKey].searchPlaceholder}
					className="px-2 py-2 rounded-sm w-3/4"
				/>
				<button className="bg-red-600 text-white px-2 rounded-sm w-1/4">
					{lang[langKey].search}
				</button>
			</form>
		</div>
	)
}

export default GptSearchForm
