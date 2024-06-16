import { useState } from 'react'
import FormInput from '../form-input/form-input.component'

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import './sign-in-form.styles.scss'
// new pattern from useState, create object to track multiple form fields, due to name and value overlap create shorthand method of storing and setting the object, this form field can be used to authenticate user/password

// object with form fields, display and email are stored to be used for Auth in utils, password and confirm password will not be stored due to security
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

// CHALLENGE:
const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	// destructure off defaultFormFields
	const { displayName, email, password, confirmPassword } = formFields

	const clearFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const signInWithGoogle = async () => {
		const { user } = await signInWithGoogle()
		await createUserDocumentFromAuth(user)
	}

	console.log(formFields)

	const handleSubmit = async (event) => {
		// tell Firebase that we will handle everything in the form
		event.preventDefault()
		console.log(password)
		console.log(confirmPassword)
		// confirm the password matches
		if (password !== confirmPassword) {
			alert('Passwords do not match!')
			console.log(password)
			console.log(confirmPassword)
			return
		}

		console.log(password)
		console.log(confirmPassword)
		// check if user has been authenticated with email and password
		try {
			// grab email and password values that were destructured off formFields
			const { user } = await createAuthUserWithEmailAndPassword(email, password)

			//verify we're getting user data from authorization
			console.log(user)

			const response = await signInAuthUserWithEmailAndPassword(email, password)

			console.log(response)
			//clear form after we submit credentials
			clearFormFields()

			//take user data as well as display name entered and create user document to store in database
			await createUserDocumentFromAuth(user, { displayName })
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('User creation failed, email already in use.')
			} else {
				console.error('user creation encountered an error', error)
			}
		}
	}
	// if authenticated, create user document from returned values of authentication

	// element name is passed in as event
	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields({ ...formFields, [name]: value })
	}

	// create form to get data, once submitted, set formFields into object for storage
	return (
		<div className="sign-in-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				{/* This is another way to structure input attributes, I can't get it to work without throwing an error - possibly investigate but leaning towards just using spread operator */}
				{/* <FormInput
					label="Display Name"
					inputOptions={{
						type: 'text',
						required: true,
						onChange: handleChange,
						name: 'displayName',
						value: displayName,
					}}
				/> */}

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="buttons-container">
					<Button buttonType={'inverted'} type="submit">
						Sign In
					</Button>

					<Button buttonType={'google'} onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</div>
				{/* <button type="submit">Sign Up</button> */}
			</form>
		</div>
	)
}

export default SignInForm
