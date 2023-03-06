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
					<li class="{link.type}" class:active='{pageName.toLowerCase() === link.name.toLowerCase()}' 
						on:click={() => { mobileActive = false }}>
						{#if link.type !== 'dropdown'}
							<a rel='{link.external ? "external" : ""}' href='{link.url}'>
								{#if link.type == 'logo'}
									<span>{link.name}</span>
									<img src="{data.logo.src}" alt="{data.logo.alt}" />
								{:else}
									{link.name}
								{/if}
							</a>
						{:else}
							<span>{link.name}</span>
							<div class="dropdown-menu">
								<ul>
									{#each link.links as childLink, j}
										<li>
											<a rel='{childLink.external ? "external" : ""}' href='{childLink.url}'>{childLink.name}</a>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="overlay-bg {mobileActive ? "is-active" : ""}" on:click={() => { mobileActive = false }}></div>
</div>