<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import LodgingButton from '$lib/components/LodgingButton.svelte';

	// const drawer1 : DrawerSettings = {
	// 	id: 'example-3',
	// // Provide your property overrides:
	// bgDrawer: 'bg-purple-900 text-white',
	// bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	// width: 'w-[180px] md:w-[480px]',
	// padding: 'p-4',
	// rounded: 'rounded-xl',
	// };
	// // drawerStore.open(drawer1);

	// function trigger(position: 'left' | 'top' | 'right' | 'bottom'): void {
	// 	const s: DrawerSettings = { id: 'demo', position };
	// 	drawerStore.open(s);
	// }
	// function triggerStyled(): void {
	// 	const drawerSettings: DrawerSettings = {
	// 		id: 'demo',
	// 		// Property Overrides
	// 		position: 'left',
	// 		bgDrawer: 'bg-purple-900 text-white',
	// 		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	// 		width: 'w-[180px] md:w-[380px]',
	// 		padding: 'p-4',
	// 		rounded: 'rounded-xl',
	// 		// Metadata
	// 		meta: 'Styled Drawer'
	// 	};
	// 	drawerStore.open(drawerSettings);
	// }

	export let data;
</script>
<section class="relative h-fill">
	<h1 class="mx-10 my-10 text-5xl text-center">
		We know that sometimes, a longer trip has been planned so we've constructed some lodgings for
		you to stay in!
	</h1>
	<div class="flex flex-wrap flex-1 gap-5 justify-evenly">
		{#each data.a_lodging as lodge}
			<!-- First -->
			<div class="w-[25rem] card rounded-md p-5 bg-black bg-opacity-20">
				<img
					src="/images/{lodge.image}.jpg"
					alt="First Lodging"
					class="w-[80%] h-auto m-2 mx-auto rounded-lg"
				/>
				<div class="m-5 mx-auto rounded-md variant-outline-warning">
					<header class="mx-auto text-2xl font-bold text-center card-header">
						{lodge.name}
					</header>
					<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
						{@html lodge.description}
					</section>
					<div class="flex justify-between m-5">
						<button type="button" class="btn variant-ghost-tertiary rounded-xl">Rent</button>
						<LodgingButton content="Availablities" />
					</div>

					<footer
						class="flex flex-wrap justify-between gap-2 p-5 rounded-lg card-footer variant-outline-warning"
					>
						{#each lodge.tags as tag}
							<span class="chip variant-glass-tertiary">{tag}</span>
						{/each}
					</footer>
				</div>
			</div>
		{/each}
	</div>
</section>
<div class="mt-32 text-sm text-center">
	Each of these are not hosted by us, but by the local businesses. We are not responsible for any
	damages you cause or any mishap that happens within these establishments
</div>
