<style lang="scss" global>
	@import "./styles.scss";
</style>

<script>
	export let data;
</script>

<div class="reservation">
	<div class="container">
		<h2>{data.title}</h2>
		{#each data.text as text, i}
			<p>{@html text}</p>
		{/each}
		<a href="{data.cta.url}" class="btn-primary light">{data.cta.text}</a>
<!-- 		<div class="vagaro"><script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqE3OqEIPqFJ5y79oz34mC2PeFJ4mC30m9cyUgJAvihaxCBeqjxSJEvwPapWUep2sERAJDXwPW?v=08OU7Bfe6yXBFSpphf9hKOyg29g1pLRYhCkxXu1p1jR#"></script></div> -->
	</div>
</div>