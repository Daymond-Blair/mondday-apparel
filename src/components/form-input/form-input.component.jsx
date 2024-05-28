import './form-input.styles.scss'

// setup props to get data from signUpForm

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" {...otherProps} />

			{label && (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>

		// <div className="group">
		// 	<input className="form-input" {...otherProps} />

		// 	{label && (
		// 		<label
		// 			className={`${
		// 				otherProps.value.length ? 'shrink' : ''
		// 			} form-input-label`}
		// 		>
		// 			{label}
		// 		</label>
		// 	)}
		// </div>
	)
}

export default FormInput
