window.onload = function() {
	// Video
	var video = document.getElementById('video')

	// Buttons
	var playButton = document.getElementById('play-pause')
	var muteButton = document.getElementById('mute')

	// Event listener for the play/pause button
	playButton.addEventListener('click', function() {
		if (video.paused == true) {
			// Play the video
			video.play()

			// Update the button text to 'Pause'
			playButton.innerHTML = 'Pause'
		} else {
			// Pause the video
			video.pause()

			// Update the button text to 'Play'
			playButton.innerHTML = 'Play'
		}
	})

	// Event listener for the mute button
	muteButton.addEventListener('click', function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true

			// Update the button text
			muteButton.innerHTML = 'Unmute'
		} else {
			// Unmute the video
			video.muted = false

			// Update the button text
			muteButton.innerHTML = 'Mute'
		}
	})
}
