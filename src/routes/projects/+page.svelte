<script>
	import { ripple } from "svelte-ripple-action";

	const projects = [
		{
			name: "Tronic247",
			description: "Tech news, tutorials, and more.",
			roles: ["Creator"],
			link: "https://tronic247.com/",
			img: "https://user-images.githubusercontent.com/76736580/285272536-bccf8a94-ac17-43e7-8167-b0180349f0d9.png",
		},
		{
			name: "Svelte Ripple Action",
			description: "Ripple effect for Svelte.",
			roles: ["Creator"],
			link: "https://ripple.posandu.com/",
			img: "https://user-images.githubusercontent.com/76736580/285272693-4980a9c3-6d66-41d0-8bd9-7c48d99f642f.png",
		},
		{
			name: "Win11 Svelte",
			description: "Windows 11 recreation in Svelte.",
			roles: ["Team Member"],
			link: "https://win11-svelte.vercel.app/",
			img: "https://user-images.githubusercontent.com/76736580/285272771-2272758c-bac4-48e9-bbe0-dfbd68e23d3a.png",
		},

		{
			name: "Jobsite Sentry Website",
			description: "Website for Jobsite Sentry. Made with SvelteKit.",
			roles: ["Developer"],
			link: "https://jobsitesentry.com/",
			img: "https://github.com/Posandu/posandu.github.io/assets/76736580/60389cba-4ec1-4ae2-bffb-c35d90fbb1f7",
		},
		{
			name: "Tronic247 Material",
			description: "Modern CSS framework for building responsive websites.",
			roles: ["Creator"],
			link: "https://material.tronic247.com/",
			img: "https://user-images.githubusercontent.com/76736580/285273186-ce0157a5-28aa-4fb4-aa86-4482f4fe57c0.png"
		},
		{
			name: "Win11React",
			description: "Windows 11 recreation in React.",
			roles: ["Team Member"],
			link: "https://win11.blueedge.me/",
			img: "https://user-images.githubusercontent.com/76736580/285272960-348750b6-c12a-4d33-9b96-3d12b461a8c3.png"
		},
		{
			name: "TerminAI",
			description: "Generate terminal commands with AI.",
			roles: ["Creator"],
			link: "https://terminai.tronic247.com/",
			img: "https://user-images.githubusercontent.com/76736580/285274633-009e598e-78f4-45f3-bf12-56d9bd502d87.png"
		},
		{
			name: "StackFlex",
			description:
				"Modern copy-pasting alternative for developers. Won a Hackathon hosted by Hashnode. Discontinued.",
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

<div class="grid md:grid-cols-2 mt-28 gap-4 sm:grid-cols-2">
	{#each projects as project}
		<a
			class="col-span-1 block bg-zinc-900/40 p-6 rounded-lg hover:bg-base-900/50 group transition-all ripple-effect"
			href={project.link}
			use:ripple
		>
			{#if project.img}
				<img
					src={project.img}
					alt={project.name}
					class="w-full rounded-xl mb-4 group-hover:opacity-50 transition-all"
					loading="lazy"
				/>
			{/if}

			<h1 class="text-lg font-semibold">{project.name}</h1>
			<p class="my-2 text-sm">{project.description}</p>

			{#each project.roles as role}
				<span
					class="text-sm mt-4 inline-block rounded-lg border border-zinc-600/40 text-zinc-400 font-semibold px-2 py-1"
				>
					{role}
				</span>
			{/each}

			<br />
		</a>
	{/each}
</div>
