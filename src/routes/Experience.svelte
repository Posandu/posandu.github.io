<script lang="ts">
	import Icon from "@iconify/svelte";

	const details = [
		{
			year: "2023 - NOV",
			icon: "fluent-mdl2:financial-solid",
			details: "Started freelancing and working in web3",
		},
		{
			year: "2023 - JUL",
			icon: "ic:round-work-off",
			details: "Left Realm Labs AI",
		},
		{
			year: "2023 - FEB",
			icon: "ic:round-work",
			details: "Employed as a Fullstack Engineer in Realm Labs AI",
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
			year: "2018",
			icon: "material-symbols:line-start-square-outline-rounded",
			details: "Started Programming with HTML and CSS",
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - My Experience</title>
</svelte:head>

{#each details as detail}
	<div class="flex items-center border rounded-xl p-4 border-base-300/60 bg-base-200 backdrop-blur-md mb-4">
		<Icon icon={detail.icon} class="text-2xl mr-1" />

		<div class="ml-4 text-sm">
			<span class="block mb-2 font-semibold"> {detail.year} </span>

			<p class="text-base-content/80">{@html detail.details}</p>
		</div>
	</div>
{/each}
