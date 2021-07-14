<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	let data = [1,2,3,4,5,6,7,8]
	let active = 0
</script>

<div class="instagram">
	<div class="container">
		<h2>Instagram Feed</h2>
		<div class="row">
			{#each data as index, i}
				<div class="col-12 col-md-6 col-lg-4 col-xl-3">
					<div class="image">
						<img src="/img/ig-{index}.jpg" />
						<div class="hover-content">
							<p>Instagram Caption {index}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>