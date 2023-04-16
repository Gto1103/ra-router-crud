import { Link, useNavigate } from "react-router-dom";
import './CloseButton.css';

const CloseButton = () => {

	const navigate = useNavigate();

	const handleClick = (evt) => {
		evt.preventDefault();
		navigate('/posts');
	}

	return(
		<Link to='/' className="close-link">
			<button className="close-button" type="button" onClick={handleClick}>✖</button>
		</Link>
	)
}
export default CloseButton;