<script>
	export let ctaDescription = 'Click me';
	export let link = './';
</script>

<div>
	<button
		type="button"
		class="transition ease-linear rounded-lg  btn btn-lg variant-glass-surface hover:scale-110 link-face"
		><a href={link}>{ctaDescription}</a></button
	>
</div>
