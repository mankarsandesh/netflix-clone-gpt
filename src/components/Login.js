import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidationData } from '../utlis/validation'

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const signInForm = (e) => {
		const message = checkValidationData(
			email.current.value,
			password.current.value
		)
		setErrorMessage(message)
	}
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt=" Netflix Background"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute w-3/12 p-12 top-20 bg-black mx-auto right-0 left-0 text-white bg-opacity-80"
			>
				<h1 className="text-3xl font-bold py-4">
					{isSignInForm ? 'Sign in' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						useRef={name}
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
					{isSignInForm ? 'Already Register' : 'New to Netflix? Sign up now'}
				</p>
			</form>
		</div>
	)
}

export default Login
