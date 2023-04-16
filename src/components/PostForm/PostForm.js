
import './PostForm.css'
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Button from '../Button/Button';

const PostForm = ({ name, labelText, onAddPost, styleButton, buttonText }) => {

	const [form, setForm] = useState({content: ''});

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (form.content !== '') {
			const newPost = {"id": nanoid(), "content": form.content};
			onAddPost(newPost);
			setForm({content: ''})};
	}

	const handleChange = (evt) => {
		const { value } = evt.target;
		setForm(prevForm => ({...prevForm, content: value}))
	}

	return (
			<form className="form" onSubmit={handleSubmit}>
				{labelText && <label className={'label-' + name} htmlFor={name}>{labelText}</label>}
				<textarea 
					name={name}
					className={"form-" + name}
					placeholder="Введите текст нового поста..."
					type="text"
					value={form.con}
					onChange={handleChange}
					required>
				</textarea>
				<Button buttonName='form-button' style={styleButton} onClick={handleSubmit}>{buttonText}</Button>
			</form>
	)
}

export default PostForm;