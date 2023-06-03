<script lang="ts">
	import { onDestroy } from "svelte";

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

	let interval = setInterval(() => {
		age = calculateAge(birthDate);
	}, 10);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Posandu Mapa - About Me</title>
</svelte:head>

<h1 class="text-2xl mb-4">About</h1>

<p>
	👋 Hey! I'm Posandu Mapa from Sri Lanka. I'm currently <span
		style="width: 85px;display:inline-block"
	>
		{age}</span
	> years old. I enjoy coding, playing badminton, and reading books. 🧑‍💻
</p>

<p>
	My programming journey started at the age of 11 when I dived into the
	fascinating world of HTML and CSS. What makes my story unique is that I
	learned everything without internet access, relying on self-motivation and
	determination! I used various courses and resources to develop my skills and
	create simple websites. The joy I felt when my first website came to life is
	unforgettable. 😃
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
	Well, now it's 2023, and I'm a full-stack developer now 😄 (but also a student lol). I'm currently intrested in LLM stuff and mostly JavaScript. I made some IoT devices using NodeMCUs and Arduinos.
</p>

<p>
	Besides programming, I have other hobbies that keep me engaged. I love playing
	badminton, reading books, and solving puzzles. I'm also an avid traveler,
	always seeking new adventures. And, of course, as a true Marvel fan, I'm a
	huge fan of the Avengers and their heroic exploits! 🏸📚🧩✈️🦸‍♀️🦸‍♂️
</p>

<style>
	p {
		margin-bottom: 15px;
		line-height: 30px;
	}

	p:hover {
		opacity: 0.8;
	}
</style>
