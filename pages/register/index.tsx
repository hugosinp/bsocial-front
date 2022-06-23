import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from './../../components/Button';
import InputText from './../../components/InputText';

export default function Register() {
	// States for registration
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	// State for checking the errors
	const [error, setError] = useState('');
	// Handling the form submission
	const handleSubmit = () => {
		if (!(firstname === '' || lastname === '' || username === '' || email === '' || password === '')) {
			axios
				.post('http://localhost:3001/users', {
					firstname: firstname,
					lastname: lastname,
					username: username,
					email: email,
					password: password,
				})
				.then(function () {
					router.push('/login').then();
				})
				.catch(function (error) {
					console.log(error);
					setError(error.message);
				});
		} else {
			setError('All fields must be completed');
		}
	};

	return (
		<div className="w-full h-screen pt-4 pr-0  flex justify-center bg-black bg-opacity-25 ">
			<div className="w-full h-[500px] flex flex-col  max-w-[972px] min-h-[690px] mt-20  rounded-3xl shadow-xl bg-white ">
				<div className="flex w-full h-full min-h-[690px]">
					<div className=" rounded-l-3xl flex w-4/5 flex-col justify-center items-center bg-blue">
						<div className="px-8 text-center space-y-6">
							<strong className="text-[32px] text-white">JOIN US</strong>
							<img
								className="object-cover"
								src="https://cdn.discordapp.com/attachments/981084638355259424/989168985369096212/bsocial-logo.png"
								alt="Current profile photo"
							/>
						</div>
					</div>
					<div className="bg-white flex flex-col rounded w-full p-10 m-auto items-center">
						<h2 className="text-[32px] text-twitter">
							<strong>Register your account </strong>
						</h2>
						{error && (
							<div className="text-red mt-1 ml-2">
								<h1>{error}</h1>
							</div>
						)}
						<div className="mt-4">
							<div className="mb-2">
								<InputText
									placeHolder="firstname"
									value={firstname}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setFirstname(e.target.value);
									}}
									fullWidth
									cross
								/>
							</div>
							<div className="mb-2">
								<InputText
									placeHolder="lastname"
									value={lastname}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setLastname(e.target.value);
									}}
									fullWidth
									cross
								/>
							</div>
							<div className="mb-2">
								<InputText
									placeHolder="username"
									value={username}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setUsername(e.target.value);
									}}
									fullWidth
									cross
								/>
							</div>
							<div className="mb-2">
								<InputText
									placeHolder="email"
									value={email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setEmail(e.target.value);
									}}
									type="email"
									fullWidth
									cross
								/>
							</div>
							<div>
								<InputText
									placeHolder="password"
									value={password}
									type="password"
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setPassword(e.target.value);
									}}
									fullWidth
									cross
								/>
							</div>
						</div>
						<div className="mt-6">
							<Link href={'/'}>
								<Button variant="white">You have an account?</Button>
							</Link>
							<Button variant="contained" onClick={handleSubmit}>
								Subscribe
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
