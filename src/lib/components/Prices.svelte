<script>
	import CtaButtons from './CTAButtons.svelte';
</script>

<section class="h-full my-10 mt-10">
	<h1 class="mb-6 text-3xl font-bold text-center">Pricing</h1>
	<div class="grid grid-cols-1 gap-6 mx-10 md:grid-cols-3">
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Basic</h2>
			<p class="mb-4 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius
				bibendum, sapien mauris commodo velit, vel lacinia velit velit non sapien.
			</p>
			<p class="mb-4 text-3xl font-bold text-gray-800">$9.99/month</p>
			<CtaButtons />
		</div>
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Pro</h2>
			<p class="mb-4 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius
				bibendum, sapien mauris commodo velit, vel lacinia velit velit non sapien.
			</p>
			<p class="mb-4 text-3xl font-bold text-gray-800">$19.99/month</p>
			<CtaButtons />
		</div>
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Premium</h2>
			<p class="mb-4 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius
				bibendum, sapien mauris commodo velit, vel lacinia velit velit non sapien.
			</p>
			<p class="mb-4 text-3xl font-bold text-gray-800">$29.99/month</p>
			<CtaButtons />
		</div>
	</div>
</section>
