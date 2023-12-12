<script>
	export let buttonDescription = 'click me';
	export let click = 'Add Function Here';
</script>

<button
	on:click={click}
	type="button"
	class="text-base lg:text-xl btn variant-glass-surface rounded-xl hover:scale-110">{buttonDescription}</button
>
