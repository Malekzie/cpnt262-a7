<script>

	import CtaButtons from '../../lib/components/CTAButtons.svelte';

</script>

<section class="h-screen pl-5 pt-36 back">
	<div class="mx-auto bg-white bg-opacity-25 cursor-default dark:bg-black dark:bg-opacity-30">
		<h1 class="ml-5 text-5xl heading-face dark:shadow-light shadow-dark">Plan your Visit</h1>
		<p class="m-5 mt-5 text-xl link-face">
			The Dragon Sanctuary is open 24/7, 365 days a year. Our Magic Circles are specifically curated
			to be able to recieve transportation wherever you are located. We have lodgings for those who
			chose to remain for more than a days visit.
		</p>
	</div>
	<div>
		<div class="flex justify-around mt-16">
			<!-- Modals will be used for this one -->
			<CtaButtons ctaDescription="Book a tour" link="/tour" />
			<!-- Use a drawer for this one -->
			<CtaButtons ctaDescription="Lodgings" link="/lodging" />
		</div>
	</div>
</section>

<style>
	.back {
		background: url('/images/plan-trip-first.jpg') center bottom/cover no-repeat;
		opacity: 0.7;
	}
</style>
