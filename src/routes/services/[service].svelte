<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page, fetch, session, context }) => {
		const res = await fetch(`/data/services/${page.params.service}.json`);

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
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<style lang="scss">
	@import '../../style/variables.scss';
	h1 {
		margin-bottom: 6rem;
	}
	.hero {
		.row {
			align-items: center;
		}
		p {
			font-size: 25px;
		}
	}
	.main {
		padding: 6rem 0;
	}
	.section {
		margin-bottom: 6rem;;
	}
	.hero {

	}
	.ar-16-7 {
		width: 100%;
		padding-bottom: 43.75%;
		position: relative;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
	@media(max-width: $screen-md-down){

	}
	@media(min-width: $screen-lg-up){

	}
</style>

<svelte:head>
	<title>{data.head.title}</title>
	<meta name="description" content="{data.head.description}">
	<meta name="keywords" content="{data.head.keywords}">
	<meta name="author" content="{data.head.author}">
</svelte:head>

<header class="hero bg-{data.hero.color} theme-{data.hero.theme}">
	<div class="ar-16-7">
		<img src="{data.hero.image}" />
	</div>
</header>

<main class="main">
	<div class="container">
		<h1>{data.main.title}</h1>
		{#each data.main.sections as section, i}
			<div class="section">
				<h2>{section.title}</h2>
				{#each section.text as text, i}
					<p>{text}</p>
				{/each}
			</div>
		{/each}
	</div>
</main>
<Reservation></Reservation>