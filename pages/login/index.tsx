import { useState } from 'react';
import styles from '../../styles/Register.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
	// States for registration
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the username change
	const handleUsername = (e: any) => {
		setUsername(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e: any) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (username === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			axios
				.post('http://localhost:3001/auth/login', {
					username: username,
					password: password,
				})
				.then(function (response: any) {
					router.push('http://localhost:3000/home').then();
					localStorage.setItem('token', response.data.accessToken);
				})
				.catch(function (error: any) {
					console.log(error);
				});
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}
			>
				<h1>Successfully logged in!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
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
				<h1>User Login</h1>
			</div>
			<div className={styles.messages}>
				<span className={styles.error}>{errorMessage()}</span>
				<span className={styles.success}>{successMessage()}</span>
			</div>
			<form>
				<label className={styles.label}>Username</label>
				<input onChange={handleUsername} className={styles.input} value={username} type="username" />
				<label className={styles.label}>Password</label>
				<input onChange={handlePassword} className={styles.input} value={password} type="password" />
				<button onClick={handleSubmit} className={styles.btn} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
