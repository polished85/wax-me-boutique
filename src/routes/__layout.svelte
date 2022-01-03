<script context="module">
	export const load = async ({ url, params, session, fetch, stuff }) => {
		// set active page
		var pageName 
		if(typeof params.slug !== 'undefined'){
			pageName = params.slug
		} else {
			if(url.pathname === '/'){
				pageName = 'home'
			} else {
				pageName = url.pathname.substring(1)
			}
		}

		const res = await fetch('/data/global.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: { data, pageName},
				stuff:  {
					nav: data.nav
				}
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
	export let pageName;
	export let data;
</script>

<style lang="scss" global>
	@import "../style/index.scss";
</style>

<Nav pageName="{pageName}" data="{data.nav}" />

<main class="main">
	<slot />
</main>

<Footer data={data.footer}></Footer>


