<style lang="scss" global>
	@import "./styles.scss"
</style>

<script>
	import { onMount } from 'svelte';
	import { XIcon, MenuIcon } from 'svelte-feather-icons';
	import Image from '$lib/image/index.svelte';

	export let data;
	export let pageName;
	export let pageConfig;
	let mobileActive = false
	let mobileActiveDropdown = null 
	let elNode 
	let sticky
	let navSticky = ''
	let mdBreakpoint = false

	onMount(async () => {
		sticky = elNode.offsetTop 
		mdBreakpoint = window.matchMedia('(min-width: 768px)') 
	});

	function toggleSticky() {
	  if (pageConfig.type === 'absolute' && mdBreakpoint.matches && window.pageYOffset > sticky) {
	    navSticky = 'sticky'
	  } else {
	    navSticky = ''
	  }
	} 
	
</script>

<svelte:window on:scroll={toggleSticky}/>

<div class="header {pageName} {pageConfig.type} {pageConfig.theme} {navSticky}" bind:this={elNode}>
	<div class="mobile-nav">
		<div class="mobile-logo" style="background-image: url({data.logo.src});"></div>
		<button 
			type="button"
			class="btn-toggle-nav {mobileActive ? "active" : ""}" 
			on:click={() => { mobileActive = !mobileActive }}>
			{#if mobileActive}
				<XIcon />
			{:else}
				<MenuIcon />
			{/if}
		</button>
	</div>
	<div class="container-xl">
		<nav class="{mobileActive ? "active" : ""}">
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
								<svg class="dropdown-arrow" height="16" width="24" style="fill:#111;">
									<polygon points="12,0 24,16 0,16" />
								</svg>
							</div>
						{/if}
					</li>
				{/each}
			</ul> 
		</nav>
	</div>
	<div class="overlay-bg {mobileActive ? "is-active" : ""}" on:click={() => { mobileActive = false }}></div>
</div>