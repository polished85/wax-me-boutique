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


<script>
	import Video from '$lib/video/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	import About from '$lib/about/index.svelte';
	import OurTeam from '$lib/team/index.svelte';
	//import Instagram from '$lib/instagram/index.svelte';
	
	export let data;
</script>

<Video></Video>
<Reservation data="{data.reservation}"></Reservation>
<OurTeam data={data.team}></OurTeam>
<About data={data.about}></About>
