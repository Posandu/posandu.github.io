<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
	import "./styles.css";
	import PageTransition from "./PageTransition.svelte";
	import type { LayoutServerData } from "./$types";
	import { navigating } from "$app/stores";
	import { initializeApp } from "firebase/app";

	const firebaseConfig = {
		apiKey: "AIzaSyB6H1a1HfQCkDeOC1kcEo4pKwKIjWNpGno",
		authDomain: "portfolio-2ae6c.firebaseapp.com",
		projectId: "portfolio-2ae6c",
		storageBucket: "portfolio-2ae6c.appspot.com",
		messagingSenderId: "585390300572",
		appId: "1:585390300572:web:24d367d3a6937a4c003c59",
	};

	initializeApp(firebaseConfig);

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
