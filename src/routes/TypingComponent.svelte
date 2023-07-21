<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	export let text = "";
	export let speed = Math.random() * 20;
	export let cursor = "|";
	export let cursorSpeed = 500;

	let textArray = [...text];
	let textLength = textArray.length;
	let textIndex = 0;
	let textInterval: NodeJS.Timeout;
	let cursorInterval: NodeJS.Timeout;

	onMount(() => {
		textInterval = setInterval(() => {
			if (textIndex < textLength) {
				textIndex++;
			} else {
				clearInterval(textInterval);
			}

            speed = Math.random() * 200;
		}, speed);

		cursorInterval = setInterval(() => {
			cursor = cursor === "|" ? "" : "|";
		}, cursorSpeed);
	});

	onDestroy(() => {
		clearInterval(textInterval);
		clearInterval(cursorInterval);
	});

	let textToShow = "";

	$: {
		textToShow = textArray.slice(0, textIndex).join("");
	}
</script>

{#if textToShow}
	{textToShow}
	<span
		class="text-transparent w-2 rounded-full inline-block bg-black"
		>{cursor}</span
	>
{/if}
