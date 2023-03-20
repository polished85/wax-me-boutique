<script>
	import Nav from '$lib/nav/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	import { page } from '$app/stores';
	import '../style/index.scss';

	export let data;
</script>

<Nav pageName={data.pageName} data="{data.global.nav}" pageConfig={$page.data.nav}/>
<slot />
<Footer data={data.global.footer} />
