<script>
	import Reservation from '$lib/reservation/index.svelte';
	export let data;
</script>

<style lang="scss">
	.contact-page {
		padding: 4.5rem 0 9rem;
	}
	.map {
		position: relative;
		width: 100%;
		padding-bottom: 75%;
		border: 1px solid #aaa;
		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
			padding: 10px;
		}
	}
	.contact-items {
		> li {
			display: flex;
			padding: 0 0 3rem;
			img {
				display: inline-block;
				width: 24px;
				height: 24px;
			}
			a,span {
				color: #444;
				font-weight: 600;
				font-size: 16px;
				padding-left: 3rem;
			}
			a {
				color: #84C340;
				&:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<main class="contact-page">
	<div class="container">
		<h1>{data.title}</h1>
		<div class="row">
			<div class="col-12 col-lg-8">
				<div class="map">
					<iframe src="{data.map.url}" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				</div>
			</div>
			<div class="col-12 col-lg-4">
				<ul class="contact-items">
					{#each data.info as item, i}
						<li>
							<img src="{item.icon}" />
							{#if item.url}
								<a href="{item.url}">{item.text}</a>
							{:else}
								<span>{item.text}</span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>
<Reservation data="{data.global.reservation}" />
