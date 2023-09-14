import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utlis/firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utlis/userSlice'
import { toggleGptSearchView } from '../utlis/gptSlice'
import { setLanguages } from '../utlis/configSlice'
import Category from '../components/Category'
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utlis/constants'
const Header = () => {
	const user = useSelector((store) => store.user)
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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

	const handleGptShow = () => {
		dispatch(toggleGptSearchView())
	}

	const handleChangeLanguage = (e) => {
		dispatch(setLanguages(e.target.value))
	}

	return (
		<div className="fixed top-0 z-10 w-full flex px-6 bg-black from-black items-stretch h-16 ">
			<img
				className=" h-14 cursor-pointer border"
				src={LOGO_URL}
				alt="Netflix Clone"
				onClick={handleGptShow}
			/>

			{user && (
				<React.Fragment>
					<div className=" w-full flex ">
						<div className="flex-auto w-64  ">
							<Category />
						</div>
						<div className=" flex-last  flex py-4 gap-4 text-white ">
							{showGptSearch && (
								<select
									className="bg-black text-white border"
									onChange={handleChangeLanguage}
								>
									{SUPPORTED_LANGUAGES.map((languages) => (
										<option key={languages.name} value={languages.identifier}>
											{languages.name}
										</option>
									))}
								</select>
							)}

							<button
								className="bg-blue-400  text-white px-4 rounded-sm"
								onClick={handleGptShow}
							>
								{showGptSearch ? 'Home Page' : 'GPT Search'}
							</button>
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
