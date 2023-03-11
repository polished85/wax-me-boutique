<!-- https://github.com/beyonk-adventures/svelte-carousel -->
<!-- https://vue-feather-icons.egoist.sh/ -->
<style lang="scss" global>
	@import "./styles.scss";

	button :global(.control) {

	}
	.control :global(svg) {

	}
</style>

<script>
	// import Carousel from '@beyonk/svelte-carousel'
	import { onMount } from 'svelte'
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

	onMount(function(){
		console.log('onMount')
		// const frameObserver = new IntersectionObserver(
		// 	highlightThumbnailOfDisplayedFrame,
		// 	{
		// 	    threshold: 0.5
		// 	}
		// );

		// function observeDisplayedFrame() {
		// 	const frames = document.querySelectorAll("[data-frame]");
		// 	for (const frame of frames) {
		// 	    frameObserver.observe(frame);
		// 	}
		// }

		// function highlightThumbnailOfDisplayedFrame(entries) {
		// 	for (const entry of entries) {
		// 	    const thumbnail = document.querySelector(
		// 	        '[href="#' + entry.target.id + '"]'
		// 	    );
		// 	    const isDiplayed =
		// 	        entry.isIntersecting && entry.intersectionRatio > 0.5;
		// 	    thumbnail.classList.toggle("displayed", isDiplayed);
		// 	}
		// }

	})

	export let slides;
	let active = 0

	function goToSlide(i) {
		console.log('go to slide ', i)
		active = i
		var slide = document.querySelector('.carousel figure[data-index="'+ i +'"]')
		console.log('slide: ', slide)
		slide.scrollIntoView()
	}
</script>


<div class="carousel">
	<button on:click={() => goToSlide(active !== 0 ? active - 1 : active)} class="control control-left">
		<ChevronLeftIcon />
	</button>
	<div class="wrapper">
		{#each slides as slide, i}
			<figure class="slide bg-{slide.color}" id="slide_{i}" data-index="{i}">
				<img src={slide.src}/>
				<div class="content">
					<figcaption>{slide.title} <br/><a href="#" class="btn-primary light">Book now</a></figcaption>
				</div>
			</figure>
		{/each}
	</div>
	<nav class="pagination">
		{#each slides as slide, i}
			<button class="paginate_btn {active === i ? 'active' : ''}" on:click={() => goToSlide(i)}></button>
		{/each}
	</nav>
	<button on:click={() => goToSlide((active !== slides.length - 1) ? active + 1 : active)} class="control control-right">
		<ChevronRightIcon />
	</button>
</div>
