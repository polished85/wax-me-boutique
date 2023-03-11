<style lang="scss" global>
	@import "./styles.scss";
</style>

<script>
	export let data;
</script>

<header class="hero overlay">
	{#if data.image}
		<div class="hero-image ar-{data.image.ar}" style="background-image: url({data.image.path})"></div>
	{/if}
	{#if data.overlay}
		<div class="overlay" style="opacity: {data.overlay};"></div>
	{/if}
	<div class="content">
		<div class="container">
			{#if data.title}
				<div class="title">{data.title}</div>
			{/if}
			{#if data.cta}
				<a href="{data.cta.url}" class="btn-primary dark">{data.cta.text}</a>
			{/if}
		</div>
	</div>
</header>

