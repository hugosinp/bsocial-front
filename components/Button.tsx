import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	variant: 'contained' | 'outline' | 'white';
	fullWidth?: boolean;
	onClick?: () => void;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, fullWidth = false, children, disabled = false }: React.PropsWithChildren<ButtonProps>) => (
	<>
		<button
			className={clsx({
				'font-semibold active:drop-shadow-xl py-2 px-4 rounded font-source': true,
				'bg-green hover:bg-hoverGreen  text-white text-medium': variant === 'contained',
				'bg-white': variant === 'white',
				'w-full': fullWidth,
				'bg-transparent text-greenOutline hover:bg-lightGreenHover  border-2  border-greenOutline py-1': variant === 'outline',
				'opacity-50': disabled && variant === 'contained',
				' text-disabledGray border-disabledGray bg-transparent': disabled && variant === 'outline',
			})}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	</>
);
export default Button;
