<script>
	export let data;
	let active = 0
</script>

<style lang="scss" global>
	@import "./styles.scss";
</style>

<div class="specials">
	<div class="container">
		<h2>Specials</h2>
		<div class="row">
			<div class="col-12 col-xl-6">
				<ul class="list-unstyled specials-list">
					{#each data.categories as cat, i}
						<li class="{active === i ? 'active' : ''}">
							<div class="heading" on:click={() => { active = i }}>{cat.heading}</div>
							<div class="content">
								<ul class="inner-content">
									{#each cat.items as item, i}
										<li>
											<span class="text">{item.name}</span>
											<hr/>
											<span class="price">{item.amount}</span>
										</li>
									{/each}
								</ul>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="col-12 col-xl-6">
				<div class="image">
					<img src="{data.image}" />
				</div>
			</div>
		</div>
	</div>
</div>