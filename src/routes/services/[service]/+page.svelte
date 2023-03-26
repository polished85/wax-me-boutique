<script>
	import Hero from '$lib/hero/index.svelte';
	export let data;
</script>

<style lang="scss">
	@import '$lib/../style/variables.scss';
	h1 {
		margin-bottom: 6rem;
	}
	.main {
		padding: 0 0 6rem;
	}
	.section {
		margin-bottom: 6rem;
	}
	.section-featured {
		background-color: #f4f4f3;
		padding: 6rem 0;
		margin: -6rem 0 6rem;
		ol {
			margin: 0;
			padding: 0;
			list-style-type: none;
			> li {

			}
		}
	}

	@media(max-width: $screen-sm-down){

	}
	@media(min-width: $screen-md-up){
		h2.title {
			text-align: right;
			&:after {
				margin-right: 0;
			}
		}
		.text {
			padding-left: 2rem;
		}
		.section-featured {
			.title {
				text-align: left;
				&:after {
					margin-left: 0;
				}
			}
			.lead {
				font-size: 2rem;
			}
			ol {
				padding-left: 2rem;
				> li {
				text-align: left;
					h3 {
						text-align: left;
						&::after {
							margin-left: 0;
						}
					}
				}
			}
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
	{#if data.featured}
		<section class="section-featured">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-5">
						<h2 class="h1 title">{data.featured.title}</h2>
						<p class="lead">{data.featured.lead}</p>
					</div>
					<div class="col-12 col-md-7">
						<ol>
							{#each data.featured.items as item, i}
								<li>
									<h3 class="h2">{item.title}</h3>
									<p>{item.text}</p>
								</li>
							{/each}
						</ol>
					</div>
			</div>
		</section>
	{/if}

	{#if data.main.title}
		<div class="container">
			<h1>{data.main.title}</h1>
		</div>
	{/if}
	
	{#each data.main.sections as section, i}
		<div class="section">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-4">
						<h2 class="title">{section.title}</h2>
					</div>
					<div class="col-12 col-md-8">
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
					</div>
				</div>
			</div>
		</div>
	{/each}
</main>
