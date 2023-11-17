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
		<h2 class="text-5xl link-face">Dragon Almanac</h2>
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
