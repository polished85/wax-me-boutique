<script>
	import Image from '$lib/image/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
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
	<Image data={data.hero.image}></Image>
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