<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	import CtaButtons from '../../lib/components/CTAButtons.svelte';

	function openModal() {
		const modal = {
            type: 'prompt',
			title: 'Book a tour',
			body: 'Please fill out the form below to book a tour of the Dragon Sanctuary.',
            label: 'Book a tour',
			// Returns the updated response value.
			response: (response) => {
				console.log(response);
			}
            
        };
		modalStore.trigger(modal);
	}

	// Form Data
	const formData = {
		name: 'Jane Doe',
		tel: '214-555-1234',
		email: 'jdoe@email.com'
	};
	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit() {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
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
			<button
				on:click={openModal}
				type="button"
				class="px-5 py-4 transition-colors btn variant-glass-surface rounded-lg hover:scale-110"
				>Book A Tour</button
			>
			{#if $modalStore[0]}
				<div class="modal-example-form {cBase}">
					<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
					<article>{$modalStore[0].body ?? '(body missing)'}</article>
					<!-- Enable for debugging: -->
					<form class="modal-form {cForm}">
						<label class="label">
							<span>Name</span>
							<input
								class="input"
								type="text"
								bind:value={formData.name}
								placeholder="Enter name..."
							/>
						</label>
						<label class="label">
							<span>Phone Number</span>
							<input
								class="input"
								type="tel"
								bind:value={formData.tel}
								placeholder="Enter phone..."
							/>
						</label>
						<label class="label">
							<span>Email</span>
							<input
								class="input"
								type="email"
								bind:value={formData.email}
								placeholder="Enter email address..."
							/>
						</label>
					</form>
					<!-- prettier-ignore -->
					<footer class="modal-footer {parent.regionFooter}">
                        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
                        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
                    </footer>
				</div>
			{/if}
			<!-- Use a drawer for this one -->
			<CtaButtons ctaDescription="Lodgings" link="/lodgings" />
		</div>
	</div>
</section>

<style>
	.back {
		background: url('/images/plan-trip-first.jpg') center bottom/cover no-repeat;
	}
</style>
