<style lang="scss">
	@import "styles.scss";
</style>

<script>
	export let data;
</script>

<div class="image">
	<figure class="ar-{data.ar} fit-{data.fit}">
		<img width="{data.width}" height="{data.height}" src="{data.path}" />
	</figure>
</div>