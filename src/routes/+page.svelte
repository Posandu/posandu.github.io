<script>
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";
	import { fly } from "svelte/transition";
	import SpotifyStatus from "./SpotifyStatus.svelte";

	const socialArr = [
		{ name: "GitHub", icon: "uiw:github", link: "https://github.com/posandu" },
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
	];

	const quotes = [
		{
			text: "Posandu is an incredibly talented developer. I've had the pleasure of collaborating with him on several projects, and I'm always impressed by his knowledge and skillset. I have no doubt he'll continue to excel in his future endeavours.",
			name: "Yashash Pugalia",
			link: "https://github.com/yashash-pugalia",
			who: "Co worker",
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
	<div class="flex-1">
		<div class="avatar">
			<div class="w-36 mask mask-squircle">
				<img
					src="https://avatars.githubusercontent.com/u/76736580?v=4"
					alt="avatar"
				/>
			</div>
		</div>

		<h1 class="text-4xl mt-2 font-semibold">Posandu Mapa</h1>
		<p class="mt-2 mb-6">Student by day, <code>developer</code> by night.</p>
	</div>

	<div class="relative">
		<SpotifyStatus />
	</div>
</div>

<div class="max-h-max overflow-hidden">
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
</div>

<br />

{#each socialArr as social}
	<div class="tooltip tooltip-bottom mr-2" data-tip={social.name}>
		<a href={social.link} target="_blank" class="btn btn-circle">
			<Icon icon={social.icon} class="inline text-2xl" />
		</a>
	</div>
{/each}

<br />

<p class="mt-4">
	Discord: <span class="text-gray-300">Posandu#4040</span>
</p>

<p class="mt-2">
	Emails: {#each "posandumapa@gmail.com,posandu@pm.me".split(`,`) as item}
		<a href={`mailto:${item}`} class="text-gray-300">{item}</a>{@html `&nbsp;`}
	{/each}
</p>

<p class="mt-2">
	Solana: <span class="text-gray-300">posandu.sol</span>
</p>

<p class="mt-2">
	Ethereum: <span class="text-gray-300">posandu.eth</span>
</p>

<a href="https://www.buymeacoffee.com/posandu" target="_blank"
	><img
		src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
		alt="Buy Me A Coffee"
		style="height: 40px !important; margin-top: 11px"
	/></a
>
