<script>
	const projects = [
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
			name: "Tronic247",
			description: "Tech news, tutorials, and more.",
			roles: ["Creator"],
			link: "https://tronic247.com/",
		},
		{
			name: "TerminAI",
			description: "Generate terminal commands with AI.",
			roles: ["Creator"],
			link: "https://terminai.tronic247.com/",
		},
		{
			name: "StackFlex",
			description: "Modern copy-pasting alternative for developers.",
			roles: ["Creator"],
			link: "https://stackflex.tronic247.com/",
		},
		{
			name: "Gradienmood",
			description: "Generate beautiful gradients.",
			roles: ["Creator"],
			link: "https://gradienmood.posandu.me/",
		},
		{
			name: "Win11 Svelte",
			description: "Windows 11 recreation in Svelte.",
			roles: ["Team Member"],
			link: "https://win11-svelte.vercel.app/",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - Projects I've worked on</title>
</svelte:head>

<div class="grid md:grid-cols-2 gap-3 sm:grid-cols-2">
	{#each projects as project}
		<a
			class="col-span-1 block bg-base-200 p-6 rounded hover:bg-base-200/90 active:scale-95 transition-all"
			href={project.link}
		>
			<h1 class="text-lg">{project.name}</h1>
			<p class="my-2 text-sm">{project.description}</p>

			{#each project.roles as role}
				<span class="text-sm mt-2 rounded bg-base-300 px-2 py-1">
					{role}
				</span>
			{/each}

			<br />
		</a>
	{/each}
</div>
