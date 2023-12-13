<script lang="ts">

	import '../app.postcss';
	import { Modal } from '@skeletonlabs/skeleton';
	import { AppShell, LightSwitch, initializeStores, storePopup, } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	initializeStores();

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	import Footer from '../lib/components/Footer.svelte';

	function redirectTo(url) {
		location.href = url;
	}
	
</script>
<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<div
			class="relative flex justify-between w-full bg-opacity-75 bg-slate-500 trans dark:bg-slate-800 dark:bg-opacity-75 "  
		>
			<div class="p-1 lg:p-5">
				<span><img src="/images/logo.jpg" alt="Logo" class="h-auto w-14" /></span>
			</div>
			<div class="p-5 text-center">
				<div class="px-5 py-5">
					<LightSwitch rounded="rounded-xl" bgLight="bg-surface-500" bgDark="bg-tertiary-500"/>
				</div>
			</div> 
			<div class="flex justify-end gap-5 text-base lg:p-5 lg:text-xl link-face">
				<button
					class="p-3 transition-colors rounded-lg hover:scale-110 bg-slate-600"
					on:click={() => redirectTo('/')}
				>
					Home
				</button>
				<button
					class="p-3 transition-colors rounded-lg hover:scale-110 bg-slate-600"
					on:click={() => redirectTo('/plan')}
				>
					Plan a trip
				</button>
				<button
					class="p-3 transition-colors rounded-lg hover:scale-110 bg-slate-600"
					on:click={() => redirectTo('/almanac')}
				>
					Dragon Almanac
				</button>
			</div>
		</div>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

<style>
	.trans::after {
		content: '';
		position: absolute;

		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
		transition: 0.5s;
	}

	.trans:hover::after {
		left: 100%;
	}
</style>
