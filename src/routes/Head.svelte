<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { spring } from "svelte/motion";
	import { ripple } from "svelte-ripple-action";
	import { crossfade, slide } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";

	const [send, receive] = crossfade({
		duration: 300,
	});

	const [sendMenu, receiveMenu] = crossfade({
		duration: 300,
	});

	const y = spring(0, {
		stiffness: 1,
		damping: 1,
	});

	let menuOpen = false;

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
			name: "Work",
			link: "/work",
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
			name: "Photography",
			link: "/photos",
		},
		{
			name: "Blog",
			link: "https://www.tronic247.com",
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

<div class="fixed flex items-center justify-center z-50 w-full top-2 left-0">
	<header class="md:shadow-lg text-center p-2 md:bg-zinc-900 md:rounded-full">
		<div
			class="md:flex hidden sm:pl-0 pl-20 items-center justify-center overflow-hidden relative"
		>
			{#each menuItems as item}
				<div class="relative h-max flex items-center justify-center">
					<a
						href={item.link}
						class="
			text-sm px-4 py-2 inline-block relative z-10 min-w-min transition-all rounded-full font-semibold
			{$page.url.pathname === item.link
							? ' text-white bg-[#343434]'
							: 'hover:bg-white/5'} rounded ripple-effect"
						use:ripple
					>
						{item.name}
					</a>

					{#if $page.url.pathname === item.link}
						<div
							class="absolute w-full h-full blur-lg inset-0 rounded-full bg-white/10"
							in:receive={{ key: "menu" }}
							out:send={{ key: "menu" }}
						></div>
					{/if}
				</div>
			{/each}
		</div>

		{#if !menuOpen}
			<button
				class="text-3xl md:hidden mx-auto rounded-full bg-base-300 w-16 h-16 flex items-center justify-center"
				in:receive={{ key: "menu" }}
				out:send={{ key: "menu" }}
				on:click={() => {
					menuOpen = true;
				}}
				use:ripple
			>
				<Icon
					icon="ic:baseline-menu"
					class="md:hidden text-white cursor-pointer"
				/>
			</button>
		{:else}
			<div
				class="rounded-2xl shadow-lg fixed left-1/2 -translate-x-1/2 h-max max-w-xl inset-6 max-h-[calc(100vh-24px)] overflow-auto backdrop-blur-xl bg-base-300/60"
				in:receive={{ key: "menu" }}
				out:send={{ key: "menu" }}
			>
				<a
					href="#!"
					class="
				text-md mb-4 px-4 py-2 block
				 text-white rounded ripple-effect"
					use:ripple
					on:click={() => {
						menuOpen = false;
					}}
				>
					Close Menu
				</a>

				{#each menuItems as item}
					<a
						href={item.link}
						class="
				text-md px-4 py-2 block text-left
				{$page.url.pathname === item.link
							? ' text-white bg-white/10 '
							: 'hover:bg-white/5'} ripple-effect"
						use:ripple
						on:click={() => {
							menuOpen = false;
						}}
					>
						{item.name}
					</a>
				{/each}
			</div>
		{/if}
	</header>
</div>
