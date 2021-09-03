<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/data/home.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: { data }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<style lang="scss">
	.hero {
		margin-bottom: 3rem;
	}
</style>

<script>
	import Image from '$lib/image/index.svelte';
	import Video from '$lib/video/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	import About from '$lib/about/index.svelte';
	import OurTeam from '$lib/team/index.svelte';
	//import Instagram from '$lib/instagram/index.svelte';
	
	export let data;
	let heroImage = {
		ar: '16-9',
		fit: 'cover',
		width: 1920,
		height: 1080,
		path: '/img/hero.jpg'
	}
	
</script>

<header class="hero">
	<Image data="{heroImage}"></Image>
</header>
<Video></Video>
<Reservation data="{data.reservation}"></Reservation>
<OurTeam data={data.team}></OurTeam>
<About data={data.about}></About>
