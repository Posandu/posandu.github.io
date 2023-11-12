/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				body: "var(--font)",
				heading: "var(--font)",
				serif: "var(--font)",
			},
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animate")],
	daisyui: {
		themes: [
			{
				primary: {
					...require("daisyui/src/theming/themes")["[data-theme=black]"],
				},
			},
		],
	},
};
