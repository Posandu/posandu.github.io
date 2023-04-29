<script lang="ts">
	import { onDestroy } from "svelte";

	const birthDate = new Date("2008-04-20");
	const today = new Date();

	function calculateAge(birthdate: Date) {
		const birthTime = new Date(birthdate).getTime();
		const nowTime = Date.now();
		const diffTime = nowTime - birthTime;
		const ageInMilliseconds = Math.abs(diffTime);
		const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
		const ageWithDecimals = parseFloat(ageInYears.toFixed(9));
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
	<title>
		Posandu Mapa - About Me
	</title>
</svelte:head>

<h1 class="text-2xl mb-4">About</h1>

<p>
	Hey! I'm Posandu Mapa, I'm from <i
		class="text-yellow-500">Sri Lanka</i
	>. I'm currently <span style="max-width: 102px;min-width: 102px;display: inline-block;">{age}</span> years old, I have already established myself as an
	accomplished programmer with a love for all things coding.
</p>

<p>
	My journey in the world of programming began when I was 11 years old,
	when I first delved into the intricate realms of HTML and CSS. However, what
	makes my story truly unique is the fact that I did not have access to an
	internet connection at the time - a true testament to the power of
	self-motivation and determination! I pushed myself to learn everything by
	myself, utilizing a variety of courses and resources to hone my skills and
	create some simple websites. The moment of joy I experienced when I saw my
	first website come to life is one that I will always cherish.
</p>

<p>
	In 2020, I created my own website - Tronic247 - where I began sharing my
	knowledge and expertise in programming through a variety of tutorials. From
	HTML and CSS to JavaScript, React, Node.js, MySQL, PHP, and much more, I have
	covered a wide range of topics and amassed a loyal following of over 100
	unique visitors per day. I am grateful to be able to share my passion with
	others and help them unlock the same joy and satisfaction that programming
	brings to me.
</p>

<p>
	As 2021 rolled around and the world was hit by the pandemic, I saw an
	opportunity to further expand my skills and knowledge in the field of
	programming. I took it upon myself to learn even more - diving deep into the
	realms of JavaScript, CSS, React, and Svelte. My hard work paid off, and I am
	now <a
		href="https://www.codingame.com/certification/UuE-yYkOPsUD3F6aCWZ5ZA"
		class="text-blue-500 hover:text-blue-700 underline"
		>certified as better than 99% of JavaScript developers in problem solving</a
	> - a testament to my dedication and perseverance.
</p>

<p>
	In addition to programming, I have a number of other hobbies that keep me busy
	and engaged. I enjoy playing badminton, reading books, and challenging myself
	with puzzles of all kinds. I also have a love for travel and exploration,
	always seeking out new places to discover and experience. And, of course, like
	any true Marvel fan, I am a huge fan of the Avengers and all their heroic
	exploits!
</p>

<style>
     p{
        margin-bottom: 10px;
        line-height: 25px
     }
</style>