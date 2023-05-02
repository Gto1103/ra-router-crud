
import PostForm from "../components/PostForm/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const color = { background: 'rgb(50, 53, 226)' };
const url = 'http://localhost:7070/posts/';

const EditPost = () => {

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

	// console.log(post, hasError, isLoading);

	const onEditPost = (editPost) => {
		setLoading(true);
		const post = JSON.stringify({"id": id , "content": editPost});
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: post
		})
		.then(() => navigate('/posts'))
		.catch((e) => {
			setError(e.message);
			setLoading(false);
		})
	}

	return (
	<>
		{!isLoading ?
		<PostForm 
				name='editPost' 
				labelText='Редактировать пост'
				textValue={post.content}
				onAddPost={onEditPost} 
				styleButton={color}
				buttonText="Отредактировать"/>
			: <div className="loading">Loading...</div>}
			</>
		)
}

export default EditPost;