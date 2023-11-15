<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	export let year = new Date().getFullYear();
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import Header from '../lib/components/Header.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		<div class="text-5xl text-center">
			<h1 class="gradient-heading">Hello</h1>
			
		</div>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<footer class="py-4 text-white bg-gray-800">
			<div class="container px-4 mx-auto">
				<p class="text-center">&copy; {year} My Website</p>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
