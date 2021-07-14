<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	export let data;
</script>

<div class="our-team">
	<div class="container">
		<h2>{data.title}</h2>
		<div class="row">
			{#each data.people as person, i}
				<div class="col-12 col-md-6 col-xl-4">
					<div class="content">
						<div class="image">
							<img src="{person.image}" />
						</div>
						<h3>{person.name}</h3>
						<p>{person.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>