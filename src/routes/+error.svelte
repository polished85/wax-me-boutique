<script>
 	import { page } from '$app/stores';
 	import Hero from '$lib/hero/index.svelte';
 	import Services from '$lib/services/index.svelte';
 	import Reservation from '$lib/reservation/index.svelte';

 	export let data;
 	data.global.error.hero.title = $page.status + ': ' + $page.error.message
 	let servicesData = {
		title: data.global.error.title,
		links: data.global.nav.links
	}
</script>

<style lang="scss">
	@import '../style/variables.scss';
</style>

<svelte:head>
	<title>Error</title>
</svelte:head>

<Hero data={data.global.error.hero}/>
<main class="main">
	<Services data={servicesData} />
	<Reservation data="{data.global.reservation}" />
</main>
