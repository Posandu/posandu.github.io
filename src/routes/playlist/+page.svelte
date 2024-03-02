<script>
	import { onMount } from "svelte";

	let screenHeight = 200;

	onMount(() => {
		screenHeight = window.innerHeight;
	});
</script>

<div class="h-20"></div>

<iframe
	style="border-radius:12px"
	src="https://open.spotify.com/embed/playlist/7fFw5e4EBprXnqUbhZ8xby?utm_source=generator&theme=0"
	width="100%"
	height={screenHeight}
	frameBorder="0"
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	loading="lazy"
	title="Spotify Playlist"
></iframe>
