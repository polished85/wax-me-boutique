<style lang="scss" global>
	@import "styles.scss";
</style>

<script>
	import { XIcon } from 'svelte-feather-icons';
	export let modalOpen 
	export let closeModal
</script>

<div class="modal {modalOpen ? 'open' : ''}" on:click={closeModal}>
	<div class="modal-content">
		<button class="close" on:click={closeModal}><XIcon size="24"/></button>
		<slot></slot>
	</div>
</div>