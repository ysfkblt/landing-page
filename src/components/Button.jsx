import React from 'react';

export default function Button(props) {
	return (
		<button
			type='button'
			className={`py-4 px-6 font-medium text-[20px] text-primary bg-blue-gradient rounded-[10px] outline-none ${props.styles}`}
		>
			Get Started
		</button>
	);
}
