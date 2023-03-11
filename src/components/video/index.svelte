<style lang="scss" global>
	@import "./styles.scss";
</style>

<script>
	import { onMount } from 'svelte'
	import { PauseIcon,  PlayIcon, RefreshCwIcon, Volume2Icon, VolumeXIcon } from 'svelte-feather-icons'

	let videoEl
	let pauseIcon
	let volumeIcon
	let iconSize = 20

	// These values are bound to properties of the video
	let time = 0
	let duration
	let paused = false
	let muted = true

	let showControls = true
	let showControlsTimeout

	$: pauseIcon = (paused ? PlayIcon : PauseIcon)
	$: volumeIcon = (muted ? VolumeXIcon : Volume2Icon)

	// Used to track time of last mouse down event
	let lastMouseDown

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout)
		showControlsTimeout = setTimeout(() => showControls = false, 2500)
		showControls = true

		if (!duration) return // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date()
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play()
			else e.target.pause()
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...'

		const minutes = Math.floor(seconds / 60)
		seconds = Math.floor(seconds % 60)
		if (seconds < 10) seconds = '0' + seconds

		return `${minutes}:${seconds}`
	}
</script>

<div class="video-hero">
	<div class="container">
		<figure class="ar-16-9">
			<video
				class="video"
				poster="/img/video-bg.jpg"
				loop="true" 
				playsinline="true"
				autoplay="true" 
				on:mousemove={handleMove}
				on:touchmove|preventDefault={handleMove}
				on:mousedown={handleMousedown}
				on:mouseup={handleMouseup} 
				bind:currentTime={time}
				bind:duration
				bind:paused
				bind:muted
				bind:this={videoEl}>
				<source 
					src="/video/hero-1080.webm"
					type="video/webm">
				<source 
					src="/video/hero-1080.mp4"
					type="video/mp4">
				<track kind="captions">
			</video>

			<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
				<div class="info">
					<time class="time">{format(time)}</time>
					<div class="buttons">
						<button on:click={() => (paused = !paused)}><svelte:component size="22" this={pauseIcon}/></button>
						<button on:click={() => (muted = !muted)}><svelte:component size="22" this={volumeIcon}/></button>
						<button on:click={() => (time = 0)}><RefreshCwIcon size="22" /></button>
						<!-- <span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span> -->
					</div>
					<time class="time">{format(duration)}</time>
				</div>
				<progress value="{(time / duration) || 0}"/>
			</div>
		</figure>
	</div>
</div>