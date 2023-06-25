<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";
	import { slide } from "svelte/transition";

	const quotes = [
		{
			text: "Posandu is an incredibly talented developer. I've had the pleasure of collaborating with him on several projects, and I'm always impressed by his knowledge and skillset. I have no doubt he'll continue to excel in his future endeavours.",
			name: "Yashash Pugalia",
			link: "https://github.com/yashash-pugalia",
			who: "Co worker",
		},
		{
			text: "Posandu is one of the best developers I have met, and he has very impressive and creative skills. I wish him all the best.",
			name: "Logo BlastSL",
			link: "https://www.linkedin.com/in/logo-blastsl/",
			who: "Graphic Designer",
		},
	];

	let activeQuote = 0;

	const interval = setInterval(() => {
		activeQuote = activeQuote === quotes.length - 1 ? 0 : activeQuote + 1;
	}, quotes[activeQuote].text.length * 50 + 1000);

	const birthDate = new Date("2008-04-20");

	function calculateAge(birthdate: Date) {
		const birthTime = new Date(birthdate).getTime();
		const nowTime = Date.now();
		const diffTime = nowTime - birthTime;
		const ageInMilliseconds = Math.abs(diffTime);
		const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
		const ageWithDecimals = parseFloat(ageInYears.toFixed(7));
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
</script>

<svelte:head>
	<title>Posandu Mapa - Student by day, developer by night.</title>
</svelte:head>

<div class="max-h-max m-auto overflow-hidden">
	{#each quotes as quote, i}
		{#if i == activeQuote}
			<div
				class="bg-base-200 rounded mb-4 p-4 hover:bg-base-300 transition-all"
			>
				<blockquote class="blockquote">
					<p class="mb-2 italic">"{quote.text}"</p>
					<a href={quote.link} target="_blank" class="text-sm"
						>{quote.name} - {quote.who}</a
					>
				</blockquote>
			</div>
		{/if}
	{/each}

	<div class="flex gap-2 text-center justify-center">
		{#each quotes as quote, i}
			<button
				class="btn btn-circle btn-xs btn-ghost"
				on:click={() => (activeQuote = i)}
			>
				{#if i == activeQuote}
					<Icon icon="akar-icons:circle-fill" class="text-2xl" />
				{:else}
					<Icon icon="akar-icons:circle" class="text-2xl" />
				{/if}
			</button>
		{/each}
	</div>
</div>

<h2 class="text-lg mb-2">👋 Hey!</h2>

<p>
	I'm Posandu Mapa from Sri Lanka. I'm currently <span
		style="width: 85px;display:inline-block"
	>
		{age}</span
	> years old. I enjoy coding, playing badminton, and reading books. 🧑‍💻
</p>

<p>
	My programming journey started at the age of 11 when I learned some HTML and
	CSS. What was fun is that I learned everything without internet access,
	relying on self-motivation and determination! The joy I felt when my first
	website came to life is unforgettable. 😃
</p>

<p>
	In 2020, I launched my own website, Tronic247, where I share programming
	knowledge through tutorials. I cover a wide range of topics, including HTML,
	CSS, JavaScript, React, Node.js, MySQL, and PHP. My website attracts over 100
	unique visitors daily, and I'm grateful to share my passion and help others
	discover the joy of programming. 🌐
</p>

<p>
	In 2021, during the pandemic, I saw an opportunity to expand my skills
	further. I delved deep into JavaScript, CSS, React, and Svelte. My hard work
	paid off, and I'm now certified as better than 99% of JavaScript developers in
	problem-solving. 💪
</p>

<p>
	Well, now it's 2023, and I'm a full-stack developer now 😄 (but also a student
	lol). I'm currently intrested in LLM stuff and mostly JavaScript. I made some
	IoT devices using NodeMCUs and Arduinos.
</p>

<p>
	Besides programming, I have other hobbies that keep me engaged. I love playing
	badminton, reading books, and solving puzzles. I'm also an avid traveler,
	always seeking new adventures. And, of course, as a true Marvel fan, I'm a
	huge fan of the Avengers and their heroic exploits! 🏸📚
</p>

{#if summarizeStep}
	<p transition:slide class="bg-base-300 p-4 text-sm rounded">
		{#if summarizeStep === 1}
			Posandu Mapa, a {age.toFixed()}-year-old from Sri Lanka, embarked on a
			coding journey at the age of 11, learning HTML and CSS without internet
			access. Through self-motivation and determination, they honed their skills
			and created websites. In 2020, they launched Tronic247, a website where
			they share programming tutorials. Their passion for programming led them
			to expand their skills in JavaScript, CSS, React, and Svelte. Now a
			full-stack developer, Posandu is also interested in LLM and enjoys
			creating IoT devices using NodeMCUs and Arduinos. Alongside programming,
			they enjoy playing badminton, reading books, solving puzzles, and being a
			Marvel fan.
		{:else if summarizeStep === 2}
			Posandu Mapa is a {age.toFixed()}-year-old self-taught coder from Sri
			Lanka. Starting at age 11 without internet access, they learned HTML and
			CSS and created websites. In 2020, they launched Tronic247 for programming
			tutorials. Their skills expanded to JavaScript, CSS, React, and Svelte,
			becoming a full-stack developer. They are also interested in LLM and enjoy
			creating IoT devices using NodeMCUs and Arduinos. Outside coding, they
			play badminton, read books, solve puzzles, and are a Marvel fan.
		{:else if summarizeStep === 3}
			Posandu Mapa is a {age.toFixed()}-year-old self-taught coder from Sri
			Lanka. They started learning HTML and CSS at age 11, created websites, and
			launched Tronic247 for programming tutorials in 2020. Their skills now
			include JavaScript, CSS, React, and Svelte, making them a full-stack
			developer. They are also interested in LLM and enjoy creating IoT devices
			with NodeMCUs and Arduinos. In their free time, they play badminton, read
			books, solve puzzles, and are a Marvel fan.
		{:else}
			I'm sorry to hear that you're having trouble reading. I can certainly help
			you. If you're looking to improve your English reading skills, I recommend
			visiting the website <a
				href="https://www.wikihow.com/Learn-English"
				class="text-blue-200 hover:underline"
				>https://www.wikihow.com/Learn-English</a
			>. It's a helpful resource that provides various articles and guides to
			assist you in learning how to read and improve your English proficiency.
			Give it a try, and feel free to reach out if you have any specific
			questions or need further assistance.
		{/if}
	</p>
{/if}

<div class="bg-base-200 justify-between px-4 py-3 items-center rounded flex">
	<span> Please summarize the above text </span>

	<button
		class="btn btn-circle btn-sm btn-ghost"
		on:click={() => summarizeStep++}
	>
		<Icon icon="ic:baseline-send" class="text-2xl" />
	</button>
</div>

<style>
	p {
		margin-bottom: 15px;
		line-height: 30px;
	}
</style>
