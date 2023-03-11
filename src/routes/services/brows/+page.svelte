<script>
	import Image from '$lib/image/index.svelte';
	import Hero from '$lib/hero/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
	h1 {
		margin-bottom: 6rem;
	}
	.main {
		padding: 6rem 0;
	}
	.section {
		margin-bottom: 6rem;
	}

	

	@media(max-width: $screen-lg-down){

	}
	@media(min-width: $screen-xl-up){
		h2.title {
			text-align: right;
			&:after {
				margin-right: 0;
			}
		}
		.text {
			padding-left: 2rem;
		}
	}
</style>

<svelte:head>
	<title>{data.head.title}</title>
	<meta name="description" content="{data.head.description}">
	<meta name="keywords" content="{data.head.keywords}">
	<meta name="author" content="{data.head.author}">
</svelte:head>

<Hero data={data.hero}/>

<main class="main">
	<div class="container">
		<h1>{data.main.title}</h1>
		{#each data.main.sections as section, i}
			<div class="section">
				<div class="row">
					<div class="col-12 col-md-4">
						<h2 class="title">{section.title}</h2>
					</div>
					<div class="col-12 col-md-8">
						{#each section.text as text, i}
							<p class="text">{@html text}</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<Reservation></Reservation>