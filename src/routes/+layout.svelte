<script lang="ts">
	import "./styles.css";
	import "svelte-ripple-action/ripple.css";
	import Footer from "./Footer.svelte";
	import Head from "./Head.svelte";
</script>

<main class="max-w-3xl m-auto">
	<Head />

	<div class="px-10">
		<slot />
	</div>

	<Footer />
</main>
