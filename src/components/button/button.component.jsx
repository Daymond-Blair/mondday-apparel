import './button.styles.scss'

{
	/*  
    google sign in


    default


    inverted    
    */
}

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}
        `}
			// spread in all other properties like type=submit
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
