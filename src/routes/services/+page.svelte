<script>
	import Hero from '$lib/hero/index.svelte';
	import Services from '$lib/services/index.svelte';

	export let data;
	let servicesData = {
		title: "Services",
		links: data.global.nav.links
	}
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
</style>

<svelte:head>
	<title>Services</title>
</svelte:head>

<Hero data={data.hero}/>

<main class="main">
	<Services data={servicesData} />
</main>
