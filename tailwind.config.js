/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*'],
	theme: {
		extend: {
			backgroundColor: {
				greenCustom: '#42b72a',
			},
			screens: {
				sm: '640px',
				'my-breakpoint': '441px', // new breakpoint
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
