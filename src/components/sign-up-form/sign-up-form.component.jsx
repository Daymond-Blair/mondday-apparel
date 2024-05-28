import { useState } from 'react'
import FormInput from '../form-input/form-input.component'

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'
// new pattern from useState, create object to track multiple form fields, due to name and value overlap create shorthand method of storing and setting the object, this form field can be used to authenticate user/password

// object with form fields, display and email are stored to be used for Auth in utils, password and confirm password will not be stored due to security
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

// CHALLENGE:
const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	// destructure off defaultFormFields
	const { displayName, email, password, confirmPassword } = formFields

	const clearFormFields = () => {
		setFormFields(defaultFormFields)
	}
	console.log(formFields)

	const handleSubmit = async (event) => {
		// tell Firebase that we will handle everything in the form
		event.preventDefault()

		// confirm the password matches
		if (password !== confirmPassword) {
			alert('Passwords do not match!')
			return
		}
		// check if user has been authenticated with email and password
		try {
			// grab email and password values that were destructured off formFields
			const { user } = await createAuthUserWithEmailAndPassword(email, password)

			//verify we're getting user data from authorization
			console.log(user)

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
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
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
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

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

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button buttonType={''} type="submit">
					Sign Up
				</Button>
				{/* <button type="submit">Sign Up</button> */}
			</form>
		</div>
	)
}

export default SignUpForm
