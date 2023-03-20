<script>
	import Hero from '$lib/hero/index.svelte';
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
	h1 {
		
	}
	h2 {
		text-align: left;
		&:after {
			margin-left: 0;
		}
	}
	.heading {
		margin-bottom: 6rem;
	}
	.lead {
		font-size: 2rem;
	}
	.main {
		padding: 6rem 0;
	}
	.section {
		margin-bottom: 6rem;
	}

	@media(max-width: $screen-sm-down){

	}
	@media(min-width: $screen-md-up){

	}
</style>

<svelte:head>
	<title>{data.head.title}</title>
	<meta name="description" content="{data.head.description}">
	<meta name="keywords" content="{data.head.keywords}">
	<meta name="author" content="{data.head.author}">
</svelte:head>

{#if data.hero}
	<Hero data={data.hero}/>
{/if}

<main class="main">
	<div class="container">
		<div class="heading">
			{#if data.main.title}
				<h1>{data.main.title}</h1>
			{/if}
			{#if data.main.subTitle}
				<p class="h2 lead">{@html data.main.subTitle}</p>
			{/if}
		</div>
		{#each data.main.sections as section, i}
			<section class="section">
				{#if section.title}
					<h2 class="title">{section.title}</h2>
				{/if}
				{#if section.text}
					{#each section.text as text, i}
						<p class="text">{@html text}</p>
					{/each}
				{/if}
				{#if section.list}
					{#if section.list.type === 'ordered'}
						<ol>
						{#each section.list.items as listItem, i}
							<li>{listItem}</li>
						{/each}
						</ol>
					{:else}
						<ul>
						{#each section.list.items as listItem, i}
							<li>{listItem}</li>
						{/each}
						</ul>
					{/if}
				{/if}
			</section>
		{/each}
	</div>
</main>
<Reservation data="{data.global.reservation}" />
