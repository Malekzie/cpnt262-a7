<script>
	import CtaButtons from './CTAButtons.svelte';
</script>

<section class="my-10 mt-10">
	<h1 class="mb-6 text-3xl font-bold text-center">Pricing</h1>
	<div class="grid grid-cols-1 gap-6 mx-10 md:grid-cols-3">
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Basic</h2>
			<p class="mb-4 text-gray-600">This package includes:</p>
			<ul class="my-2 ml-5 text-gray-600 list-disc">
				<li>Free transportation to and from the sanctuary</li>
				<li>A 10% discount on your stay with our partnered lodgings.</li>
			</ul>
			<p class="mb-4 text-3xl font-bold text-gray-800">$9.99/month</p>
			<CtaButtons link="/tour/#" />
		</div>
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Pro</h2>
			<p class="mb-4 text-gray-600">This package includes the basic package as well:</p>
			<ul class="my-2 ml-5 text-gray-600 list-disc">
				<li>A free dragon essence from our very own dragons</li>
				<li>and up to 15% discount to our shops</li>
			</ul>
			<p class="mb-4 text-3xl font-bold text-gray-800">$19.99/month</p>
			<CtaButtons link="/tour/#" />
		</div>
		<div class="p-6 bg-white rounded-lg shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-black">Premium</h2>
			<div>
				<p class="mb-4 text-gray-600">This package includes the pro package as well as:</p>
				<p />
				<ul class="my-2 ml-5 text-gray-600 list-disc">
					<li>Express Seating to any show</li>
					<li>Free access to our dragon petting zoo</li>
					<li><em>A free Dragons Breath on your birthday</em></li>
				</ul>
			</div>
			<p class="mb-4 text-3xl font-bold text-gray-800">$29.99/month</p>
			<CtaButtons link="/tour/#" />
		</div>
	</div>
</section>
