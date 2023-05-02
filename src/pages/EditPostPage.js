import CloseButton from '../components/CloseButton/CloseButton';
import EditPost from '../components/EditPost';
import './pages.css';

const EditPostPage = () => {

return (
	<div className="wrapper-edit-post">
		<div className='another-info'></div>
		<CloseButton />
		<EditPost />
	</div>
)
}

export default EditPostPage;