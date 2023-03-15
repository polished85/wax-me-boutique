<script>
	import Hero from '$lib/hero/index.svelte';
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
			path: "/img/hero.jpg"
		},
		cta: { 
			text: "Book an appointment",
			url: "https://www.vagaro.com/Users/BusinessWidget.aspx?BusinessID=48649&IsPopup=0&TabsIncluded=1|99|100&b_themeID=&w_type=2&widgetversion=3&isShowMobileApp=False&tabatlaunch=3"
		}
	}
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
	.services-list {
		margin-bottom: 6rem;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
		list-style: none;
		li {
			border-bottom: 1px solid $theme_main;
			a {
				display: block;
				padding: 1rem;
				color: $theme_main;
				font-size: 1.5rem;
				font-weight: 700;
				text-decoration: none;
				&:hover {
					background-color: $theme_lavender;
					color: #000;
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Services</title>
</svelte:head>

<Hero data={hero}/>

<main class="main">
	<section class="services-list">
		<div class="container">
			<h1>Services</h1>
			<ul>
				{#each links as link}
					{#if link.type === 'dropdown'}
						{#each link.links as service}
							<li><a rel='{service.external ? "external" : ""}' href='{service.url}'>{service.name}</a></li>
						{/each}
					{/if}
				{/each}
			</ul>
		</div>
	</section>
	<Reservation data="{data.global.reservation}" />
</main>
