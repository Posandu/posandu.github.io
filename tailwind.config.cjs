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
			/**
			 * Material Design Shadows
			 */
			boxShadow: {
				"md-light":
					"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
				"md-dark":
					"0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
				"lg-light":
					"0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
				"lg-dark":
					"0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)",
				"xl-light":
					"0px 19px 38px rgba(0, 0, 0, 0.30), 0px 15px 12px rgba(0, 0, 0, 0.22)",
				"xl-dark":
					"0px 25px 50px rgba(0, 0, 0, 0.27), 0px 20px 20px rgba(0, 0, 0, 0.22)",
				"2xl-light":
					"0px 25px 50px rgba(0, 0, 0, 0.25), 0px 20px 20px rgba(0, 0, 0, 0.22)",
				"2xl-dark":
					"0px 30px 60px rgba(0, 0, 0, 0.22), 0px 25px 25px rgba(0, 0, 0, 0.20)",
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
