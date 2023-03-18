<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";

	let resp:
		| {
				spotify: {
					track_id: string;
					timestamps: {
						start: number;
						end: number;
					};
					song: string;
					artist: string;
					album_art_url: string;
					album: string;
				} | null;
		  }
		| undefined = undefined;

	const fetchAndUpdate = () => {
		fetch("https://api.lanyard.rest/v1/users/961161387101536296").then(
			(res) => {
				res.json().then((data) => {
					resp = data.data;
				});
			}
		);
	};

	fetchAndUpdate();

	let int = setInterval(fetchAndUpdate, 10000); //Update every 10 seconds

	onDestroy(() => {
		clearInterval(int);
	});
</script>

<div
	class={"bg-base-300 rounded absolute right-0 p-4 w-max select-none transition-all mt-4 shadow-md-dark " +
		(resp?.spotify?.song ? "md:flex hidden" : "hidden")}
>
	<div>
		<div class="mask mask-squircle w-16">
			<img src={resp?.spotify?.album_art_url} alt="Spotify" />
		</div>
	</div>

	<div class="flex-1 flex flex-col justify-center ml-4">
		<h2>
			{resp?.spotify?.song}
		</h2>
		<p class="text-xs my-2 text-gray-400">
			{resp?.spotify?.artist}
		</p>
		<p class="text-xs text-gray-400">
			{resp?.spotify?.album}
		</p>

		<p class="mt-2 text-sm">
			Listening on <Icon icon="logos:spotify-icon" class="inline" />
		</p>
	</div>
</div>
