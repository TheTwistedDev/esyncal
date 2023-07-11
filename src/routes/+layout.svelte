<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
    // Your selected Skeleton theme:
    import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css'
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css'
    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss'
    import Icon from '@iconify/svelte'
    import calendarIcon from '@iconify/icons-flat-color-icons/calendar'    
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<svelte:head>
    <title> Esyncal </title>
    <meta name="description" content="Next-Gen Calendar app">
    <meta name="keywords" content="calendar, tasks, todo, app, scheduler, events, synchronization">
    <meta name="author" content="TheTwistedDev">
</svelte:head>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
    <svelte:fragment slot="pageHeader">
        <AppBar>
            <svelte:fragment slot="lead">
                <a href="/" class="flex">
                    <Icon icon={calendarIcon} width="52" height="52" class="ml-8"/>
                    <h1 class="h1 ml-4">Esyncal</h1>
                </a>
            </svelte:fragment>
            
            <svelte:fragment slot="trail">
                <LightSwitch />
                <button type="button" class="btn variant-soft-surface"> Log In </button>
                <button type="button" class="btn variant-filled-surface"> <a href="/auth/sign-up"> Create Account </a> </button>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot />
</AppShell>