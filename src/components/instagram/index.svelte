<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	import instagram from 'user-instagram'
	
	let data = [1,2,3,4,5,6,7,8]
	let active = 0

	const username = 'polishedweb85' 
	const password = '6Wo&yGp2Grr!L@FE'

	;(async () => {
		await instagram.authenticate(username, password);
		// Fetching a user
		instagram.getUserData('wax-me-boutique').then(userData => {
			// Do whatever you need to to with this data
			console.log(`My username is ${userData.getUsername()}.`);
		})

		// Fetching a post
		// instagram.getPostData('CUc7tBPFXvP').then(postData => {
			// // Do whatever you need to to with this data
			// console.log(`The caption of this post is ${postData.getCaption()}.`);
		// })
	})()

</script>

<div class="instagram">
	<div class="container">
		<h2>Instagram Feed</h2>
		<div class="row">
			{#each data as index, i}
				<div class="col-12 col-md-6 col-lg-4 col-xl-3">
					<div class="image">
						<img src="/img/ig-{index}.jpg" />
						<div class="hover-content">
							<p>Instagram Caption {index}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>