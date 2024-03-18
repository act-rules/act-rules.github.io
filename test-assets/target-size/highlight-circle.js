/**
 * Create a circle element with class "highlight" centered at the center of
 * the bounding box, with diameter 24px.
 * The node needs to be non-static to allow for z-index lower than
 * the highlighted element, otherwise the .highlight element will prevent
 * click events to reach the node.
 *
 * An optional set of classes can also be added to the highlighted element,
 * these are mostly intended to be either ['good'] (default) or ['bad'] to set
 * the color and style of the highlighting border.
 */
function highlightCircle(node, classes = ['good']) {
	// Get the bounding client rect of the node
	const range = document.createRange()
	range.setStart(node, 0)
	// Take the length of text nodes, if it exists, otherwise (element), take
	// all child nodes
	range.setEnd(node, node?.length ?? node.childNodes.length)
	const rect = range.getBoundingClientRect()

	console.dir(rect)

	// Create a 24 px div centered at that rect
	// See https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects#javascript
	const div = document.createElement('div')
	div.classList.add('highlight', ...classes)
	div.style.top = `${rect.top + rect.height / 2 - 12}px`
	div.style.left = `${rect.left + rect.width / 2 - 12}px`
	div.style.width = `${22}px`
	div.style.height = `${22}px`
	div.style.borderRadius = '50%'
	document.body.appendChild(div)

	return div
}
