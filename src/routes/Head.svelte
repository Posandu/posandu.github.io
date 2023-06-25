<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { onDestroy, onMount } from "svelte";
	import { spring } from "svelte/motion";

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

<div class="relative group">
	<img
		src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
		alt=""
		class="h-60 -z-50 relative w-full object-cover rounded"
		style="object-position: 50% {$y}px"
	/>

	<div class="tooltip opacity-0 group-hover:opacity-100 transition-all -translate-y-4 group-hover:translate-y-0 tooltip-bottom absolute top-4 right-4" data-tip="View my AI art">
		<a class="btn btn-circle" href="art">?</a>
	</div>
</div>

<div class="-mt-20 px-10 z-10">
	<div class="w-28 rounded-full relative z-50 overflow-hidden">
		<img
			src="https://avatars.githubusercontent.com/u/76736580?v=4"
			alt="avatar"
		/>
	</div>

	<div class="rounded p-4 -m-4">
		<h1 class="text-2xl mt-2 font-semibold flex items-center">Posandu Mapa</h1>

		<p class="mt-2 mb-4">Fullstack Developer | Student</p>

		<div class="">
			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:location-12-filled" class="text-lg mr-2" />
				<p class="text-gray-400 text-sm">Sri Lanka</p>
			</div>

			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:mail-16-filled" class="text-lg mr-2" />
				<p class="text-gray-400 text-sm hover:underline">
					<a href="mailto:posandumapa@gmail.com"> posandumapa@gmail.com </a>
				</p>
			</div>

			<div class="inline-flex items-center mb-2">
				<Icon icon="entypo:cake" class="text-lg mr-2" />
				<p class="text-gray-400 text-sm">April 20</p>
			</div>
		</div>
	</div>
</div>

<div class="flex tabs mt-4 top-0 mb-8 w-full px-10">
	{#each menuItems as item}
		<a
			href={item.link}
			class="tab {$page.url.pathname === item.link
				? 'tab-active tab-bordered'
				: ''} rounded hover:bg-primary/90"
		>
			{item.name}
		</a>
	{/each}
</div>
