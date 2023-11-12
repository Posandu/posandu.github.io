<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { onDestroy, onMount } from "svelte";
	import { spring } from "svelte/motion";
	import { ripple } from "svelte-ripple-action";

	const y = spring(0, {
		stiffness: 1,
		damping: 1,
	});

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

	const menuItems = [
		{
			name: "About",
			link: "/",
		},
		{
			name: "Skills",
			link: "/skills",
		},
		{
			name: "Tools",
			link: "/tools",
		},
		{
			name: "Projects",
			link: "/projects",
		},
		{
			name: "Experience",
			link: "/exp",
		},
		{
			name: "Guestbook",
			link: "/guestbook",
		},
		{
			name: "Art",
			link: "/art",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - Student by day, developer by night.</title>
</svelte:head>

<svelte:window
	on:scroll={(e) => {
		//get scroll position
		const scrollY = window.scrollY;
		//calculate translateY
		$y = scrollY * 0.5;
	}}
/>

<header
	class="sm:fixed shadow-lg top-1 z-50 p-2 bg-base-300 rounded-full overflow-auto mx-auto left-1/2 sm:-translate-x-1/2"
>
	<div class="flex sm:pl-0 pl-20 items-center justify-center overflow-auto">
		{#each menuItems as item}
			<a
				href={item.link}
				class="
			text-sm px-4 py-2 min-w-min transition-all rounded-full font-semibold
			{$page.url.pathname === item.link
					? ' text-white bg-white/10 '
					: 'hover:bg-white/5'} rounded ripple-effect"
				use:ripple
			>
				{item.name}
			</a>
		{/each}
	</div>
</header>

<div class="relative group">
	<img
		src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
		alt=""
		class="h-48 rounded-t-none relative w-full object-cover rounded-2xl"
		style="object-position: 50% {$y}px"
	/>

	<div
		class="tooltip opacity-0 group-hover:opacity-100 transition-all -translate-y-4 group-hover:translate-y-0 tooltip-bottom top-4 right-4 overflow-hidden rounded-full"
		data-tip="View my AI art"
		style="position: absolute !important;"
		use:ripple={{ center: true }}
	>
		<a class="btn btn-circle" href="art">?</a>
	</div>
</div>

<div class="-mt-20 px-10 z-10 text-center">
	<div class="rounded-full flex flex-col items-center justify-center p-4 -m-4">
		<div class="w-28 rounded-full relative z-30 overflow-hidden" use:ripple>
			<img
				src="https://avatars.githubusercontent.com/u/76736580?v=4"
				alt="avatar"
			/>
		</div>

		<h1 class="text-4xl my-2 mt-4 flex justify-center items-center">
			Posandu Mapa
		</h1>

		<p class="my-2 text-xl mb-4">Fullstack Developer | Student</p>

		<div class="my-2 opacity-50">
			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:location-12-filled" class="text-base mr-2" />
				<p class="text-sm">Sri Lanka</p>
			</div>

			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:mail-16-filled" class="text-base mr-2" />
				<p class="text-sm hover:underline">
					<a href="mailto:posandumapa@gmail.com"> posandumapa@gmail.com </a>
				</p>
			</div>

			<div class="inline-flex items-center mb-2">
				<Icon icon="entypo:cake" class="text-base mr-2" />
				<p class="text-sm">April 20</p>
			</div>
		</div>
	</div>
</div>
