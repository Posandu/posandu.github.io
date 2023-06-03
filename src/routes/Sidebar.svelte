<script lang="ts">
	// Get active page
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";

	let activePage = "";

	$: activePage = $page.url.pathname.replace("/", "");
</script>

<div class="flex-col flex sticky top-1 z-50">
	<ul class="menu mx-auto menu-horizontal md:menu-vertical rounded-box">
		<li class="{activePage === '' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="Home" href="/">
				<Icon icon="bx:bx-home" class="h-5 w-5" />
			</a>
		</li>
		<li class="{activePage === 'about' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="About" href="/about">
				<Icon icon="bx:bx-user" class="h-5 w-5" />
			</a>
		</li>
		<li class="{activePage === 'tools' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="Tools" href="/tools">
				<Icon icon="bx:bx-wrench" class="h-5 w-5" />
			</a>
		</li>
		<li class="{activePage === 'projects' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="Projects" href="/projects">
				<Icon icon="bx:bx-code-alt" class="h-5 w-5" />
			</a>
		</li>
		<li class="{activePage === 'exp' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="Experience" href="/exp">
				<Icon icon="bx:bx-briefcase-alt-2" class="h-5 w-5" />
			</a>
		</li>
		<li class="{activePage === 'guestbook' ? 'bg-primary/20 rounded' : ''}">
			<a class="tooltip tooltip-right" data-tip="Guestbook" href="/guestbook">
				<Icon icon="bx:bx-message-square-detail" class="h-5 w-5" />
			</a>
		</li>
	</ul>
</div>
