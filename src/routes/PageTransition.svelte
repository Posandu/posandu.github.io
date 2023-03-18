<script lang="ts">
	import { fly } from "svelte/transition";
	export let pathname: string = "";
</script>

{#key pathname}
	<div
		in:fly={{ x: 5, duration: 200, delay: 200 }}
		out:fly={{ x: -4, duration: 200 }}
	>
		<slot />
	</div>
{/key}
