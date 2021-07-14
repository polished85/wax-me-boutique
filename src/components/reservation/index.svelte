<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	export let data;
	let reservation = {
		title: "Reservation",
		text: [
			"Wax Me Boutique is La Jolla’s 5 star waxing and skincare boutique. We are conveniently located in the heart of La Jolla Village, inside Crosby Center. Our hair removal and skincare services are only available through licensed estheticians that have been trained and certified. At Wax Me Boutique, the health and beauty of your skin is of the utmost importance, we carefully select the highest quality all-natural wax and skincare products in the spa industry.",
			"Our unique hair removal technique for men and women is what sets us apart from the rest, including brow design, Facials, corrective peels and spray tanning. Everyone who visits the boutique will feel welcome and comfortable, in a clean and relaxing environment."
		],
		cta: { 
			text: "Book an appointment",
			url:"https://www.vagaro.com/Users/BusinessWidget.aspx?BusinessID=48649&IsPopup=0&TabsIncluded=1|99|100&b_themeID=&w_type=2&widgetversion=3&isShowMobileApp=False&tabatlaunch=3"
		}
	}
	if(typeof data !== 'undefined') {
		reservation = data
	}
</script>

<div class="reservation">
	<div class="container">
		<h2>{reservation.title}</h2>
		{#each reservation.text as text, i}
			<p>{text}</p>
		{/each}
		<a href="{reservation.cta.url}" class="btn-primary light">{reservation.cta.text}</a>
<!-- 		<div class="vagaro"><script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqE3OqEIPqFJ5y79oz34mC2PeFJ4mC30m9cyUgJAvihaxCBeqjxSJEvwPapWUep2sERAJDXwPW?v=08OU7Bfe6yXBFSpphf9hKOyg29g1pLRYhCkxXu1p1jR#"></script></div> -->
	</div>
</div>