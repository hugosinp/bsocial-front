import { useState } from 'react';
import styles from '../../styles/Register.module.css';

export default function Home() {
	// States for registration
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			axios
				.post('http://localhost:3001/login', {
					email: email,
					password: password,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
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
				<label className={styles.label}>Email</label>
				<input onChange={handleEmail} className={styles.input} value={email} type="email" />
				<label className={styles.label}>Password</label>
				<input onChange={handlePassword} className={styles.input} value={password} type="password" />
				<button onClick={handleSubmit} className={styles.btn} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
