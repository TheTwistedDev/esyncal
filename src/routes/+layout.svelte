<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
import { AppBar, AppShell } from '@skeletonlabs/skeleton';
import Icon from '@iconify/svelte';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';

</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10" >
	<svelte:fragment slot="header">  
    <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
        <svelte:fragment slot="lead">
            <a href="/">
                <Icon icon={calendarIcon} width="56" height="56" class='cursor-pointer'/>
            </a>   
        </svelte:fragment>
            <h1 class="font-bold text-2xl text-blue-600">Esyncal</h1>
        <svelte:fragment slot="trail">(actions)</svelte:fragment>
    </AppBar>
    </svelte:fragment>

	<slot />

</AppShell>
