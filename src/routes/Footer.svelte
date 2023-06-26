<script lang="ts">
	import { navigating } from "$app/stores";
	import Icon from "@iconify/svelte";

	const socialArr = [
		{
			name: "GitHub",
			icon: "uiw:github",
			link: "https://github.com/posandu",
		},
		{
			name: "Twitter",
			icon: "akar-icons:twitter-fill",
			link: "https://twitter.com/posandu",
		},
		{
			name: "DEV",
			icon: "material-symbols:logo-dev",
			link: "https://dev.to/posandu",
		},
		{
			name: "LinkedIn",
			icon: "akar-icons:linkedin-fill",
			link: "https://www.linkedin.com/in/posandu/",
		},
		{
			name: "Stack Overflow",
			icon: "ri:stack-overflow-fill",
			link: "https://stackoverflow.com/users/16474083/posandu",
		},
		{
			name: "CodePen",
			icon: "ri:codepen-line",
			link: "https://codepen.io/posandu",
		},
		{
			name: "YouTube",
			icon: "ri:youtube-fill",
			link: "https://www.youtube.com/@posandu",
		},
		{
			name: "Instagram",
			icon: "akar-icons:instagram-fill",
			link: "https://www.instagram.com/posanduu/",
		},
		{
			name: "Discord",
			icon: "akar-icons:discord-fill",
			link: "https://tronic247.com/pastebox.html#O=CISwzgxg9gTgJgLgAQAUpgIYDs4FcDEALAAwlIAUUANnAJQBQSTzLrAAgA7rZ4VYCmAd1pA",
		},
	];

	const icons = ["💖", "🤕", "🤬", "🩸", "🥵"];

	let icon = 0;

	$: {
		if ($navigating) {
			icon = ~~(Math.random() * icons.length);
		}
	}
</script>

<p class="mt-8 text-center">
	Made with <button
		class="text-red-500 cursor-pointer transition-all select-none hover:scale-125 active:scale-95 inline-block"
		on:click={() => (icon = icon >= icons.length - 1 ? 0 : icon + 1)}
		>{icons[icon]}</button
	>
	by Posandu Mapa in
	<span class="text-yellow-500">Sri Lanka</span>. Open source on
	<a
		href="https://github.com/posandu/posandu.github.io"
		target="_blank"
		class="text-blue-500 hover:underline">GitHub</a
	>.
</p>

<div class="text-center mt-6">
	{#each socialArr as social}
		<a
			href={social.link}
			target="_blank"
			class="btn btn-sm mx-1 bg-transparent border-none btn-circle text-white transition-all -outline-offset-4 hover:outline-offset-1"
			title={social.name}
		>
			<Icon icon={social.icon} class="inline text-xl" />
		</a>
	{/each}
</div>
