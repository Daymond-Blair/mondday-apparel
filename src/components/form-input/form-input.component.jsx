// setup props to get data from signUpForm
const FormInput = ({ label, ...otherProps }) => {
	return (
		<div>
			<label htmlFor="">Display Name</label>
			<input {...otherProps} />
		</div>
	)
}

export default FormInput
