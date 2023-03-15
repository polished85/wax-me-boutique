<style lang="scss">
	.hero {
		margin-bottom: 3rem;
	}
	.intro {
		margin-bottom: 6rem
	}
</style>

<script>
	import Image from '$lib/image/index.svelte';
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
	<Image data="{data.intro.image}"></Image>
	<Instagram />
	<Reservation data="{data.global.reservation}" />
</main>
