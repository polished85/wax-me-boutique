<script>

</script>

<style lang="scss">
	@import '../style/variables.scss';
	pre {
		white-space: pre-wrap;
		overflow-x: auto;
	}
	.error-banner {
		background-color: $theme_green;
		margin-bottom: 3rem;
	}
	@media (max-width: $screen-sm-down) {
		.error-banner {
			.error-content {
				text-align: center;
				padding: 0 1.5rem 1.5rem;
			}
		}
	}
	@media (min-width: $screen-md-up) {
		h1 {
			&:after {
				margin: 0;
			}
		}
		.error-banner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			img {
				order: 2;
				max-height: 400px;
			}
			.error-content {
				order: 1;
				padding: 15px;
				h1 {
					text-align: left;
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="container-xl">
	<div class="error-banner">
		<img src="/img/404.jpg" />
		<div class="error-content">
			<h1>404 OOPS!</h1>
			<p>The page you’re looking for not found</p>
			<a href="/" class="btn-primary light">Home</a>
		</div>
	</div>
<!-- 	{#if dev && error.stack}
		<div class="container">
			<h2>{status}</h2>
			<p>{error.message}</p>
			<pre>{error.stack}</pre>
		</div>	
	{/if} -->
	
</div>
