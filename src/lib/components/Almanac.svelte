<script>
	import { dragonData } from '$lib/index.js';
	import NavigationButton from './NavigationButton.svelte';
	let currentImageIndex = 0;

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % dragonData.length;
	}

	function previousImage() {
		currentImageIndex = (currentImageIndex - 1 + dragonData.length) % dragonData.length;
	}
</script>

<section class="h-full px-10 pt-10">
	<div class="flex justify-between">
		<NavigationButton buttonDescription="Previous" click={previousImage} />
		<h2 class="text-5xl link-face gradient-heading">Dragon Almanac</h2>
		<NavigationButton buttonDescription="Next" click={nextImage} />
	</div>
	<div
		class="flex mt-10 bg-black rounded-md bg-opacity-30 dark:bg-white dark:bg-opacity-50"
		style="background-image: url({dragonData[currentImageIndex]
			.habitat}); background-position:right; background-size: fill;"
	>
		<img
			class="w-auto m-2 rounded-lg max-h-96"
			src={dragonData[currentImageIndex].src}
			alt={dragonData[currentImageIndex].name}
		/>
		<div class="w-full m-3 bg-white rounded-lg card-footer bg-opacity-30">
			<div class="card-header">
				<h3
					class="text-center text-5xl font-bold heading-face {dragonData[currentImageIndex]
						.gradient}"
				>
					{dragonData[currentImageIndex].name}
				</h3>
			</div>
			<p class="text-xl font-medium link-face mt-5 {dragonData[currentImageIndex].gradient}">
				{dragonData[currentImageIndex].description}
			</p>
			<p />
		</div>
	</div>
</section>

<style lang="postcss">
	.gradient-heading{
		@apply bg-gradient-to-r from-slate-400 via-zinc-300 to-gray-500 bg-clip-text text-transparent;
		animation: myAnim 4500ms cubic-bezier(0.11, 0, 0.5, 0) 1500ms infinite normal both;
	}
	@keyframes myAnim {
	0%,
	50%,
	100% {
		opacity: 1;
	}

	25%,
	75% {
		opacity: 0;
	}
}
</style>