<script>
	import CtaButtons from './CTAButtons.svelte';
</script>

<section class="h-screen hero">
	<div class="flex flex-col justify-center pt-36">
		<h1
			class="bg-white text-8xl link-face bg-opacity-20 dark:bg-black dark:bg-opacity-20 w-[95%] text-center mx-auto rounded-lg"
		>
			Welcome to the Dragon Sanctuary
		</h1>
		<p
			class="bg-white text-3xl link-face bg-opacity-30 dark:bg-black rounded-lg dark:bg-opacity-30 w-[90%] text-center mx-auto mt-10"
		>
			These Wild and Eldritch beasts have been taken down as trophies and are encased in an
			enclosure riddled with runes to prevent them from damaging you or escape! Witness their
			Regality and Glory now!
		</p>
	</div>
	<div class="flex justify-around mt-16">
		<CtaButtons ctaDescription="Plan your visit" link="/plan" />
		<CtaButtons ctaDescription="Cool Facts" link="/almanac" />
	</div>
</section>

<style>
	.hero {
		background: url('/images/hero-dragon.jpg') no-repeat center center/cover;
		opacity: 0.6;
	}
</style>
