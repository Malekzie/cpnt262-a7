<script>
  import { popup } from '@skeletonlabs/skeleton';
  export let content = "enter content here"
  export let popups = "enter popups here"
  const popupHover = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<button type="button" class="btn variant-ghost-tertiary rounded-xl" use:popup={popupHover}>
  <span>{content}</span>
</button>
<!-- Data on popup -->
<div class="card" data-popup="popupHover">
  {popups}
  <div class="arrow variant-filled-secondary"/>
</div>