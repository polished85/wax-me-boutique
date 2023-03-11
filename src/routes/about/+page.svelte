<style lang="scss">
	.about-page {
		padding: 4.5rem;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<main class="about-page">
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
</main>