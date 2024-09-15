---
id: mogq50
name: 'Status text update has `aria-live` property'
rule_type: atomic
description: |
  This rule checks that any status message update has either "polite" or "assertive" `aria-live` property.
accessibility_requirements:
  wcag21:4.1.3: # Status Messages (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA19: # Using ARIA role=alert or Live Regions to Identify Errors
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA22: # Using role=status to present status messages
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA23: # Using role=log to identify sequential information updates
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility Tree
acknowledgments:
  authors:
    - aron janecki
    - jean-yves moyen
---

## Applicability

This rule applies to any [text node][] that is a [descendant][] of the [HTML element][] in the [flat tree][] if the [text node][] is [included in the accessibility tree][] and at least one of the following is true:

- **change**: the [text node][]'s [ancestor][]'s `innerText` property is changing; or
- **create**: the [text node][]'s [ancestor][] is either [appended](https://dom.spec.whatwg.org/#concept-node-append) or [inserted](https://dom.spec.whatwg.org/#concept-node-insert); or
- **replaced**: the [text node][]'s [ancestor][] was [replaced](https://dom.spec.whatwg.org/#concept-node-replace).

## Expectation

For each test target at least one of the following is true:

- the test target has an accessible object as an ancestor in the accessibility tree with an implicit or explicit `aria-live` value of "assertive" or "polite"; or
- there is a text node with an equivalent message that has an accessible object as an ancestor in the accessibility tree with an implicit or explicit `aria-live` value of "assertive" or "polite".

## Assumptions

The text changes meet the definition of [status message][]. If this is not the case, success criterion [4.1.3 Status Messages][success criterion 4.1.3 status messages] may be satisfied even if this rule failed.

This rule assumes that the [explicit role][] of the elements does not need to be appropriate to satisfy success criterion [4.1.3 Status Messages][success criterion 4.1.3 status messages]. For example, using `role="alert"` on elements with score updates may be of concern for success criterion [1.3.1 Info and Relationships][success criterion 1.3.1 info and relationships] because the `role="status"` appears to be more appropriate in such a context.

