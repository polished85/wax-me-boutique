<style lang="scss">
	.hero {
		margin-bottom: 3rem;
	}
</style>

<script>
	import Hero from '$lib/hero/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	import OurTeam from '$lib/team/index.svelte';
	import Instagram from '$lib/instagram/index.svelte';
	
	export let data;	
</script>

<Hero data={data.hero}/>

<main class="main">
	<div class="intro">
		<div class="container">
			<h2>{data.intro.title}</h2>
			{#each data.intro.text as text, i}
				<p>{text}</p>
			{/each}
		</div>
	</div>


	<OurTeam data={data.team}></OurTeam>
	<!-- <About data={data.about}></About> -->
	<Instagram />
	<Reservation data="{data.reservation}"></Reservation>
</main>
