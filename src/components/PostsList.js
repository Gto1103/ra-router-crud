import PostItem from "./PostItem/PostItem";
import Button from "./Button/Button";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const url = 'http://localhost:7070/posts/';
const opts = { 
	method: 'GET', 
	headers: { 'Content-Type': 'application/json' }
};

const PostList = ({ buttonName, color }) => {

	const navigate = useNavigate();
	
	const [posts, setPosts] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [hasError, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(()=> {
	setLoading(true);
		fetch(url, opts)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					setError(response.status);
					throw new Error(`Ошибка загрузки: ${response.status}(${response.statusText})`);
				}
				return response.json();
			})
			.then((response) => {
				setPosts(response);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setLoading(false);
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// console.log(posts, isLoading, hasError);

	const onClick = () => {
		navigate('new/');
	}

	return (
		<div className="wrapper-list">
			<Button buttonName={buttonName} style={color} onClick={onClick} >Создать пост</Button>
			<ul className="post-list">
			{!isLoading || posts.lenght ? posts.reverse().map(item=> 
				<Link className='post-link' key={item.id} to={`/posts/${item.id}`}>
				<PostItem 
					key={item.id}
					image="https://i.pravatar.cc/50"
					userName="Name" 
					date={item.created}
					id={item.id}>
						{item.content}
				</PostItem>
			</Link>)
				: null}
			</ul>
		</div>
	)
}

export default PostList;