/* eslint-disable no-unused-vars */
import PostForm from "../components/PostForm/PostForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const color = { background: 'rgb(50, 53, 226)' };
const url = 'http://localhost:7070/posts/';

const CreateNewPost = () => {

	const navigate = useNavigate();
	const [hasError, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	const onAddPost = (newPost) => {
		setLoading(true);
		const post = JSON.stringify({"id": 0 , "content": newPost});
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
		<PostForm 
				name='newPost' 
				labelText='Новый пост'
				onAddPost={onAddPost} 
				styleButton={color}
				buttonText="Опубликовать"/>
		)
}

export default CreateNewPost;