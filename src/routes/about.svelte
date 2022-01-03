<style lang="scss">
	.about-page {
		padding: 4.5rem;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>


<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ url, params, session, fetch, stuff }) => {
		const res = await fetch('/data/about.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: { data }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<section class="about-page">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-8 col-lg-9">
				<h1>{data.heading}</h1>
				<h4>{data.subheading}</h4>
			</div>
			<div class="col-12 col-md-4 col-lg-3">
				<img src="{data.image}" />
			</div>
		</div>
		{#each data.text as text, i}
			<p>{text}</p>
		{/each}
	</div>
	<Reservation></Reservation>
</section>