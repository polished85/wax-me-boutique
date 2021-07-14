<style lang="scss" global>
	@import "styles.scss";

	button :global(.control) {

	}
	.control :global(svg) {

	}
</style>

<script>
	import { onMount } from 'svelte';
	import Siema from 'siema';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';

	onMount(() => {
		carousel = new Siema({
			onInit: setSlideIndex,
			onChange: setSlideIndex,
		})
	});

	function setSlideIndex() {
	  activeIndex = this.currentSlide
	}
	// carousel.currentSlide
	export let slides;
	let carousel = null
	let activeIndex = 0

</script>


<div class="carousel">
	<button type="button" class="nav-btn prev-btn" on:click={() => carousel.prev()}>
		<ChevronLeftIcon/>
	</button>
	<div class="siema">
		{#each slides as slide, i}
			<figure class="slide-content bg-{slide.color}">
				<img src={slide.src}/>
				<div class="content">
					<figcaption>{slide.title} <br/><a href="#" class="btn-primary light">Book now</a></figcaption>
				</div>
			</figure>
		{/each}
	</div>
	<button type="button" class="nav-btn next-btn" on:click={() => carousel.next()}>
		<ChevronRightIcon/>
	</button>

	<nav>
		{#each slides as slide, i}
			<button class={activeIndex === i ? 'active' : ''} type="button" on:click={() => carousel.goTo(i)}></button>
		{/each}
	</nav>
</div>
