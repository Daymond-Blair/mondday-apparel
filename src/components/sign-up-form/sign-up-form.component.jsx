import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
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

	console.log(formFields)

	const handleSubmit = async (event) => {
		event.preventDefault()
	}
	// element name is passed in as event
	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields({ ...formFields, [name]: value })
	}

	// create form to get data, once submitted, set formFields into object for storage
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
				<label htmlFor="">Display Name</label>
				<input
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<label htmlFor="">Email</label>
				<input
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<label htmlFor="">Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<label htmlFor="">Confirm Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	)
}

export default SignUpForm
