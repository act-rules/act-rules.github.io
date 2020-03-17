function toggleHidden(...ids) {
	ids.forEach(id => {
		const element = document.getElementById(id)
		element.style.display = element.style.display === 'none' ? '' : 'none'
	})
}

function toggleVisibility(id) {
	const element = document.getElementById(id)
	element.className = element.className === 'off-screen' ? '' : 'off-screen'
}

function toggleAriaHidden(id) {
	const element = document.getElementById(id)
	element.setAttribute('aria-hidden', (element.getAttribute('aria-hidden') !== 'true').toString())
}
