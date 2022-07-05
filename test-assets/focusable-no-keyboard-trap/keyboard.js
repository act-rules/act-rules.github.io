var trapOn = false

function moveFocusToButton(btn) {
	if (trapOn) {
		document.getElementById(btn).focus()
	}
}

function escapeTrapOnCtrlM(e) {
	if (e.keyCode === 77 && e.ctrlKey) {
		trapOn = false
		document.getElementById('link2').focus()
	}
}

function moveFocusTo(elm) {
	if (trapOn) {
		document.getElementById(elm).focus()
	}
}

function showHelpText() {
	document.getElementById('helptext').innerHTML = '<p>Press Ctrl+M to Exit</p>'
}
