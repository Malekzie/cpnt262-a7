<script>
    import { AppShell } from '@skeletonlabs/skeleton';
    import AlmanacPageSideBar from '../../lib/components/AlmanacPageSideBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
        <AlmanacPageSideBar />
    </svelte:fragment>
	<svelte:fragment slot="pageHeader">
    </svelte:fragment>
	<slot />
</AppShell>
