<script>
	export let ctaDescription = 'Click me';
	export let link = 'place link';
</script>

<div>
	<button
		type="button"
		class="transition ease-linear rounded-lg btn btn-lg bg-opacity-80 bg-white dark:bg-opacity-80 dark:bg-black hover:scale-110 link-face"
		><a href={link}>{ctaDescription}</a></button
	>
</div>
