function changeSlider(amount) {
	document.getElementById('motionSlider').value += amount
	document.getElementById('output').innerHTML = document.getElementById('motionSlider').value
}

function increaseSlider() {
	changeSlider(+1)
}

function decreaseSlider() {
	changeSlider(-1)
}

function applyChange(gamma, threshold) {
	if (gamma > threshold) {
		increaseSlider()
	} else if (gamma < -threshold) {
		decreaseSlider()
	}
}

function handleOrientation(event) {
	applyChange(event.gamma, 20)
}

function handleOrientationCanBeDisabled(event) {
	const disableMotion = document.getElementById('disableMotion')
	if (!disableMotion.checked) {
		applyChange(event.gamma, 20)
	}
}

function handleMotion(event) {
	applyChange(event.rotationRate.gamma, 5)
}

function handleMotionCanBeDisabled(event) {
	const disableMotion = document.getElementById('disableMotion')
	if (!disableMotion.checked) {
		applyChange(event.rotationRate.gamma, 5)
	}
}
