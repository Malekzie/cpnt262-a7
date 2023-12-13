<script>
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import LodgingButton from '$lib/components/LodgingButton.svelte';
	export let data;

	
</script>

<section class="mt-[8rem] h-fill relative">
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
						<button type="btn" class="btn variant-ghost-tertiary rounded-xl">Rent</button>
						<LodgingButton content="Availablities" popups="{lodge.Available} rooms"/>
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
