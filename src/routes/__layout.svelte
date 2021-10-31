<script context="module">
	export const load = async ({ page, fetch, session, context }) => {
		
		// set active page
		var pageName 
		if(typeof page.params.slug !== 'undefined'){
			pageName = page.params.slug
		} else {
			if(page.path === '/'){
				pageName = 'home'
			} else {
				pageName = page.path.substring(1)
			}
		}

		const res = await fetch('/data/global.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: { data, pageName}
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


