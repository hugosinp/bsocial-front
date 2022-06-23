module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

	theme: {
		fontFamily: {
			source: ['Source Sans Pro', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			medium: ['18px', '26px'],
			lg: ['20px', '28px'],
			xl: ['24px', '29px'],
			xxl: ['28px', '33px'],
			subHero: ['32px', '37px'],
			hero: ['44px', '49px'],
		},

		colors: {
			black: '#000000',
			blue: '#587CBF',
			darkBlue: '#3B5CAB',
			white: '#FFFFFF',
			darkGray: '#4A4C54',
			midGray: '#616a7e',
			gray: '#616A7E',
			middleGray: '#cdd0d7',
			red: '#B61A0A',
			disabledGray: '#a4a4b0',
			crossInputBg: '#ebedf3',
			crossInputSVG: '#616B7D',
			twitter: '#4c9eeb',
			hoverTwitter: '#3969c0',
		},
	},
};
