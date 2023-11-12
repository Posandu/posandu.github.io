<script>
	import { ripple } from "svelte-ripple-action";

	const projects = [
		{
			name: "Win11 Svelte",
			description: "Windows 11 recreation in Svelte.",
			roles: ["Team Member"],
			link: "https://win11-svelte.vercel.app/",
		},
		{
			name: "Svelte Ripple Action",
			description: "Ripple effect for Svelte.",
			roles: ["Creator"],
			link: "https://ripple.posandu.com/",
		},
		{
			name: "Tronic247",
			description: "Tech news, tutorials, and more.",
			roles: ["Creator"],
			link: "https://tronic247.com/",
		},
		{
			name: "Tronic247 Material",
			description: "Modern CSS framework for building responsive websites.",
			roles: ["Creator"],
			link: "https://material.tronic247.com/",
		},
		{
			name: "Win11React",
			description: "Windows 11 recreation in React.",
			roles: ["Team Member"],
			link: "https://win11.blueedge.me/",
		},
		{
			name: "TerminAI",
			description: "Generate terminal commands with AI.",
			roles: ["Creator"],
			link: "https://terminai.tronic247.com/",
		},
		{
			name: "StackFlex",
			description:
				"Modern copy-pasting alternative for developers. Discontinued.",
			roles: ["Creator"],
			link: "https://stackflex.tronic247.com/",
		},
		{
			name: "Gradienmood",
			description: "Generate beautiful gradients. Discontinued.",
			roles: ["Creator"],
			link: "https://gradienmood.posandu.me/",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - Projects I've worked on</title>
</svelte:head>

<div class="grid md:grid-cols-2 mt-8 gap-4 sm:grid-cols-2">
	{#each projects as project}
		<a
			class="col-span-1 block bg-base-300 p-6 rounded-xl hover:bg-base-300/90 active:scale-[0.98] transition-all ripple-effect"
			href={project.link}
			use:ripple
		>
			<h1 class="text-lg">{project.name}</h1>
			<p class="my-2 text-sm">{project.description}</p>

			{#each project.roles as role}
				<span
					class="text-sm mt-4 inline-block rounded bg-base-200/20 font-semibold px-2 py-1"
				>
					{role}
				</span>
			{/each}

			<br />
		</a>
	{/each}
</div>
