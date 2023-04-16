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
		const post = JSON.stringify(newPost);
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
		
		console.log(post, isLoading, hasError);
	}

	return (
		<PostForm 
				name='newPost' 
				labelText='Новый пост'
				onAddPost={onAddPost} 
				styleButton={color}
				buttonText="Publish"/>
		)


}

export default CreateNewPost;