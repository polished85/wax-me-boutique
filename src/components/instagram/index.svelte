<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	import { onMount } from 'svelte';

	function addEmbedSocialScript (d, s, id){
		var js; 
		if (d.getElementById(id)) {return;} 
		js = d.createElement(s); 
		js.id = id; 
		js.src = "https://embedsocial.com/cdn/ht.js"; 
		d.getElementsByTagName("head")[0].appendChild(js);
	}

	onMount(() => {
		addEmbedSocialScript(document, 'script', 'EmbedSocialHashtagScript')
	})
</script>

<div class="instagram">
	<div class="container">
		<h2>Instagram Feed</h2>
		<div class="embedsocial-hashtag" data-ref="be47900049f42ce9baa7ebb4a961df2c4523be0c"></div>
	</div>
</div>