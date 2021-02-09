function ClickOnEnter(...ids) {
	ids.forEach(id => {
		const link = document.getElementById(id)

		link.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				event.preventDefault()
				link.click()
			}
		})
	})
}
