<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
	import "./styles.css";
	import PageTransition from "./PageTransition.svelte";
	import type { LayoutServerData } from "./$types";
	//Detect svelte router nav
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
</div>
