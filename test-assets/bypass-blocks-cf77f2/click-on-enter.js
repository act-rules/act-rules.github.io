function ClickOnEnter(ids) {
	if (typeof ids === 'string') {
		ids = [ids]
	}

	ids.forEach(id => {
		var link = document.getElementById(id)

		link.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				event.preventDefault()
				link.click()
			}
		})
	})
}
