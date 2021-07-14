<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page, fetch, session, context }) => {
		var page
		// set active page
		if(typeof page.params.slug !== 'undefined'){
			page = page.params.slug
		} else {
			if(page.path === '/'){
				page = 'home'
			} else {
				page = page.path.substring(1)
			}
		}

		const res = await fetch('/data/global.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: { data, page }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	import Nav from '$lib/nav/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	export let page;
	export let data;
</script>

<style lang="scss" global>
	@import "../style/index.scss";
</style>

<Nav page="{page}" data="{data.nav}" />

<main>
	<slot />
</main>

<Footer data={data.footer}></Footer>


