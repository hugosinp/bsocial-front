import React, { ChangeEvent, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from './Button';
import InputText from './InputText';
import TextArea from './TextArea';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';

interface ModalProps {
	title: string;
	text?: string;
	type: 'login' | 'post';
	blockCloseModal?: boolean;
	onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, type, blockCloseModal = false, onClick }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const router = useRouter();

	const callBack = () => {
		if (onClick) onClick();
	};

	function closeModal() {
		if (blockCloseModal) setIsOpen(true);
		else {
			setIsOpen(false);
			setContent('');
			setError(false);
		}
	}

	function openModal() {
		setIsOpen(true);
	}

	const handleSubmit = () => {
		if (content === '') {
			setError(true);
		} else {
			setError(false);
			axios
				.post(
					'http://localhost:3001/posts',
					{
						content: content,
					},
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					}
				)
				.then(function () {
					callBack();
				})
				.catch(function (error) {
					router.push('http://localhost:3000/login').then();
					console.log(error);
				});
			closeModal();
		}
	};

	return (
		<>
			<div className="flex justify-end my-8">
				<Button onClick={openModal} variant="contained">
					<div className={'flex p-2 mr-1'}>
						<AiOutlinePlus className={'mt-2 mr-2'} />
						Create a post
					</div>
				</Button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										{title}
									</Dialog.Title>
									{type == 'login' && (
										<>
											<div className="mt-8">
												<InputText
													placeHolder="login"
													value={login}
													onChange={(e: ChangeEvent<HTMLInputElement>) => {
														setLogin(e.target.value);
													}}
													fullWidth
													cross
												/>
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
											<div className="mt-6 float-right flex">
												<Button variant="white" onClick={closeModal}>
													No account?
												</Button>
												<Button variant="contained" onClick={closeModal}>
													Se connecter
												</Button>
											</div>
										</>
									)}
									{type == 'post' && (
										<>
											{error && (
												<div className="text-red mt-1 ml-2">
													<h1>Please enter a post</h1>
												</div>
											)}
											<div className="mt-4 h-[170px]">
												<TextArea
													cross
													row={6}
													resize
													value={content}
													onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
														setContent(e.target.value);
													}}
												/>
											</div>
											<div className="mt-4 float-right">
												<Button
													variant="contained"
													onClick={() => {
														handleSubmit();
													}}
												>
													Post the content
												</Button>
											</div>
										</>
									)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
