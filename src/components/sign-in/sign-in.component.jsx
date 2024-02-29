import { signInWithRedirect } from 'firebase/auth'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
	// const logGoogleUser = async () => {
	// 	const response = await signInWithRedirect()
	// 	console.log(response)
	// }

	return (
		<div>
			<h1>Sign In</h1>
			<button>Sign in with Google Redirect</button>
		</div>
	)
}

export default SignIn
