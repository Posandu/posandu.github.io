<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";
	import { fly } from "svelte/transition";
	import SpotifyStatus from "./SpotifyStatus.svelte";

	const socialArr = [
		{
			name: "GitHub",
			icon: "uiw:github",
			link: "https://github.com/posandu",
			color: darken("#333", 10),
			gradientEndColor: "#333",
		},
		{
			name: "Twitter",
			icon: "akar-icons:twitter-fill",
			link: "https://twitter.com/posandu",
			color: darken("#1DA1F2", 10),
			gradientEndColor: "#1DA1F2",
		},
		{
			name: "DEV",
			icon: "material-symbols:logo-dev",
			link: "https://dev.to/posandu",
			color: darken("#0A0A0A", 10),
			gradientEndColor: "#0A0A0A",
		},
		{
			name: "LinkedIn",
			icon: "akar-icons:linkedin-fill",
			link: "https://www.linkedin.com/in/posandu/",
			color: darken("#0077B5", 10),
			gradientEndColor: "#0077B5",
		},
		{
			name: "Stack Overflow",
			icon: "ri:stack-overflow-fill",
			link: "https://stackoverflow.com/users/16474083/posandu",
			color: darken("#F48024", 10),
			gradientEndColor: "#F48024",
		},
		{
			name: "CodePen",
			icon: "ri:codepen-line",
			link: "https://codepen.io/posandu",
			color: darken("#0E7DC0", 10),
			gradientEndColor: "#0E7DC0",
		},
		{
			name: "YouTube",
			icon: "ri:youtube-fill",
			link: "https://www.youtube.com/@posandu",
			color: darken("#FF0000", 10),
			gradientEndColor: "#FF0000",
		},
		{
			name: "Instagram",
			icon: "akar-icons:instagram-fill",
			link: "https://www.instagram.com/posanduu/",
			color: darken("#E1306C", 10),
			gradientEndColor: "#E1306C",
		},
		{
			name: "Discord",
			icon: "akar-icons:discord-fill",
			link: "https://tronic247.com/pastebox.html#O=CISwzgxg9gTgJgLgAQAUpgIYDs4FcDEALAAwlA",
			color: darken("#7289DA", 10),
			gradientEndColor: "#7289DA",
		},
	];

	function darken(color: string, amount: number) {
		amount = amount * 65;
		return color
			.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
				return (
					"#" +
					((1 << 8) | (parseInt(r, 16) - amount)).toString(16).slice(1) +
					((1 << 8) | (parseInt(g, 16) - amount)).toString(16).slice(1) +
					((1 << 8) | (parseInt(b, 16) - amount)).toString(16).slice(1)
				);
			})
			.toUpperCase();
	}

	const quotes = [
		{
			text: "Posandu is an incredibly talented developer. I've had the pleasure of collaborating with him on several projects, and I'm always impressed by his knowledge and skillset. I have no doubt he'll continue to excel in his future endeavours.",
			name: "Yashash Pugalia",
			link: "https://github.com/yashash-pugalia",
			who: "Co worker",
		},
		{
			text: "Posandu is one of the best developers I have met, and he has very impressive and creative skills. I wish him all the best.",
			name: "Logo BlastSL",
			link: "https://www.linkedin.com/in/logo-blastsl/",
			who: "Graphic Designer",
		},
	];

	let activeQuote = 0;

	const interval = setInterval(() => {
		activeQuote = activeQuote === quotes.length - 1 ? 0 : activeQuote + 1;
	}, quotes[activeQuote].text.length * 50 + 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Posandu Mapa - Student by day, developer by night.</title>
</svelte:head>

<div class="flex">
	<div class="flex-1 text-center">
		<div class="avatar animate-in zoom-in-75">
			<div class="w-36 mask mask-squircle">
				<img
					src="https://avatars.githubusercontent.com/u/76736580?v=4"
					alt="avatar"
				/>
			</div>
		</div>

		<h1 class="text-4xl mt-4 font-semibold delay-400 fade-in-20 animate-in">
			Posandu Mapa
		</h1>

		<p class="mt-2 mb-6">Student by day, <code>developer</code> by night.</p>
	</div>

	<div class="relative">
		<SpotifyStatus />
	</div>
</div>

<div class="max-h-max max-w-xl mt-6 m-auto overflow-hidden">
	{#each quotes as quote, i}
		{#if i == activeQuote}
			<div
				class="bg-base-200 rounded mb-4 p-4 hover:bg-base-300 transition-all"
			>
				<blockquote class="blockquote">
					<p class="mb-2 italic">"{quote.text}"</p>
					<a href={quote.link} target="_blank" class="text-sm"
						>{quote.name} - {quote.who}</a
					>
				</blockquote>
			</div>
		{/if}
	{/each}

	<div class="flex gap-2 text-center justify-center">
		{#each quotes as quote, i}
			<button
				class="btn btn-circle btn-xs btn-ghost"
				on:click={() => (activeQuote = i)}
			>
				{#if i == activeQuote}
					<Icon icon="akar-icons:circle-fill" class="text-2xl" />
				{:else}
					<Icon icon="akar-icons:circle" class="text-2xl" />
				{/if}
			</button>
		{/each}
	</div>
</div>

<div class="text-center mt-6">
	{#each socialArr as social}
		<a
			href={social.link}
			target="_blank"
			class="btn mx-1 bg-transparent border-none btn-circle text-white transition-all -outline-offset-4 hover:outline-offset-1"
			style="
				outline: 1px solid {social.gradientEndColor}
			"
			title={social.name}
		>
			<Icon icon={social.icon} class="inline text-2xl" />
		</a>
	{/each}
</div>
