<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import TypingComponent from "./TypingComponent.svelte";
	import { ripple } from "svelte-ripple-action";
	import { getSpotifyData, type UserData } from "./spotify";

	let spotifyData: UserData["data"] | null = null;

	const birthDate = new Date("2008-04-20"); //4/20 😎

	let refreshInterval: NodeJS.Timeout;

	const refs = [
		{
			name: "Will Yoo - Founder, Realm labs",
			url: "#",
			text: `I've worked with top engineers from the classic well regarded places. FANG, Stanford, Ivy League. I've seen the entire spectrum in private market tech - from startups to unicorn company to top defi protocols. I'll say Posandu is among the most reliable, talented, and high integrity of people I've ever worked with. You'd be lucky to have him anywhere near your projects.`,
		},
		{
			name: "Yashash Pugalia",
			url: "https://github.com/yashash-pugalia",
			text: `Posandu is an incredibly talented developer. I've had the pleasure
		of collaborating with him on several projects, and I'm always impressed by
		his knowledge and skillset. I have no doubt he'll continue to excel in his
		future endeavours.`,
		},
	];

	let changeInterval: NodeJS.Timeout;
	let currentRef = 0;

	onDestroy(() => {
		clearInterval(refreshInterval);
		clearInterval(changeInterval);
	});

	onMount(async () => {
		spotifyData = (await getSpotifyData()).data;

		refreshInterval = setInterval(async () => {
			spotifyData = (await getSpotifyData()).data;
		}, 10000); //10 seconds - less than 1kb of data per request so it's fine ig

		changeInterval = setInterval(() => {
			currentRef++;
			if (currentRef >= refs.length) currentRef = 0;
		}, refs[currentRef].text.length * 100); //100ms per character
	});
</script>

<svelte:head>
	<title>Posandu Mapa - Fullstack dev</title>
</svelte:head>

<div class="grid mt-32 md:mt-48 md:grid-cols-2 grid-cols-1 relative z-10">
	<div
		class="col-span-1 flex flex-col justify-center md:items-start items-center"
	>
		<h2 class="text-3xl opacity-60 font-light">Hey!</h2>

		<h1 class="text-5xl my-4 font-medium text-white">
			<TypingComponent text="I'm Posandu" /> <span class="opacity-0">.</span>
		</h1>

		<h2 class="text-2xl opacity-40">
			Fullstack dev
		</h2>

		<a
			href="/#contact"
			class="bg-blue-600/10 text-blue-600 rounded-lg px-2 py-1 text-sm mt-4"
			use:ripple>Contact me</a
		>
	</div>

	<div class="col-span-1 mt-10 md:mt-auto flex justify-center md:justify-end">
		<img
			src="https://avatars.githubusercontent.com/u/76736580?v=4?v=3&s=200"
			alt="Profile"
			class="rounded-full w-48 h-48"
		/>
	</div>
</div>

