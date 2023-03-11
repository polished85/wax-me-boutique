<style lang="scss" global>
	@import "./styles.scss";
</style>

<script>
	import Image from '$lib/image/index.svelte';
	
	export let data;
	let aboutImage = {
		ar: '16-9',
		fit: 'cover',
		width: 1920,
		height: 1080,
		path: data.image
	}
</script>

<div class="about">
	<Image data="{aboutImage}"></Image>
	<div class="container">
		<h2>{data.title}</h2>
		<div class="content">
			{#each data.text as text, i}
				<p>{text}</p>
			{/each}
		</div>
	</div>
</div>