import { useState } from 'react';
import styles from '../../styles/Register.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
	// States for registration
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleFirstname = (e) => {
		setFirstname(e.target.value);
		setSubmitted(false);
	};
	const handleLastname = (e) => {
		setLastname(e.target.value);
		setSubmitted(false);
	};

	const handleName = (e) => {
		setUsername(e.target.value);
		setSubmitted(false);
	};

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
		if (firstname === '' || lastname === '' || username === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			axios
				.post('http://localhost:3001/users', {
					firstname: username,
					lastname: username,
					username: username,
					email: email,
					password: password,
				})
				.then(function () {
					router.push('http://localhost:3000/login').then();
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
				<h1>User {username} successfully registered!!</h1>
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
				<h1>User Registration</h1>
			</div>
			<div className={styles.messages}>
				<span className={styles.error}>{errorMessage()}</span>
				<span className={styles.success}>{successMessage()}</span>
			</div>
			<form>
				<label className={styles.label}>First Name</label>
				<input onChange={handleFirstname} className={styles.input} value={firstname} type="text" />

				<label className={styles.label}>Last Name</label>
				<input onChange={handleLastname} className={styles.input} value={lastname} type="text" />

				<label className={styles.label}>Name</label>
				<input onChange={handleName} className={styles.input} value={username} type="text" />

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
