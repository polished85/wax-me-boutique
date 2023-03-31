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
	{#if data.head.description}
		<meta name="description" content="{data.head.description}">
	{/if}
	{#if data.head.keywords}
		<meta name="keywords" content="{data.head.keywords}">
	{/if}
	{#if data.head.author}
		<meta name="author" content="{data.head.author}">
	{/if}
</svelte:head>

<Hero data={data.hero}/>

<main class="main">
	<Services data={servicesData} />
</main>
