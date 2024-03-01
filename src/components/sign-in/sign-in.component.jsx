import { signInWithRedirect } from 'firebase/auth'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
	const logGoogleUser = async () => {
		try {
			const response = await signInWithGooglePopup()
			console.log(response)
		} catch (err) {
			console.log('there was an error')
		}
	}

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign in with Google Redirect</button>
		</div>
	)
}

export default SignIn
