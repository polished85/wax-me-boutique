<script>
	import Image from '$lib/image/index.svelte';
	
	export let data;
	let aboutImage = false
	// let aboutImage = {
	// 	ar: '16-9',
	// 	fit: 'cover',
	// 	width: 1920,
	// 	height: 1080,
	// 	path: '/img/laser-therapy.jpg'
	// }
</script>

<style lang="scss" global>
	@import "./styles.scss";
</style>

<div class="our-team">

	{#if aboutImage}
		<Image data="{aboutImage}"></Image>
	{/if}
	
	<div class="container">
		<h2>{data.title}</h2>
		<div class="row">
			{#each data.people as person, i}
				<div class="col-12 col-md-6 col-xl-4">
					<div class="image">
						<figure class="ar-3-4">
							<img src="{person.image}" />
						</figure>
					</div>
				</div>
				<div class="col-12 col-xl-8">
					<div class="content">
						<h3>{person.name}</h3>
						{#each person.text as personText, j}
							<p>{personText}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>