import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../sign-up-form/sign-up-form.component'
import SignInForm from '../sign-in-form/sign-in-form.component'
import './sign-in.styles.scss'

const SignIn = () => {
	const logGoogleUser = async () => {
		try {
			const response = await signInWithGooglePopup()
			console.log(response)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<div className="form-flex">
				<SignInForm />

				<SignUpForm />
			</div>
		</div>
	)
}

export default SignIn