<h2 class="mt-48 mb-8 text-2xl font-semibold">About me</h2>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1 mb-4">
	<div class="col-span-1 flex flex-col gap-4 relative">
		<div class="relative group">
			<div
				class="bg-green-800 justify-between flex p-4 pt-1 mx-4 rounded-xl absolute w-[calc(100%-2rem)] text-sm h-full group-hover:-top-7 items-start transition-all -top-6 opacity-0 group-hover:opacity-100"
			>
				<div class="flex items-center justify-between w-full">
					<p>Learn to create this</p>

					<a
						href="https://www.tronic247.com/adding-your-discord-status-to-your-website/"
						target="_blank"
						class="bg-white/10 font-semibold px-2 py-1 rounded-lg transition duration-200"
						use:ripple
					>
						Read
					</a>
				</div>
			</div>

			<div
				class=" bg-green-600 rounded-xl p-4 relative transition-all group-hover:translate-y-2 group-hover:scale-95"
			>
				<a class="text-white/50 text-2xl mb-2 font-medium" href="/playlist"
					>Spotify</a
				>

				{#if spotifyData?.listening_to_spotify}
					<p class="text-lg font-bold text-white">
						Listening to
						<a
							href="https://open.spotify.com/track/{spotifyData?.spotify
								?.track_id}">{spotifyData?.spotify?.song}</a
						>
						by
						{spotifyData?.spotify?.artist}
					</p>
					<img
						src={spotifyData?.spotify?.album_art_url}
						alt="Album art"
						class="rounded-lg size-12 inline-block absolute right-2 top-2"
					/>
				{:else}
					<p class="text-lg font-bold text-white">
						Not listening to anything right now
					</p>
				{/if}
			</div>
		</div>

		<div class=" bg-red-600 rounded-xl p-4">
			<h2 class="text-white/50 text-2xl mb-2 font-medium">From</h2>

			<p class="text-3xl font-bold text-white">Sri Lanka</p>
		</div>
	</div>

	<div
		class="md:col-span-2 col-span-1 text-white/90 leading-8 bg-zinc-800 rounded-xl p-4 text-lg relative z-10"
	>
		<p>
			I'm a student by day, developer by night. I'm mostly interested in <span
				class="font-semibold text-blue-400">web dev</span
			>, but I also do some
			<span class="font-semibold text-green-400">software dev</span>,
			<span class="font-semibold text-indigo-400"> AI </span>
			and <span class="font-semibold text-green-400">crypto</span> stuff. I'm
			quite good at
			<span class="font-semibold text-yellow-400">JavaScript</span>,
			<span class="font-semibold text-blue-400">CSS</span>
			and <span class="font-semibold text-orange-400">Svelte</span>.
		</p>

		<p class="my-2">
			I have experience on creating Enterprise software. I'm also certified on <a
				class="font-semibold text-red-400 hover:ring-4 rounded-lg ring-red-500/20 transition-all"
				href="https://www.codingame.com/certification/UuE-yYkOPsUD3F6aCWZ5ZA"
				>Codingame</a
			> at solving problems with JavaScipt.
		</p>

		<p class="my-2">
			My other hobbies include badminton, reading, and writing.
		</p>
	</div>
</div>

<div class="rounded-lg bg-blue-900/20 p-4">
	<p class="text-sm">
		<span class="text-gray-100/30 text-lg inline-block mr-1">&ldquo;</span
		>{refs[currentRef].text}<span
			class="text-gray-100/30 text-lg inline-block ml-1">&rdquo;</span
		> <br />
		<a
			href={refs[currentRef].url}
			class="text-white/30 inline-block mt-2"
			target="_blank">{refs[currentRef].name}</a
		>
	</p>

	<div class="flex gap-2 mt-2">
		{#each refs as item, i}
			<button
				class="w-4 h-4 rounded-full hover:bg-blue-900/80 {refs[currentRef]
					.text === item.text
					? 'active bg-blue-900'
					: 'bg-blue-900/50'} transition duration-200"
				use:ripple={{ center: true }}
				on:click={() => {
					currentRef = i;
					clearInterval(changeInterval);
					changeInterval = setInterval(() => {
						currentRef++;
						if (currentRef >= refs.length) currentRef = 0;
					}, refs[currentRef].text.length * 100); //100ms per character
				}}
			></button>
		{/each}
	</div>
</div>

<h2 class="mt-16 mb-8 text-2xl font-semibold">Contact me</h2>

<div class=" bg-zinc-900 p-4 rounded-lg leading-8" id="contact">
	<span
		>Emails:
		<a
			href="mailto:posandumapa@gmail.com"
			class="text-blue-300 hover:opacity-80">posandumapa@gmail.com</a
		>,
		<a
			href="mailto:posandu@tronic247.com"
			class="text-blue-300 hover:opacity-80">posandu@tronic247.com</a
		>,
		<a href="mailto:posandu@pm.me" class="text-blue-300 hover:opacity-80"
			>posandu@pm.me</a
		>
	</span>

	<br />
	Interested in my work? Shoot me an email if you want to contact me / hire me /
	etc.

	<br />

	Alternatively, you check below for my socials.
</div>
