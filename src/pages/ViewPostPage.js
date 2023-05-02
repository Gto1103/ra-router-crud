import ViewPost from "../components/ViewPost";
import CloseButton from "../components/CloseButton/CloseButton";

const data = {
	buttonNameEdit: 'edit-button',
	colorEdit: { background: 'rgb(50, 53, 226)' },
	buttonNameDel: 'delete-button',
	colorDel: { background: 'rgb(233, 5, 5)' }
}

const ViewPostPage = () => {

	return(
		<div className="wrapper-post">
			<CloseButton />
			<ViewPost {...data}>
			</ViewPost>
		</div>

	)
}
export default ViewPostPage;