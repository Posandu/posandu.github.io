<script lang="ts">
	import Icon from "@iconify/svelte";

	const details = [
		{
			year: "2023 - NOV",
			icon: "fluent-mdl2:financial-solid",
			details: "Started working for new clients and got into AI and Crypto",
		},
		{
			year: "2023 - JUL",
			icon: "ic:round-work-off",
			details: "Left Realm Labs AI",
		},
		{
			year: "2023 - FEB",
			icon: "ic:round-work",
			details: "Employed as a fullstack Engineer in Realm Labs AI",
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

<div class="mt-36" />

{#each details as detail}
	<div class="flex items-center border rounded-xl p-4 border-base-300/60 bg-black/20 backdrop-blur-md mb-4">
		<Icon icon={detail.icon} class="text-2xl mr-1" />

		<div class="ml-4 text-sm">
			<span class="text-gray-400 block mb-2 font-semibold"> {detail.year} </span>

			<p>{@html detail.details}</p>
		</div>
	</div>
{/each}
