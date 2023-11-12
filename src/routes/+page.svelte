<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";
	import { slide } from "svelte/transition";
	import TypingComponent from "./TypingComponent.svelte";
	import { text } from "svelte/internal";
	import { ripple } from "svelte-ripple-action";

	const quotes = [
		{
			text: "Posandu is an incredibly talented developer. I've had the pleasure of collaborating with him on several projects, and I'm always impressed by his knowledge and skillset. I have no doubt he'll continue to excel in his future endeavours.",
			name: "Yashash Pugalia",
			link: "https://github.com/yashash-pugalia",
		},
		{
			text: "Posandu is one of the best developers I have met, and he has very impressive and creative skills.",
			name: "Logo BlastSL",
			link: "https://www.linkedin.com/in/logo-blastsl/",
		},
	];

	let activeQuote = 0;

	const interval = setInterval(() => {
		activeQuote = activeQuote === quotes.length - 1 ? 0 : activeQuote + 1;
	}, quotes[activeQuote].text.length * 50 + 10000);

	const birthDate = new Date("2008-04-20");

	function calculateAge(birthdate: Date) {
		const birthTime = new Date(birthdate).getTime();
		const nowTime = Date.now();
		const diffTime = nowTime - birthTime;
		const ageInMilliseconds = Math.abs(diffTime);
		const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
		const ageWithDecimals = parseFloat(ageInYears.toFixed(2));
		return ageWithDecimals;
	}

	let age = calculateAge(birthDate);

	let ageInterval = setInterval(() => {
		age = calculateAge(birthDate);
	}, 10);

	onDestroy(() => {
		clearInterval(interval);
		clearInterval(ageInterval);
	});

	let summarizeStep = 0;
	let expanded = false;
</script>

<svelte:head>
	<title>Posandu Mapa - Student by day, developer by night.</title>
</svelte:head>

<div class="max-h-max m-auto my-4 overflow-hidden">
	{#each quotes as quote, i}
		{#if i == activeQuote}
			<div
				class="bg-base-200/80 rounded mb-2 p-4 hover:bg-base-200 transition-all"
			>
				<blockquote class="border border-base-300 rounded-xl px-4 py-2 text-sm">
					<p class="mb-2">
						&ldquo;{quote.text}&rdquo; &mdash;{" "}
						<a href={quote.link} target="_blank" class="text-sm opacity-80"
							>{quote.name}</a
						>
					</p>
				</blockquote>
			</div>
		{/if}
	{/each}

	<div class="flex gap-2 text-center justify-center">
		{#each quotes as quote, i}
			<button
				class="h-2 w-2 rounded-full transition-all {i == activeQuote
					? 'bg-white'
					: 'bg-white/30'}"
				on:click={() => (activeQuote = i)}
			/>
		{/each}
	</div>
</div>

<h2 class="text-2xl mb-2">Hey! 👋</h2>

<div class="text-sm">
	<p>
		I'm Posandu Mapa from Sri Lanka. I'm currently <span
			style="display:inline-block"
			class="rounded transition-all hover:text-white m-0"
		>
			{age}</span
		> years old. I enjoy coding, playing badminton, and reading books. 🧑‍💻
	</p>

	<p>
		My programming journey started at the age of 11 when I learned some HTML and
		CSS. What was fun is that I learned everything without internet access,
		relying on self-motivation and determination! The joy I felt when my first
		website came to life is unforgettable.
	</p>

	<p class="{!expanded ? 'opacity-50' : ''} ">
		In 2020, I launched my own website, Tronic247, where I share programming
		knowledge through tutorials. I cover a wide range of topics, including HTML,
		CSS, JavaScript, React, Node.js, MySQL, and PHP. My website attracts over
		100 unique visitors daily, and I'm grateful to share my passion and help
		others discover the joy of programming.
	</p>

	{#if expanded}
		<div transition:slide>
			<p>
				In 2021, during the pandemic, I saw an opportunity to expand my skills
				further. I delved deep into JavaScript, CSS, React, and Svelte. My hard
				work paid off, and I'm now certified as better than 99% of JavaScript
				developers in problem-solving.
			</p>

			<p>
				Well, now it's 2023, and I'm a full-stack developer now 😄 (but also a
				student). I'm currently intrested in LLM and AI stuff and mostly
				JavaScript. I made some IoT devices using NodeMCUs and Arduinos.
			</p>

			<p>
				Besides programming, I have other hobbies that keep me engaged. I love
				playing badminton, reading books, and solving puzzles.
			</p>
		</div>
	{:else}
		<div
			class="bg-gradient-to-b to-[#0e0e0e] from-[#0e0e0e81] relative z-30 rounded-lg w-full flex items-center -mt-20 justify-center h-20"
		>
			<button
				on:click={() => (expanded = true)}
				class="px-4 py-2 rounded-full bg-base-100/40 backdrop-blur-md hover:opacity-80 transition-all"
				use:ripple
			>
				Read more
			</button>
		</div>
	{/if}
</div>

{#if summarizeStep}
	<p class="bg-base-300 p-4 text-sm rounded">
		{#if summarizeStep === 1}
			<TypingComponent
				text="Posandu Mapa is a full-stack developer from Sri Lanka who started his programming journey at the age of 11 with HTML and CSS. He launched his own website, Tronic247, in 2020, where he teaches programming through tutorials. In 2021, he expanded his skills in JavaScript, CSS, React, and Svelte, ultimately becoming certified as being in the top 1% of JavaScript developers. As of 2023, while still a student, Posandu is interested in LLM, AI, and JavaScript, and has made some IoT devices using NodeMCUs and Arduinos. In addition to programming, he enjoys playing badminton, reading books, and solving puzzles."
			/>
		{:else if summarizeStep === 2}
			<TypingComponent
				text="Posandu Mapa, from Sri Lanka, is a full-stack developer who began coding at age 11. He runs Tronic247, a website offering programming tutorials, and expanded his skills in 2021, particularly in JavaScript. As of 2023, he's interested in LLM, AI, and IoT devices. His hobbies include badminton, reading, and puzzles."
			/>
		{:else if summarizeStep === 3}
			<TypingComponent
				text="Posandu Mapa is a full-stack developer from Sri Lanka who began coding at 11. He runs a programming tutorial website and is skilled in JavaScript. Besides programming, he enjoys badminton and puzzles."
			/>
		{:else if summarizeStep === 4}
			<TypingComponent
				text="Posandu Mapa is a Sri Lankan full-stack developer, proficient in JavaScript, who also runs a tutorial website and enjoys badminton."
			/>
		{:else}
			<div
				class="rounded border border-red-600 bg-red-900/40 text-red-200 px-4 py-2"
			>
				Sorry, something went wrong. Please try again later.
			</div>
		{/if}
	</p>
{/if}

<div class="bg-base-300 justify-between px-4 py-2 items-center rounded flex">
	<span class="text-sm"> Please summarize the above text </span>

	<button
		class="btn btn-circle btn-sm btn-ghost ripple-effect"
		on:click={() => (summarizeStep > 4 ? (summarizeStep = 0) : summarizeStep++)}
		use:ripple={{
			center: true,
		}}
	>
		<Icon icon="ic:baseline-send" class="text-xl" />
	</button>
</div>

<style>
	p {
		margin-bottom: 15px;
		line-height: 30px;
	}
</style>
