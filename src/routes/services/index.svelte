<script context="module">
	let data
	export async function load({ page, fetch, session, context }) {
		data = context.nav.links
		return true
	}
</script>

<script>
	import Reservation from '$lib/reservation/index.svelte';
</script>

<style lang="scss">
	@import '../../style/variables.scss';
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

<div class="container">
	<h1>Services</h1>
	<ul>
		{#each data as service}
			<li><a rel='{service.external ? "external" : ""}' href='{service.url}'>{service.name}</a></li>
		{/each}
	</ul>
</div>

<Reservation></Reservation>