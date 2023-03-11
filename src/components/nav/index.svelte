<style lang="scss" global>
	@import "./styles.scss"
</style>

<script>
	import { onMount } from 'svelte';
	import { XIcon, MenuIcon } from 'svelte-feather-icons';
	import Image from '$lib/image/index.svelte';

	export let data;
	export let pageName;
	let mobileActive = false
	let mobileActiveDropdown = null 
	let elNode 
	let sticky
	let navClass = ''
	let mdBreakpoint = false

	onMount(async () => {
		sticky = elNode.offsetTop 
		mdBreakpoint = window.matchMedia('(min-width: 768px)') 
	});

	function toggleSticky() {
	  if (mdBreakpoint.matches && window.pageYOffset > sticky) {
	    navClass = 'sticky'
	  } else {
	    navClass = ''
	  }
	} 

</script>

<svelte:window on:scroll={toggleSticky}/>

<div class="header {pageName} {navClass}" bind:this={elNode}>
	<div class="container-xl">

		<div class="mobile-logo" style="background-image: url({data.logo.src});"></div>
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