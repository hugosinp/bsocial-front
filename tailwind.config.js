const plugin = require('tailwindcss/plugin');
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
			green: '#3F9F98',
			blue: '#587CBF',
			darkBlue: '#3B5CAB',
			white: '#FFFFFF',
			darkGray: '#4A4C54',
			gray: '#616A7E',
			red: '#B61A0A',
			linkColor: '#3b5cab',
			orange: '#ee9642',
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: {
					fontSize: theme('fontSize.xl'),
					fontFamily: theme('fontFamily.roboto'),
				},
				h2: {
					fontSize: theme('fontSize.lg'),
					fontFamily: theme('fontFamily.roboto'),
				},
				h3: {
					fontSize: theme('fontSize.medium'),
					fontFamily: theme('fontFamily.source'),
				},
				p: {
					fontSize: theme('fontSize.base'),
					fontFamily: theme('fontFamily.source'),
				},
				li: {
					fontSize: theme('fontSize.base'),
					fontFamily: theme('fontFamily.source'),
				},
				input: {
					fontFamily: theme('fontFamily.source'),
				},
				th: {
					fontSize: theme('fontSize.sm'),
					fontFamily: theme('fontFamily.source'),
				},
				td: {
					fontSize: theme('fontSize.base'),
					fontFamily: theme('fontFamily.source'),
				},
			});
		}),
	],
};
