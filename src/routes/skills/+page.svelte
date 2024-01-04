<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>Posandu Mapa - Skills</title>
</svelte:head>

<div class="mt-32"></div>

<div class="grid grid-cols-6 gap-4">
	<div
		class="flex flex-col col-span-6 md:col-span-3 h-64 bg-gradient-to-tr from-[#007ACC]/20 to-black items-center justify-center rounded-xl border border-[#007ACC]/50 hover:border-[#007ACC]/80 text-[#007ACC] py-4 hover:shadow-2xl hover:shadow-[#007ACC]/10 transition-all"
	>
		<Icon icon="akar-icons:typescript-fill" class="text-6xl " />

		<p class=" text-lg font-semibold mt-4">TypeScript</p>
	</div>

	<div
		class="flex flex-col col-span-3 md:col-span-2 items-center justify-center rounded-xl border border-[#F7DF1E] text-[#F7DF1E] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="akar-icons:javascript-fill" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">JavaScript</p>
	</div>

	<div
		class="flex flex-col items-center md:col-span-1 col-span-3 justify-center rounded-xl border border-[#54A344] text-[#54A344] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="devicon-plain:nodejs" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">Node.js</p>
	</div>

	<div
		class="flex flex-col items-center justify-center rounded-xl border border-[#38BDF8] text-[#38BDF8] py-4 hover:opacity-95 transition-all md:col-span-2 col-span-3"
	>
		<Icon icon="simple-icons:tailwindcss" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">Tailwind CSS</p>
	</div>

	<div
		class="flex flex-col col-span-3 md:col-span-2 items-center h-48 justify-center rounded-xl border bg-gradient-to-bl from-[#F16529]/20  border-[#FF3E00] text-[#FF3E00] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="file-icons:svelte" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">Svelte</p>
	</div>

	<div
		class="flex flex-col md:col-span-1 col-span-2 items-center justify-center rounded-xl border border-[#F16529] text-[#F16529] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="akar-icons:html-fill" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">HTML</p>
	</div>

	<div
		class="flex flex-col md:col-span-1 col-span-2 items-center justify-center rounded-xl border border-[#0277BD] text-[#0277BD] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="akar-icons:css-fill" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">CSS</p>
	</div>

	<div
		class="flex flex-col md:col-span-1 col-span-2 items-center justify-center rounded-xl border border-[#02CEF4] text-[#02CEF4] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="uil:react" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">React</p>
	</div>

	<div
		class="flex flex-col items-center col-span-3 md:col-span-2 justify-center rounded-xl border border-[#CC6699] text-[#CC6699] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="vscode-icons:file-type-scss2" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">SCSS</p>
	</div>

	<div
		class="flex flex-col items-center md:col-span-1 col-span-3 justify-center rounded-xl border border-[#00618A] text-[#00618A] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="logos:mysql" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">MySQL</p>
	</div>

	<div
		class="flex flex-col items-center md:col-span-1 col-span-3 justify-center rounded-xl border border-[#336791] text-[#336791] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="logos:postgresql" class="text-6xl" />

		<p class="text-lg font-semibold mt-4">PostgreSQL</p>
	</div>

	<div
		class="flex flex-col items-center md:col-span-1 col-span-3 justify-center rounded-xl border border-[#E43717] text-[#E43717] py-4 hover:opacity-95 transition-all"
	>
		<Icon icon="logos:rust" class="text-6xl fill-current" />

		<p class="text-lg font-semibold mt-4">Rust</p>
	</div>
</div>
