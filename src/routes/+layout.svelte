<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
	import "./styles.css";
	import { navigating, page } from "$app/stores";
	import Footer from "./Footer.svelte";
	import Head from "./Head.svelte";

	let loadingPage = true;

	$: {
		if ($navigating) {
			loadingPage = true;
		} else {
			loadingPage = false;
		}
	}
</script>

<main class="max-w-3xl m-auto">
	<Head />

	<div class="px-10">
		<slot />
	</div>

	<Footer />
</main>
