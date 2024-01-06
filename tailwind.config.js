/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'custom-orange': '#FFB100',
				'custom-orange-light': '#FBC252',
				'custom-sage': '#A3BB98',
				'custom-beige': '#F0ECCF',
			},
		},
	},
	plugins: [],
}
