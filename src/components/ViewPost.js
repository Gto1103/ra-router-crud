import PostItem from "./PostItem/PostItem";
import Button from "./Button/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = 'http://localhost:7070/posts/';

const ViewPost = ({ buttonNameEdit, colorEdit, buttonNameDel, colorDel }) => {
	
	const { id } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [hasError, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(()=> {
	setLoading(true);
		fetch(`${url}${id}/`)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					setError(response.status);
					throw new Error(`Ошибка загрузки: ${response.status}(${response.statusText})`);
				}
				return response.json();
			})
			.then((response) => {
				setPost(response.post);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setLoading(false);
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	// console.log(`${url}${id}/`);
	// console.log(post, hasError, isLoading);

	const handleEdit = (post) => {
		navigate(`/posts/${id}/edit`);
	}

	const handleDelete = () => {
		fetch(`${url}${id}/`, {
			method: 'DELETE'
		})
			.then(() => navigate('/posts'))
	}

	return (
		<div className="wrapper-list">
		{!isLoading ? <>
			<PostItem
				image="https://i.pravatar.cc/50"
				userName="name"	
				date={post.created}
				id={post.id}>
				{post.content}
			</PostItem>
			<div className="wrapper-button">
				<Button buttonName={buttonNameEdit} style={colorEdit} onClick={handleEdit} >Изменить</Button>
				<Button buttonName={buttonNameDel} style={colorDel} onClick={handleDelete} >Удалить</Button>
			</div>
		</> : <div className="loading">Loading...</div>}
		</div>
	)

}

export default ViewPost;