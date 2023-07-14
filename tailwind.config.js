/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{css,scss,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: true
			}
		}
	},
	plugins: []
}
