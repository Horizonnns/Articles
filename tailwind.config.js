/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/components/**/*.vue',
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '7rem',
			},

			screens: {
				xl: '1225px',
			},
		},

		extend: {
			boxShadow: {
				article:
					'1px 5px 10px 1px #e2e8f0, 0 0 15px 5px #e2e8f0',
			},
		},
	},
	plugins: [],
};
