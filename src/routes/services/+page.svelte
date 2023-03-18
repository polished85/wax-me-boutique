<script>
	import Hero from '$lib/hero/index.svelte';
	import Services from '$lib/services/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';

	export let data;
	let links = data.global.nav.links 
	let hero = {
		title: "Services",
		overlay: 0.6,
		image: {
			ar: "16-9",
			fit: "cover",
			width: 1920,
			height: 1080,
			path: "/img/salon.jpg"
		},
		cta: { 
			text: "Book an appointment",
			url: "https://www.vagaro.com/Users/BusinessWidget.aspx?BusinessID=48649&IsPopup=0&TabsIncluded=1|99|100&b_themeID=&w_type=2&widgetversion=3&isShowMobileApp=False&tabatlaunch=3"
		}
	}
	let servicesData = {
		title: "Services",
		links: data.global.nav.links
	}
	let title = "Services"
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';

</style>

<svelte:head>
	<title>Services</title>
</svelte:head>

<Hero data={hero}/>

<main class="main">
	<Services data={servicesData} />
	<Reservation data="{data.global.reservation}" />
</main>
