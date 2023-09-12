import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utlis/firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utlis/userSlice'

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
			{data.map((item, index) => {
				return (
					<li key={index} className="cursor-pointer">
						{item}
					</li>
				)
			})}
		</ul>
	)
}
const Header = () => {
	const user = useSelector((store) => store.user)
	const Navigate = useNavigate()
	const dispatch = useDispatch()
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				Navigate('/error')
			})
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				)
				Navigate('/browse')
			} else {
				dispatch(removeUser(null))
				Navigate('/')
			}
		})

		//  Unsubscribe auth listener on unmount
		return () => unsubscribe()
	}, [])

	return (
		<div className="fixed top-0 z-10 w-full flex px-6 pt-1 bg-black from-black items-stretch">
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
