<script>
    import { AppShell } from '@skeletonlabs/skeleton';
    import AlmanacPageSideBar from '../../lib/components/AlmanacPageSideBar.svelte';
    import AlmanacPageHeader from '../../lib/components/AlmanacPageHeader.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
        <AlmanacPageSideBar />
    </svelte:fragment>
	<svelte:fragment slot="pageHeader">
        <AlmanacPageHeader />
    </svelte:fragment>
	<slot />
</AppShell>
