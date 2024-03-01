<script lang="ts">
	import "./styles.css";
	import "svelte-ripple-action/ripple.css";
	import Footer from "./Footer.svelte";
	import Head from "./Head.svelte";
	import { scale } from "svelte/transition";

	export let data;
</script>

<main>
	<Head />

	<div class="max-w-4xl mx-auto md:px-8 px-4 overflow-x-hidden">
		{#key data.url}
			<div
				in:scale={{ delay: 300, duration: 200, start: 0.992, opacity: 0 }}
				out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
				class="overflow-hidden relative z-10"
			>
				<slot />
			</div>
		{/key}

		<div
			class="max-w-[100vw] min-h-screen blur-3xl isolate w-full pointer-events-none absolute top-0 left-0 overflow-hidden"
		>
			<div
				class="w-64 h-64 rounded-full bg-gradient-to-tr opacity-30 from-purple-900 to-blue-900 scale-150 absolute pointer-events-none top-20 left-48"
			></div>
			<div
				class="w-64 h-64 rounded-full bg-gradient-to-tr opacity-40 from-purple-900 to-blue-900 scale-150 absolute pointer-events-none bottom-20 right-48"
			></div>
		</div>

		<Footer />
	</div>
</main>
