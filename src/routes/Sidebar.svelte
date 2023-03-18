<script lang="ts">
	// Get active page
	import { page } from "$app/stores";

	let activePage = "";

	$: activePage = $page.url.pathname;
</script>

<div class="md:flex flex-col sticky top-20">
	{#each [{ name: "Home", link: "/" }, { name: "About", link: "/about" }, { name: "Tools", link: "/tools" }, { name: "Projects", link: "/projects" }, { name: "Experience", link: "/exp" }] as item}
		<a
			class="px-3 btn btn-sm py-1 btn-ghost lowercase text-left rounded justify-start"
			href={item.link}
			class:btn-active={activePage === item.link}
		>
			{item.name}
		</a>
	{/each}
</div>
