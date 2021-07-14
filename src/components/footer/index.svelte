<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	export let data;
</script>

<footer class="footer">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-6 col-lg-3">
				<div class="content">
					<h3>Info</h3>
					<p>{data.email} <br/>{data.phone.join(' / ')}</p>
					<h3>{data.social.title}</h3>
					<ul class="social-icons">
						{#each data.social.items as item, i}
							<li><a target="_blank" href="{item.url}">
								<img src="{item.icon}" width="24" height="24" />
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="content">
					<h3>Address</h3>
					<p>{data.address}</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="content">
					<h3>Hours</h3>
					<table class="hours">
						{#each data.hours as hour, i}
							<tr>
								<th>{hour.day}</th>
								<td>{hour.start}</td>
								<td>{hour.end}</td>
							</tr>
						{/each}
					</table>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="content">
					<h3>{data.reservation.title}</h3>
					<p><em>{data.reservation.text}</em></p>
					<a href="{data.reservation.cta.url}" target="_blank" class="btn-primary">{data.reservation.cta.text}</a>

				</div>
			</div>
		</div>
		<div class="legal">{@html data.legal}</div>
	</div>
</footer>