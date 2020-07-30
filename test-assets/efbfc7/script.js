function change() {
	var target = document.getElementById('target')
	var number = Math.floor(Math.random() * 1000)
	target.innerText = number
}

var updates
var updating = false

function startUpdates(interval = 1000) {
	updating = true
	updates = setInterval(change, interval)
}

function stopUpdates() {
	updating = false
	clearInterval(updates)
}

function changeFrequency(interval = 1) {
	clearInterval(updates)
	updates = startUpdates(interval * 1000)
}

function toggleUpdates() {
	var control = document.getElementById('control')
	if (updating) {
		control.value = 'Resume changes'
		updating = false
		clearInterval(updates)
	} else {
		control.value = 'Pause changes'
		updating = true
		updates = setInterval(change, 1000)
	}
}

function hide() {
	var target = document.getElementById('target')
	target.style.visibility = 'hidden'
}
