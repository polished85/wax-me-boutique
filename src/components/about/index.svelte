<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	export let data;
</script>

<div class="about">
	<div class="container">
		<h2>{data.title}</h2>
		<div class="image">
			<div class="ar-16-9">
				<img src="{data.image}" />
			</div>
		</div>
		<div class="content">
			{#each data.text as text, i}
				<p>{text}</p>
			{/each}
		</div>
	</div>
</div>