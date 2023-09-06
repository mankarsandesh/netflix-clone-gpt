export const checkValidationData = (email, password) => {
	const isEmaiValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
	const isPasswordValid = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(
		password
	)

	if (!isEmaiValid) return 'Email id is not valid'
	if (!isPasswordValid) return 'Password is not valid'

	return null
}
