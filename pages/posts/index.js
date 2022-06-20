import { useState } from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import styles from '../../styles/Post.module.css';

export default function Post() {
	const router = useRouter();
	const [content, setContent] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleContent = (e) => {
		setContent(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (content === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			axios
				.post('http://localhost:3001/posts', {
					//token: storage.token,
					content: content,
				})
				.then(function () {
					router.push("http://localhost:3000/home").then();
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}
			>
				<h1>Successfully create a post!!</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}
			>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};
	return (
		<div className={styles.form}>
			<div>
				<h1>Create a post</h1>
			</div>
			<div className={styles.messages}>
				<span className={styles.error}>{errorMessage()}</span>
				<span className={styles.success}>{successMessage()}</span>
			</div>
			<form>
				<label className={styles.label}>Content</label>
				<textarea className={styles.content} name="body" maxLength="280" rows={6}
						  onChange={handleContent}
						  value={content}/>
				<button onClick={handleSubmit} className={styles.btn} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
