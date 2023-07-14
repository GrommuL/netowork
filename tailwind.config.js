/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{css,scss,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: true
			},
			colors: {
				textPrimary: '#2C2D2E',
				textSecondary: '#919399',
				primary: '#465EFD',
				bgPrimary: '#FBFBFB',
				bgTertiary: '#F0F0F0',
				bgSecondary: '#EDEFFF',
				borderColor: 'rgba(0, 16, 61, 0.12))',
				error: '#ED0A34',
				success: '#0DC268',
				link: '#005BD1',
				overlay: 'rgba(0, 16, 61, 0.48)',
				white: '#FFFFFF',
				black: '#000000'
			}
		}
	},
	plugins: []
}
