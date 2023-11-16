<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	export let year = new Date().getFullYear();
	import { LightSwitch } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="absolute flex justify-between w-full bg-opacity-75 bg-slate-500 trans dark:bg-slate-800 dark:bg-opacity-75">
			<div class="p-5">
				<span><img src="/images/logo.jpg" alt="Logo" class="w-20 h-auto"></span>
			</div>
			<div class="p-5 text-center">
				<div class="px-5 py-5">
					<LightSwitch class="rounded-lg"/>
				</div>
			</div>
			<ul class="flex justify-end gap-5 p-5 text-xl link-face">
				<a href="/" class="px-5 py-5 transition-colors rounded-lg hover:scale-110">
					<li>Home</li>
				</a><a href="/plan" class="px-5 py-5 transition-colors rounded-lg hover:scale-110 ">
					<li>Plan a trip</li>
				</a><a href="/almanac" class="px-5 py-5 transition-colors rounded-lg hover:scale-110 ">
					<li>Dragon Almanac</li>
				</a>
			</ul>
		</div>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<footer class="py-4 text-token bg-surface-600-900-token">
			<div class="container px-4 mx-auto">
				<div class="flex justify-between mt-5">
					<div>
						<h3>Contact Us</h3>
						<p>Email: info@mywebsite.com</p>
						<p>Phone: 555-555-5555</p>
					</div>
					<div>
						<h3>Location</h3>
						<p>123 Main St.</p>
						<p>Anytown, USA</p>
					</div>
					<div>
						<h3>Hours of Operation</h3>
						<p>Monday - Friday: 9am - 5pm</p>
						<p>Saturday: 10am - 4pm</p>
						<p>Sunday: Closed</p>
					</div>
				</div>
				<p class="text-center">&copy; {year} Dragon Sanctuary</p>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>


<style>
	.trans::after{
		content: '';
  position: absolute;

  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.4));
  transition: .5s;
	}

	.trans:hover::after{
		left: 100%;
	}
</style>