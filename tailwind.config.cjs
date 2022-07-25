/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Roboto', 'sans-serif']
			},
			colors:{
				accent: '#8080D7',
				bright: '#F1E6E6',
				bodyBg: '#010922'
			}
		},
	},
	plugins: [],
}
