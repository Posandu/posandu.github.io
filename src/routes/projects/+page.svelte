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
			roles: ["Contributor"],
			link: "https://win11.blueedge.me/",
		},
		{
			name: "Tronic247",
			description: "My personal website.",
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
			roles: ["Contributor"],
			link: "https://win11-svelte.vercel.app/",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - Projects I've worked on</title>
</svelte:head>

<h1 class="text-2xl mb-4">Projects</h1>

<div class="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
	{#each projects as project}
		<div
			class="col-span-1 bg-base-200 p-6 rounded hover:bg-base-300 transition-all"
		>
			<h1 class="text-xl">{project.name}</h1>
			<p class="my-2">{project.description}</p>

			{#each project.roles as role}
				<button class="btn btn-xs btn-outline"> {role} </button>
			{/each}

			<br />

			<a href={project.link} target="_blank" class="link mt-2 block text-sm"
				>{project.link}
			</a>
		</div>
	{/each}
</div>
