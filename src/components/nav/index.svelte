<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	export let page;
	export let data;
	let mobileActive = false
	let mobileActiveDropdown = null
</script>

<div class="header {page}">
	<div class="container-xl">

		<div class="logo">
			<a href="{data.logo.url}" title="{data.logo.title}" style="background-image: url({data.logo.src})"></a>
		</div>

		<button 
			type="button"
			class="hamburger hamburger--slider {mobileActive ? "is-active" : ""}" 
			on:click={() => { mobileActive = !mobileActive }}>
		  <span class="hamburger-box">
		    <span class="hamburger-inner"></span>
		  </span>
		</button>

		<nav>
			<ul>
				{#each data.links as link, i}
					<li class:active='{page.toLowerCase() === link.name.toLowerCase()}'>
						<a rel='{link.external ? "external" : ""}' href='{link.url}'>{link.name}</a>
					</li>
				{/each}
				<!-- <li><a rel=prefetch class:active='{page === "services"}' href='services'>services</a></li> -->
			</ul>
		</nav>
	</div>
</div>