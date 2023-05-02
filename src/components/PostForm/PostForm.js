
import './PostForm.css'
import { useState } from 'react';
import Button from '../Button/Button';

const PostForm = ({ name, labelText, textValue, onAddPost, styleButton, buttonText }) => {

	const [form, setForm] = useState({content: '' || textValue});

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (form.content !== '') {
			onAddPost(form.content);
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
					value={form.content}
					onChange={handleChange}
					required>
				</textarea>
				<Button buttonName='form-button' style={styleButton} onClick={handleSubmit}>{buttonText}</Button>
			</form>
	)
}

export default PostForm;