import React, { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import Cross from '../public/assets/svg/cross';

interface TextAreaProps {
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleDelete?: (value: string) => void;
	placeHolder?: string;
	value: string | number;
	rounded?: boolean;
	cross?: boolean;
	row?: number;
	resize?: boolean;
	length?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
	rounded = true,
	value,
	handleDelete,
	cross = false,
	row = 6,
	resize = false,
	length = 280,
	onChange,
}) => {
	const [state, setState] = useState<string | number>(value);

	useEffect(() => {
		setState(value);
	}, [value]);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e);
		setState(e.target.value);
	};

	const handleClick = () => {
		setState('');
		if (handleDelete) handleDelete('');
	};

	return (
		<div className="input relative">
			<textarea
				maxLength={length}
				rows={row}
				onChange={handleChange}
				value={state}
				className={clsx({
					'text-darkGray py-2 px-4  border border-middleGray  focus:outline-darkBlue flex-1 w-full': true,
					'rounded ': rounded,
					'resize-none': !resize,
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

export default TextArea;
