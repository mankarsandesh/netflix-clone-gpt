import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { checkValidationData } from '../utlis/validation'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'

import { auth } from '../utlis/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utlis/userSlice'

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)

	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const signInForm = (e) => {
		const message = checkValidationData(
			email.current.value,
			password.current.value
		)
		setErrorMessage(message)
		if (message) return
		if (!isSignInForm) {
			// Sign Up
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: 'https://avatars.githubusercontent.com/u/55863239?v=4',
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							)
							navigate('/browse')
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})
				})
				.catch((error) => {
					setErrorMessage(error.code + '-' + error.message)
				})
		} else {
			// Sign In
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					console.log(user)
					navigate('/browse')
				})
				.catch((error) => {
					const errorMessage = error.message
					const errorCode = error.code
					setErrorMessage(errorCode + '-' + errorMessage)
				})
		}
	}
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	return (
		<div className="loginBackground">
			<Header />
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute w-3/12 p-12 top-20 bg-black mx-auto right-0 left-0 text-white bg-opacity-80"
			>
				<h1 className="text-3xl font-bold py-4">
					{isSignInForm ? 'Sign in' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 w-full bg-gray-700 rounded-md"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email or phone number"
					className="p-4 my-4 w-full bg-gray-700 rounded-md"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-4 w-full bg-gray-700 rounded-md"
				/>
				<p className="p-2 text-red-600 text-lg font-bold">{errorMessage}</p>
				<button
					className="p-4 my-4 bg-red-700 w-full rounded-md"
					onClick={signInForm}
				>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>

				<p
					className="text-md mt-4 font cursor-pointer"
					onClick={toggleSignInForm}
				>
					{isSignInForm ? 'New to Netflix? Sign up now' : 'Already Register'}
				</p>
			</form>
		</div>
	)
}

export default Login
