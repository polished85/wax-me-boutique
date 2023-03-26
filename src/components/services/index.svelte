<script>
	export let data;
</script>

<style lang="scss" global>
	@import "./styles.scss";
</style>

<section class="services-list">
	<div class="container">
		<h1>{data.title}</h1>
		<ul>
			{#each data.links as link}
				{#if link.type === 'dropdown'}
					{#each link.links as service}
						<li><a rel='{service.external ? "external" : ""}' href='{service.url}'>{service.name}</a></li>
					{/each}
				{/if}
			{/each}
		</ul>	
	</div>
</section>

