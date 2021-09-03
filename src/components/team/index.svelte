<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	import Image from '$lib/image/index.svelte';
	
	export let data;
	let aboutImage = {
		ar: '16-9',
		fit: 'cover',
		width: 1920,
		height: 1080,
		path: '/img/laser-therapy.jpg'
	}
</script>

<div class="our-team">

	<Image data="{aboutImage}"></Image>
	
	<div class="container">
		<h2>{data.title}</h2>
		<div class="row">
			{#each data.people as person, i}
				<div class="col-12 col-md-6 col-xl-4">
					<div class="content">
<!-- 						<div class="image">
							<img src="{person.image}" />
						</div> -->
						<h3>{person.name}</h3>
						<p>{person.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>