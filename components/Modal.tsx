import React, { ChangeEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from './Button';
import InputText from './InputText';
import TextArea from './TextArea';

interface ModalProps {
	title: string;
	text?: string;
	type: 'login' | 'post';
	blockCloseModal?: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, type, blockCloseModal = false }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [content, setContent] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	function closeModal() {
		if (blockCloseModal) setIsOpen(true);
		else setIsOpen(false);
	}

	// function openModal() {
	// 	setIsOpen(true);
	// }

	return (
		<>
			{/* <div className="fixed inset-0 flex items-center justify-center">
				<Button onClick={openModal} variant="outline">
					Open dialog
				</Button>
			</div> */}

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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
											<div className="mt-2">
												<TextArea
													cross
													value={content}
													onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
														setContent(e.target.value);
													}}
												/>
											</div>
											<div className="mt-4 float-right">
												<Button variant="contained" onClick={closeModal}>
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
