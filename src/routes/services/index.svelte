<script context="module">

</script>

<script>
	import Reservation from '$lib/reservation/index.svelte';
	export let posts;
</script>

<style lang="scss">
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Services</title>
</svelte:head>

<div class="container">
	<h1>Services</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='services/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>
</div>

<Reservation></Reservation>