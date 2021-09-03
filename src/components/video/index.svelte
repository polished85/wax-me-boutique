<style lang="scss" global>
	@import "styles.scss";
	.controls {
		position: absolute;
		bottom: -5px;
		width: 100%;
		transition: opacity .25s ease-in;
		font-family: $font_system;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		// background-color: rgba(0, 0, 0, .2);
		background-image: linear-gradient(to right, rgba(0,0,0,.75) 0, rgba(0,0,0,.25) 50%, rgba(0,0,0,.75) 100%);
	}

	span,
	time {
		padding: 0.25rem 1rem;
		color: #fff;
		text-shadow: 0 0 8px rgba(0,0,0,.75);
		font-size: 1.6rem;
	}

	.time {
		width: 3em;
		font-weight: 600;
	}

	.time:last-child { text-align: right }

	.buttons {
		display: flex;
	}
	.buttons button {
		border: 0;
		background: none;
		color: #fff;
		cursor: pointer;
		padding: .25rem 2rem;
		margin: 0;
		// box-shadow: inset 0 .5rem 2rem rgba(0,0,0,.75);
		border-left: 1px solid rgba(0,0,0,.25);
		border-right: 1px solid rgba(255,255,255,.25);
		&:first-child {
			border-left: 0;
		}
		&:last-child {
			border-right: 0;
			svg {
				transition: transform .25s ease-in;
			}
		}
		&:hover {
			background-color: rgba(0,0,0,.2);
			&:last-child {
				svg {
					transform: rotate(360deg);
					transition-timing-function: ease-out;
				}
			}
		}
		&:active {
			box-shadow: inset 0 1rem 2rem rgba(0,0,0,.5);
			background-color: rgba(0,0,0,.2);
		}
	}
	

	progress {
		display: block;
		width: 100%;
		height: 5px;
		-webkit-appearance: none;
		appearance: none;
		border: 0;
		background-color: #ddd;
	}
	progress::-moz-progress-bar {
		background-color: $theme_blue;
	}

	progress::-webkit-progress-bar {
		background-color: #ddd;
	}

	progress::-webkit-progress-value {
		background-color: $theme_blue;
	}
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