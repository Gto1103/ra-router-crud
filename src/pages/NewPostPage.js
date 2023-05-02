import CreateNewPost from '../components/CreateNewPost';
import CloseButton from '../components/CloseButton/CloseButton';
import './pages.css';

const NewPostPage = () => {

	return(
		<div className="new-post-page">
			<div className='another-info'></div>
			<CloseButton />
			<CreateNewPost />
		</div>
	)
}

export default NewPostPage;