<script>

	import '../app.postcss';

	import { AppShell, LightSwitch, initializeStores, storePopup, } from '@skeletonlabs/skeleton';
	// Floating UI for Popups

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	initializeStores();

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	import Footer from '../lib/components/Footer.svelte';
</script>
<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<div
			class="absolute flex justify-between w-full bg-opacity-75 bg-slate-500 trans dark:bg-slate-800 dark:bg-opacity-75 mb-36"  
		>
			<div class="p-5">
				<span><img src="/images/logo.jpg" alt="Logo" class="w-20 h-auto" /></span>
			</div>
			<div class="p-5 text-center">
				<div class="px-5 py-5">
					<LightSwitch class="rounded-lg" />
				</div>
			</div>
			<ul class="flex justify-end gap-5 p-5 text-xl link-face">
				<a href="/" class="px-5 py-5 transition-colors rounded-lg hover:scale-110">
					<li>Home</li>
				</a><a href="/plan" class="px-5 py-5 transition-colors rounded-lg hover:scale-110">
					<li>Plan a trip</li>
				</a><a href="/almanac" class="px-5 py-5 transition-colors rounded-lg hover:scale-110">
					<li>Dragon Almanac</li>
				</a>
			</ul>
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
