import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import InputText from './../../components/InputText';
import Button from './../../components/Button';
import Link from 'next/link';

export default function Login() {
	// States for registration
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	// State for checking the errors
	const [error, setError] = useState('');

	// Handling the form submission
	const handleSubmit = () => {
		if (username === '' || password === '') {
			setError('The login or the password is empty');
		} else {
			axios
				.post('http://localhost:3001/auth/login', {
					username: username,
					password: password,
				})
				.then(function (response: any) {
					router.push('/home').then();
					localStorage.setItem('token', response.data.accessToken);
					localStorage.setItem('username', response.data.username);
				})
				.catch(function (error: any) {
					console.log(error);
					setError(error.message);
				});
		}
	};

	return (
		<div className="w-full h-screen pt-4 pr-0  flex justify-center bg-black bg-opacity-25 ">
			<div className="w-full h-[500px] flex flex-col  max-w-[972px] min-h-[690px] mt-20  rounded-3xl shadow-xl bg-white ">
				<div className="flex w-full h-full min-h-[690px]">
					<div className=" rounded-l-3xl flex w-4/5 flex-col justify-center items-center bg-blue">
						<div className="px-8">
							<img
								className="object-cover"
								src="https://cdn.discordapp.com/attachments/981084638355259424/989168985369096212/bsocial-logo.png"
								alt="Current profile photo"
							/>
						</div>
					</div>
					<div className="bg-white flex flex-col rounded w-full p-10 m-auto items-center">
						<h2 className="text-[32px] text-twitter">
							<strong>Login to your account</strong>
						</h2>
						{error && (
							<div className="text-red mt-1 ml-2">
								<h1>{error}</h1>
							</div>
						)}
						<div className="mt-4">
							<div className="mb-2">
								<InputText
									placeHolder="login"
									value={username}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setUsername(e.target.value);
									}}
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
							<Link href={'/register'}>
								<Button variant="white">No account?</Button>
							</Link>
							<Button variant="contained" onClick={handleSubmit}>
								Se connecter
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
