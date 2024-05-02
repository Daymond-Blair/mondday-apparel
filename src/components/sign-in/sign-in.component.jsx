import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
	const logGoogleUser = async () => {
		try {
			const response = await signInWithGooglePopup()
			console.log(response)
			console.log('2')
		} catch (error) {
			console.error(error)
		}

		// const response = signInWithGooglePopup()
		// console.log(response)
		// console.log('2')
	}
	console.log('1')
	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	)
}

export default SignIn
