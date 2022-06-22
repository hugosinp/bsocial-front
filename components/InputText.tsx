import React, { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import Cross from '../public/assets/svg/cross';

interface InputTextProps {
	type?: 'text' | 'number' | 'email' | 'password';
	fullWidth?: boolean;
	isSmall?: boolean;
	min?: string;
	isCenter?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDelete?: (value: string) => void;
	placeHolder?: string;
	value?: string | number;
	rounded?: boolean;
	cross?: boolean;
	semiBold?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
	type = 'text',
	fullWidth = false,
	isSmall = false,
	min,
	placeHolder = '',
	isCenter = false,
	rounded = true,
	value,
	handleDelete,
	onChange,
	cross = false,
	semiBold = false,
}) => {
	const [state, setState] = useState<string | number | undefined>(value);

	useEffect(() => {
		setState(value);
	}, [value]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
		onChange(e);
	};
	const handleClick = () => {
		setState('');
		if (handleDelete) handleDelete('');
	};

	return (
		<div className="input relative">
			<input
				onChange={handleChange}
				type={type}
				value={state}
				min={min}
				placeholder={placeHolder}
				className={clsx({
					'text-darkGray py-2 px-4  border border-midGray  focus:outline-darkBlue shadow': true,
					'rounded ': rounded,
					'w-full': fullWidth,
					'w-20': isSmall,
					'text-center': isCenter,
					'font-semibold': semiBold,
				})}
			/>
			{cross && state && (
				<Cross
					onClick={handleClick}
					className="absolute bg-crossInputBg rounded-full fill-crossInputSVG"
					style={{
						top: '50%',
						right: '8px',
						transform: 'translate(0px, -50%) rotate(45deg)',
						width: '20px',
						height: '20px',
					}}
				/>
			)}
		</div>
	);
};

export default InputText;
