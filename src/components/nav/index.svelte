<style lang="scss" global>
	@import "./styles.scss"
</style>

<script>
	import { XIcon, MenuIcon } from 'svelte-feather-icons';
	export let data;
	export let pageName;
	let mobileActive = false
	let mobileActiveDropdown = null 
</script>

<div class="header {pageName}">
	<div class="container-xl">

		<div class="logo">
			<a href="{data.logo.url}" title="{data.logo.title}" style="background-image: url({data.logo.src})"></a>
		</div>

		<button 
			type="button"
			class="btn-toggle-nav {mobileActive ? "is-active" : ""}" 
			on:click={() => { mobileActive = !mobileActive }}>
			{#if mobileActive}
				<XIcon />
			{:else}
				<MenuIcon />
			{/if}
		</button>

		<nav>
			<ul>
				{#each data.links as link, i}
					<li class:active='{pageName.toLowerCase() === link.name.toLowerCase()}' 
						on:click={() => { mobileActive = false }}>
						<a rel='{link.external ? "external" : ""}' href='{link.url}'>{link.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="overlay-bg {mobileActive ? "is-active" : ""}" on:click={() => { mobileActive = false }}></div>
</div>