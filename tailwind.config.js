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
			colors: {
				blue: {
					10: '#2b4f79',
				},
			},

			boxShadow: {
				article:
					'0 2px 15px 0 #eaeaea, 0 0 5px 3px #eaeaea',
			},
		},
	},
	plugins: [],
};
