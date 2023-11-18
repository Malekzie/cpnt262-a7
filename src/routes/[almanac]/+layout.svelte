<script>
    import { AppShell } from '@skeletonlabs/skeleton';
    import AlmanacPage from '../../lib/components/AlmanacPage.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
        <AlmanacPage />
    </svelte:fragment>
	<svelte:fragment slot="pageHeader">
    </svelte:fragment>
	<slot />
</AppShell>
