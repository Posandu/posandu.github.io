<script lang="ts">
	import "./styles.css";
	import "svelte-ripple-action/ripple.css";
	import Footer from "./Footer.svelte";
	import Head from "./Head.svelte";
	import { fly } from "svelte/transition";

	export let data;
</script>

<main class="max-w-3xl m-auto">
	<Head />

	<div class="px-10">
		{#key data.url}
			<div
				in:fly={{ delay: 300, duration: 300, y: 10, opacity: 0 }}
				out:fly={{ duration: 300, y: 10, opacity: 0 }}
			>
				<slot />
			</div>
		{/key}
	</div>

	<Footer />
</main>

<style>
	:global(body, html) {
		background-color: #0e0e0e !important;
	}
</style>
