<script lang="ts">
	import { initializeApp } from "firebase/app";
	import { onMount } from "svelte";
	import { getDatabase, ref, onValue, set } from "firebase/database";
	import {
		GoogleAuthProvider,
		signInWithPopup,
		getAuth,
		onAuthStateChanged,
	} from "firebase/auth";

	const firebaseConfig = {
		apiKey: "AIzaSyB6H1a1HfQCkDeOC1kcEo4pKwKIjWNpGno",
		authDomain: "portfolio-2ae6c.firebaseapp.com",
		projectId: "portfolio-2ae6c",
		storageBucket: "portfolio-2ae6c.appspot.com",
		messagingSenderId: "585390300572",
		appId: "1:585390300572:web:24d367d3a6937a4c003c59",
	};

	initializeApp(firebaseConfig);

	let signs: {
		name: string;
		message: string;
		img: string;
		opened?: boolean;
	}[] = [];

	const database = getDatabase();
	const dbRef = ref(database, "guestbook");

	onValue(dbRef, (snapshot) => {
		const data = snapshot.val();

		signs = Object.keys(data).map((key) => {
			return {
				name: data[key].name || "Anonymous",
				message: data[key].message || "No message",
				img: data[key].img || "https://i.imgur.com/lVlPvCB.gif",
			};
		});
	});

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				name = user.displayName || "Anonymous";
				img = user.photoURL || "https://i.imgur.com/lVlPvCB.gif";
				signedIn = true;
			}
		});
	});

	let name = "";
	let message = "";
	let img = "";
	let signedIn = false;
	let sent = false;

	onMount(() => {
		if (localStorage.getItem("sent") == "true") {
			sent = true;
		}
	});

	$: if (sent) {
		localStorage.setItem("sent", "true");
	}
</script>

<svelte:head>
	<title>Posandu Mapa - Guestbook</title>
</svelte:head>

<h1 class="text-2xl mb-4">Guestbook</h1>

<p class="my-2">Leave a message for me!</p>

{#if !signedIn}
	<button
		class="btn btn-primary"
		on:click={() => {
			const provider = new GoogleAuthProvider();
			const auth = getAuth();
			signInWithPopup(auth, provider);
		}}
	>
		Sign in with Google
	</button>
{:else if !sent}
	<div class="p-4 card bg-gray-900 my-4 max-w-lg">
		<p>
			You're signed in as {name} 😎
		</p>

		<form
			on:submit|preventDefault={() => {
				const dbRef = ref(database, "guestbook");

				set(dbRef, {
					...signs,
					[Date.now()]: {
						name,
						message,
						img,
					},
				});

				sent = true;
			}}
		>
			<div class="form-control">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Message</span>
				</label>
				<textarea
					class="textarea h-24 textarea-bordered"
					placeholder="Leave a message"
					bind:value={message}
				/>
			</div>
			<div class="form-control mt-2">
				<button class="btn btn-primary">Submit</button>
			</div>
		</form>
	</div>
{/if}

{#if !signs.length}
	<div class="my-8 p-2">
		<span class="loading loading-spinner loading-lg" />
	</div>
{/if}

{#each signs as sign}
	<div class="chat mt-4 chat-start my-2">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img src={sign.img} alt="avatar" />
			</div>
		</div>

		<div class="chat-header">
			{sign.name} 
		</div>

		<div class="chat-bubble max-w-[60vw] overflow-auto">
			{#if sign.message.length > 200}
				{#if !sign.opened}
					<div>
						{sign.message.substring(0, 200)}...
					</div>

					<button
						class="btn btn-sm btn-primary"
						on:click={() => {
							sign.opened = true;
						}}
					>
						Show more
					</button>
				{:else}
					<div>
						{sign.message}
					</div>

					<button
						class="btn btn-sm btn-primary"
						on:click={() => {
							sign.opened = false;
						}}
					>
						Show less
					</button>
				{/if}
			{:else}
				{sign.message}
			{/if}
		</div>
	</div>
{/each}
