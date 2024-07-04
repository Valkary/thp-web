/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        "thp-primary": "#9F013B",
        "thp-white": "#FFF",
        "thp-black": "#0C1221",
        "thp-accent": "#363636",
        "thp-gray": "#D9D9D9"
      }
		},
	},
	plugins: [
	],
}