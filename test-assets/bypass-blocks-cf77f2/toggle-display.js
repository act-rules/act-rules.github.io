function toggleHidden(ids) {
	if (typeof ids === 'string') {
		ids = [ids]
	}
	for (var i = 0; i < ids.length; i++) {
		var element = document.getElementById(ids[i])
		element.style.display = element.style.display === 'none' ? '' : 'none'
	}
}

function toggleVisibility(id) {
	var element = document.getElementById(id)
	element.className = element.className === 'off-screen' ? '' : 'off-screen'
}

function toggleAriaHidden(id) {
	var element = document.getElementById(id)
	element.setAttribute('aria-hidden', (element.getAttribute('aria-hidden') !== 'true').toString())
}
