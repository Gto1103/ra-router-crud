import PostList from "../components/PostsList";
import './pages.css';

const color = { background: 'rgb(50, 53, 226)' }

const HomePage = () => {

	return(
		<div className="home-page">
			<PostList buttonName="create-button" color={color} />
		</div>
	)
}
export default HomePage;