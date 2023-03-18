<script lang="ts">
	import Icon from "@iconify/svelte";

	const details = [
		{
			year: "2023 - FEB",
			icon: "clarity:employee-solid",
			details: "Started working as a frontend Developer at Lorestate AI",
		},
		{
			year: "2022 - OCT",
			icon: "material-symbols:event-available-outline-rounded",
			details:
				"Participated in <a href='https://hacktoberfest.digitalocean.com/' target='_blank' class='text-blue-500'>Hacktoberfest</a>",
		},
		{
			year: "2022 - SEP",
			icon: "bxs:party",
			details:
				"Won a hackathon hosted by <a href='https://hashnode.com' target='_blank' class='text-blue-500'>Hashnode</a>",
		},
		{
			year: "2022 - JAN",
			icon: "ant-design:project-outlined",
			details: "First client project",
		},
		{
			year: "2021 - OCT",
			icon: "material-symbols:event-available-outline-rounded",
			details:
				"Participated in <a href='https://hacktoberfest.digitalocean.com/' target='_blank' class='text-blue-500'>Hacktoberfest</a>",
		},
		{
			year: "2021",
			icon: "ion:logo-javascript",
			details: "Learned JavaScript frameworks and Started Making Projects",
		},
		{
			year: "2020",
			icon: "ph:youtube-logo-fill",
			details: "Started Making Youtube Videos & Blogging",
		},
		{
			year: "2019",
			icon: "carbon:continue-filled",
			details: "Still Programming with HTML and CSS",
		},
		{
			year: "2018",
			icon: "material-symbols:line-start-square-outline-rounded",
			details: "Started Programming with HTML and CSS",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - My Experience</title>
</svelte:head>

<h1 class="text-2xl mb-4">Experience</h1>


{#each details as detail}
	<div class="flex items-center border rounded p-4 border-gray-800 mb-4">
		<button class="btn btn-circle">
			<Icon
				icon={detail.icon}
				class="text-2xl"
			/>
		</button>

		<div class="ml-4">
			<span class="text-gray-400 block"> {detail.year} </span>

			<p>{@html detail.details}</p>
		</div>
	</div>
{/each}
