import React from 'react'
import { MENU_LIST } from '../utlis/constants'
const Category = () => {
	return (
		<ul className="flex  text-white py-4 gap-3 px-4 text-xs ">
			{MENU_LIST.map((item, index) => {
				return (
					<li key={index} className="cursor-pointer">
						{item}
					</li>
				)
			})}
		</ul>
	)
}

export default Category
