/**
 * Create an element with class "highlight" around a node.
 * The node needs to be non-static to allow for z-index lower than
 * the highlighted element, otherwise the .highlight element will prevent
 * click events to reach the node.
 *
 * An optional set of classes can also be added to the highlighted element,
 * these are mostly intended to be either ['good'] (default) or ['bad'] to set
 * the color and style of the highlighting border.
 */
function highlightRect(node, classes = ['good']) {
	// Get the bounding client rect of the node
	const range = document.createRange()
	range.setStart(node, 0)
	// Take the length of text nodes, if it exists, otherwise (element), take
	// all child nodes
	range.setEnd(node, node?.length ?? node.childNodes.length)
	const rect = range.getBoundingClientRect()

	// Create a div sized to that rect
	// See https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects#javascript
	const div = document.createElement('div')
	div.classList.add('highlight', ...classes)
	div.style.top = `${rect.top}px`
	div.style.left = `${rect.left}px`
	div.style.width = `${rect.width - 2}px`
	div.style.height = `${rect.height - 2}px`
	document.body.appendChild(div)

	return div
}
