<script>
	const fileNames = [
		{ filename: "1.jpg", des: "Patna, Sri Lanka (Not AI)"},
		{ filename: "car-2.png", des: "Some car" },
		{ filename: "factory.png", des: "Visiting a factory" },
		{ filename: "green.png", des: "Anime world" },
		{ filename: "landscape.png", des: "???" },
		{ filename: "mountain.png", des: "Nature" },
        { filename: "beg.png", des: "Oh sh*t, here we go again" },
		{ filename: "mountains.png", des: "Finally, some rest!"},
		{ filename: "neon.png", des: "Cyberpunks" },
        { filename: "car.png", des: "Car in a modern world" },
		{ filename: "shop.png", des: "Cute little shop" },
		{ filename: "tech.png", des: "Travelling in 2469 be like" },
		{ filename: "windows10.png", des: "Windows 10 lock screen"},
		{ filename: "wreck.png", des: "Shipmarine" },
	];
</script>

{#each fileNames as item}
	<img src="/imgs/{item.filename}" loading="lazy" class="rounded" alt={item.des} />

	<p class="mt-2 mb-4 text-center text-gray-200">
		{item.des}
	</p>
{/each}
