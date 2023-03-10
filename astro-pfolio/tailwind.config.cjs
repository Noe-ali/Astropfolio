/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: { min: '0px', max: '768px' },
				md: { min: '768px', max: '1023px' },
				lg: { min: '1024px', max: '1919px' },
				xl: { min: '1920px' },
			}
		},
	},
	plugins: [],
}
