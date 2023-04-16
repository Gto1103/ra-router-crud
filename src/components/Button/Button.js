import './Button.css';

const Button = ({ buttonName, style, onClick, children }) => {

	return(
		<button 
			className={buttonName}
			onClick={onClick}
			style={style}>
				{children}
			</button>
	)
}
export default Button;