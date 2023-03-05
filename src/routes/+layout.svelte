<script>
	import Nav from '$lib/nav/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	import '../style/index.scss';

	export let data;
</script>

<style lang="scss" global>

</style>

<Nav pageName={data.pageName} data="{data.global.nav}" />

<main class="main">
	<slot />
</main>

<Footer data={data.global.footer} />