This rule assumes that the changes happen within a 1 minute time span after the event firing and therefore the comparison between the page before and after the [event](https://dom.spec.whatwg.org/#concept-event) [firing](https://dom.spec.whatwg.org/#concept-event-fire) can be made at any time after that time span elapses. If there are changes after this time span, they may not be detected as [changes in content][event originated change in the content] and the rule may pass but [success criterion 4.1.3 Status Messages][] is not satisfied. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

## Accessibility Support

There exists a known combination of operating system and browsers that do not specify the implicit `aria-live` property.

## Background

- [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html)
- [ARIA21: Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.html)
- [ARIA23: Using role=log to identify sequential information updates](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23.html)

## Test Cases

### Passed

#### Passed Example 1

The `p` element that appears after activating submit button with no value for the first name field has `role="alert"`. `role="alert"` has an implicit `aria-live` value of "assertive".

```html
<body>
	<label>First name:<input /></label>
	<input type="button" onclick="checkErrors()" value="Submit" />

	<script>
		const fNameInput = document.querySelector('label input')

		const checkErrors = () => {
			if (fNameInput.value === '') {
				let para = document.createElement('p')
				para.innerText = 'Error: First name field must not be blank'
				para.setAttribute('role', 'alert')
				document.body.prepend(para)
			}
		}
	</script>
</body>
```

#### Passed Example 2

This `p` element with `role="status"` has an implicit `aria-live` value of "polite".

```html
<label>Search for a phrase<input /></label>

<p role="status">Found phrases: 0</p>

<input type="button" onclick="searchPhrase()" value="Search" />

<blockquote cite="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html">
	<p id="rich-text">
		"When appropriate roles or properties are assigned to status messages, the new content is spoken by screen readers
		in such a way as to assist blind and low vision users. Most sighted users can observe text peripherally added to the
		viewport. Such content provides additional information without affecting the user's current point of regard. The
		ability of an assistive technology to announce such new important text content allows more users to benefit from an
		awareness of the information in an equivalent manner."
	</p>
</blockquote>

<script>
	const searchInput = document.querySelector('label input')

	const statusBar = document.querySelector('p[role="status"]')

	const richText = document.getElementById('rich-text')

	const searchPhrase = () => {
		if (searchInput.value === '') {
			statusBar.innerText = 'Found phrases: 0'
		} else {
			let regex = new RegExp(searchInput.value, 'g')
			const match = Array.from(richText.innerText.matchAll(regex))

			match ? (statusBar.innerText = 'Found phrases: ' + match.length) : (statusBar.innerText = 'Found phrases: 0')
		}
	}
</script>
```

#### Passed Example 3

The `p` element with `role="timer"` that appears after activating the "Download" `button` has an explicit `aria-live` value of "polite". `aria-live="polite"` overwrites the implicit value of "off" for elements with `role="timer"`.

```html
<body>
	<input type="button" onclick="launchTimer();" value="Download" />

	<script>
		const launchTimer = () => {
			let counter = 10

			if (!document.querySelector('p[role="timer"]')) {
				let para = document.createElement('p')
				para.setAttribute('aria-live', 'assertive')
				para.setAttribute('role', 'timer')
				document.body.append(para)

				const timer = document.querySelector('p[role="timer"]')

				window.setInterval(() => {
					if (counter === 10) {
						timer.innerText = 'Document will download in 10 seconds'
						counter--
					} else {
						counter === -1 ? clearInterval() : (timer.innerText = counter--)
					}
				}, 1000)
			}
		}
	</script>
</body>
```

#### Passed Example 4

This `div` element with `role="log"` has an implicit `aria-live` value of "polite".

```html
<body onload="sendNotifications()">
	<div role="log" aria-labelledby="mainHeading">
		<h1 id="mainHeading">Notifications panel</h1>
	</div>

	<script>
		const log = document.querySelector('div[role="log"]')

		const sendNotifications = () => {
			let counter = 0

			window.setTimeout(() => {
				let listObject = {
					timer: counter,
					get list() {
						return document.createElement('ul')
					},
					message: ['Notification:', 'Message', 'number '],
					get listItem() {
						let item = document.createElement('li')
						item.innerText = this.message.join(' ')
						return item
					},
				}

				log.append(listObject.list)

				const listNode = document.querySelector('ul')

				listObject.message.push(counter + 1)

				listNode.append(listObject.listItem)
				++counter

				const intervalID = window.setInterval(() => {
					console.log(true)
					if (counter < 10) {
						let lastItem = listObject.message.length - 1
						listObject.message[lastItem] = ++counter
						listNode.insertBefore(listObject.listItem, document.querySelector('ul > li'))
					} else {
						clearInterval(intervalID)
					}
				}, 3000)
			}, 5000)
		}
	</script>
</body>
```

#### Passed Example 5

This `div` element with `role="marquee"` has an implicit `aria-live` value of "off". Pressing the Activate Updates control gives the element the explicit value of "polite".

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<h1 id="mainHeading">Stock tickers website</h1>

		<p>Press Activate Updates to receive live updates of stock values</p>
		<button onclick="turnOnUpdates()">Activate updates</button>
		<button onclick="turnOffUpdates()">Turn off updates</button>

		<div role="marquee" aria-labelledby="mainHeading">
			<table>
				<thead>
					<tr>
						<th scope="col">Company symbol</th>
						<th scope="col">Last price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Comp1</th>
						<td>0.675</td>
					</tr>
					<tr>
						<th scope="row">Comp2</th>
						<td>0.543</td>
					</tr>
				</tbody>
			</table>
		</div>

		<script>
			const marquee = document.querySelector('div[role="marquee"]')
			const stockValues = document.querySelectorAll('tr > td')

			const setUpdates = () => {
				stockValues.forEach((data, index) => {
					data.innerText = Math.random().toFixed(3)
					let para = document.createElement('p')
					para.setAttribute('id', index)
					para.innerText = 'Company ' + (index + 1) + ' ' + data.innerText
					para.classList.add('notInPage')
					marquee.appendChild(para)
					window.setTimeout(() => {
						document.getElementById(index).remove()
					}, 8000)
				})
			}

			let intervalID

			const turnOnUpdates = () => {
				if (!marquee.getAttribute('aria-live')) {
					intervalID = window.setInterval(setUpdates, 10000)
					stockValues.forEach(data => {
						data.setAttribute('aria-live', 'off')
					})
					marquee.setAttribute('aria-live', 'polite')
					intervalID
				}
			}

			const turnOffUpdates = () => {
				if (marquee.getAttribute('aria-live')) {
					window.clearInterval(intervalID)
					stockValues.forEach(data => {
						data.removeAttribute('aria-live', 'off')
					})
					marquee.removeAttribute('aria-live')
				}
			}
		</script>
	</body>
</html>
```

#### Passed Example 6

This `div` element has explicit `aria-live` value of "assertive".

```html
<button onclick="download()">Download file 1</button>
<div aria-live="assertive"></div>

<script>
	const div = document.querySelector('div[aria-live="assertive"]')

	const update = () => {
		let para = document.createElement('p')
		para.innerText = 'Downloading'
		div.appendChild(para)
		let counter = 0
		const intervalID = window.setInterval(() => {
			console.log(true)
			if (counter < 3) {
				window.setTimeout(() => {
					div.firstElementChild.innerText += '.'
					counter++
				})
			} else {
				div.firstElementChild.innerText = 'Download completed'
				clearInterval(intervalID)
			}
		}, 1000)
	}

	const download = () => {
		if (div.children.length > 0) {
			for (element of div.children) {
				element.remove()
			}
			update()
		} else {
			update()
		}
	}
</script>
```

### Failed

#### Failed Example 1

The `p` element that appears after activating submit button with no value for the first name field does not have implicit or explicit `aria-live` value of "polite" or "assertive". `role="alert"` is not a valid ARIA attribute.

```html
<label>First name:<input /></label>
<input type="button" onclick="checkErrors()" value="Submit" />

<script>
	const fNameInput = document.querySelector('label input')

	const checkErrors = () => {
		if (fNameInput.value === '') {
			let para = document.createElement('p')
			para.innerText = 'Error: First name field must not be blank'
			para.setAttribute('role', 'alerts')
			document.body.prepend(para)
		}
	}
</script>
```

#### Failed Example 2

This `p` element, that changes its value in response to a search query, does not have an implicit or explicit `aria-live` value of "polite" or "assertive".

```html
<label>Search for a phrase<input /></label>
<input type="button" onclick="searchPhrase()" value="Search" />

<p>Found phrases: 0</p>

<blockquote cite="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html">
	<p id="rich-text">
		"When appropriate roles or properties are assigned to status messages, the new content is spoken by screen readers
		in such a way as to assist blind and low vision users. Most sighted users can observe text peripherally added to the
		viewport. Such content provides additional information without affecting the user's current point of regard. The
		ability of an assistive technology to announce such new important text content allows more users to benefit from an
		awareness of the information in an equivalent manner."
	</p>
</blockquote>

<script>
	const searchInput = document.querySelector('label input')

	const statusBar = document.querySelector('p')

	const richText = document.getElementById('rich-text')

	const searchPhrase = () => {
		if (searchInput.value === '') {
			statusBar.innerText = 'Found phrases: 0'
		} else {
			let regex = new RegExp(searchInput.value, 'g')
			const match = Array.from(richText.innerText.matchAll(regex))

			match ? (statusBar.innerText = 'Found phrases: ' + match.length) : (statusBar.innerText = 'Found phrases: 0')
		}
	}
</script>
```

#### Failed Example 3

The `p` element with `role="timer"` that appears after activating the "Download" `button` has an implicit `aria-live` value of "off". The `aria-live="politeness"` is not a valid ARIA attribute which means that `aria-live` value of the test target defaults to "off".

```html
<input type="button" onclick="launchTimer();" value="Download" />

<script>
	const launchTimer = () => {
		let counter = 10

		if (!document.querySelector('p[role="timer"]')) {
			let para = document.createElement('p')
			para.setAttribute('aria-live', 'politeness')
			para.setAttribute('role', 'timer')
			document.body.append(para)

			const timer = document.querySelector('p[role="timer"]')

			window.setInterval(() => {
				if (counter === 10) {
					timer.innerText = 'Document will download in 10 seconds'
					counter--
				} else {
					counter === -1 ? clearInterval() : (timer.innerText = counter--)
				}
			}, 1000)
		}
	}
</script>
```

#### Failed Example 4

This `div` element does not have an implicit or explicit `aria-live` value of "polite" or "assertive".

```html
<button onclick="download()">Download file 1</button>
<div aria-live="assertive"></div>

<script>
	const div = document.querySelector('div[aria-live="assertive"]')

	const update = () => {
		let para = document.createElement('p')
		para.innerText = 'Downloading'
		div.appendChild(para)
		let counter = 0
		const intervalID = window.setInterval(() => {
			console.log(true)
			if (counter < 3) {
				window.setTimeout(() => {
					div.firstElementChild.innerText += '.'
					counter++
				})
			} else {
				div.firstElementChild.innerText = 'Download completed'
				clearInterval(intervalID)
			}
		}, 1000)
	}

	const download = () => {
		if (div.children.length > 0) {
			for (element of div.children) {
				element.remove()
			}
			update()
		} else {
			update()
		}
	}
</script>
```

### Inapplicable

#### Inapplicable Example 1

This `p` element is not an [event originated change in the content][].

```html
<p>This is static text</p>
```

#### Inapplicable Example 2

This `p` element is not included in the accessibility tree through the `display: none` property.

```html
<p style="display:none;" role="status">10 results out of 20</p>
```

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition of ancestor'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[event originated change in the content]: https://act-rules.github.io/glossary/#changes-in-content 'Definition of changes in content'
[explicit role]: https://act-rules.github.io/glossary/#explicit-role 'Definition of explicit semantic role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[status message]: https://www.w3.org/TR/WCAG21/#dfn-status-messages
[success criterion 1.3.1 info and relationships]: https://www.w3.org/TR/WCAG21/#info-and-relationships
[success criterion 4.1.3 status messages]: https://www.w3.org/TR/WCAG21/#status-messages
[text node]: https://dom.spec.whatwg.org/#text
