
import './PostItem.css';
import moment from "moment";
import 'moment/locale/ru';
moment.locale('ru');

const PostItem = ({ image, userName, date, id, children }) => {

let timeCreated = moment(date).format('lll');

console.log(image, userName, date, children, id)

	return (
		<li className="post-item">
			<header className="post-item-header">
				<img className="avatar" src={image} alt="avatar" />
				<h3 className="post-item-name">{userName}</h3>
			</header>
			<div className='wrapper-text'>
				<p className="post-item-text">{children}</p>
				<p className="post-item-date">{timeCreated}</p>
			</div>
		</li>
	)
}

export default PostItem;