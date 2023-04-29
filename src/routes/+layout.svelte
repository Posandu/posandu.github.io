<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
	import "./styles.css";
	import PageTransition from "./PageTransition.svelte";
	import type { LayoutServerData } from "./$types";
	import { navigating } from "$app/stores";

	export let data: LayoutServerData;

	let loadingPage = true;

	$: {
		if ($navigating) {
			loadingPage = true;
		} else {
			loadingPage = false;
		}
	}
</script>

<div class="md:p-16 p-10 md:pt-16 pt-10 flex max-w-6xl m-auto">
	<div class="mr-10 hidden md:block">
		<Sidebar />
	</div>

	<main class="flex-1">
		<div class="md:hidden mb-6"><Sidebar /></div>

		<div class:opacity-60={loadingPage}>
			<PageTransition pathname={data.pathname}>
				<slot />
			</PageTransition>
		</div>
	</main>

	<img src="/imgs/1.jpg" class="fixed top-0 left-0 -z-10 opacity-5 blur-lg" alt="Posandu Mapa" />
</div>
