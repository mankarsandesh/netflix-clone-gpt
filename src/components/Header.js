import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utlis/firebase'
import { useNavigate } from 'react-router-dom'
const Category = () => {
	const data = [
		'Home',
		'Tv Shows',
		'Movies',
		'New & Popular',
		'My List',
		'Watch Again',
	]
	return (
		<ul className="flex  text-white py-4 gap-3 px-4 text-xs ">
			{data.map((item) => {
				return <li className="cursor-pointer">{item}</li>
			})}
		</ul>
	)
}
const Header = () => {
	const user = useSelector((store) => store.user)
	const Navigate = useNavigate()
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				Navigate('/')
			})
			.catch((error) => {
				Navigate('/error')
			})
	}

	return (
		<div className=" flex px-6 pt-1 bg-gradient-to-b from-black items-stretch">
			<img
				className="w-24 h-12"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="Netflix Clone"
			/>
			{user && (
				<React.Fragment>
					<div className=" w-full flex">
						<div className="flex-auto w-64">
							<Category />
						</div>
						<div className=" flex-last w-32 flex py-4 gap-4 text-white">
							<div>
								<img src={user.photoURL} className="w-8 rounded" alt="" />
							</div>
							<button onClick={handleSignOut} className="text-xs">
								Sign Out
							</button>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	)
}

export default Header
