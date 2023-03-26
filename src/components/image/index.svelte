<script>
	export let data;
</script>

<style lang="scss">
	@import "./styles.scss";
</style>

<div class="image">
	<figure class="ar-{data.ar} fit-{data.fit}">
		<img width="{data.width}" height="{data.height}" src="{data.path}" />
	</figure>
</div>