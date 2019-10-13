---
id: efbfc7
name: Auto-updating text content can be paused or stopped
rule_type: atomic

description: |
  This rule checks that there are mechanisms to pause or stop the auto-updating of text content

accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.2.2: # Pause, Stop, Hide (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  - DOM Tree

authors:
  - Carlos Duarte
---

## Applicability

The rule applies to any [visible][] [text node][] in the [flat tree][] of an [HTML document][] if:

- the content of the [text node][] changes through an action that was not initiated by the user; and
- the change happens anytime after the [readiness][document readiness] of the [HTML document][] the [text node][] belongs to is equal to "complete".

## Expectation 1

For each test target a [mechanism][] is provided to pause or stop the updating of the content of the [text node][].

**Note**: If there is more than one [text node][] with auto-updating content, a single [mechanism][] may be used to pause or stop updating all [text nodes][text node].

## Expectation 2

The [mechanism][] to pause or stop the auto-updating of the content of the [text node][] is [visible][], has an [accessible name][] that is not empty ("") nor only [ASCII whitespace][] , and is [included in the accessibility tree][].

## Assumptions

This rule assumes that the auto-updating of the content is not [essential][], which is listed as valid exception to [SC 2.2.2][]. When the auto-updating of content is [essential][] this rule may produce incorrect results.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]
- [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content][g186]
- [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content][f16]

## Test Cases

### Passed

#### Passed Example 1

The text node automatically updates every 3 seconds after the page completes loading. A mechanism is available to stop the automatic updates.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stop()" value="Stop updates" />

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		function start() {
			updates = setInterval(change, 3000)
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

#### Passed Example 2

The text node automatically updates every 3 seconds after the page completes loading. A mechanism is available to pause and resume the automatic updates.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="pause()" value="Pause updates" />

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		var updating = false
		function start() {
			var control = document.getElementById('control')
			control.value = 'Pause updates'
			updating = true
			updates = setInterval(change, 3000)
		}

		function pause() {
			if (updating) {
				var control = document.getElementById('control')
				control.value = 'Resume updates'
				updating = false
				clearInterval(updates)
			} else {
				start()
			}
		}
	</script>
</body>
```

#### Passed Example 3

The text node (part of a progress bar) automatically updates every second after the page completes loading. Since the auto-updating can be considered essential because it takes place during a loading phase when there can be no interaction, a mechanism to stop the auto-updating is not required and the example passes.

```html
<html>
	<head>
		<title>Example page for rule efbfc7</title>
		<style>
			.progress-wrap,
			.progress-bar {
				height: 20px;
				max-width: 300px;
				position: relative;
			}
			.progress-wrap {
				background: #eee;
			}
			.progress-bar {
				background: #cce0ff;
				width: 0;
				transition: width 1s;
			}
			.progress-text {
				position: absolute;
				top: 0;
				width: 100%;
				text-align: center;
			}
			.choices {
				margin: 3em;
			}
		</style>
	</head>
	<body onload="start()">
		<p>
			Wait for the bar to reach 100% then make your choice
		</p>
		<div class="progress-wrap">
			<div class="progress-bar" id="pb-demo"></div>
			<div class="progress-text" id="pb-text">0%</div>
		</div>
		<div class="choices">
			<button type="button" id="packa" disabled>Pack A:</button>
			<button type="button" id="packb" disabled>Pack B:</button>
		</div>

		<script type="text/javascript">
			var n, updates

			function updatePB() {
				var bar = document.getElementById('pb-demo')
				var text = document.getElementById('pb-text')
				bar.style.width = n + '%'
				text.innerHTML = n + '%'
			}

			function updateNum() {
				if (n < 100) {
					n = n + 5
					updatePB(n)
					if (n % 10 === 0) {
						var buttonA = document.getElementById('packa')
						var buttonB = document.getElementById('packb')
						buttonA.innerHTML = 'Pack A: &euro;' + Math.floor(Math.random() * 1000)
						buttonB.innerHTML = 'Pack B: &euro;' + Math.floor(Math.random() * 1000)
					}
				} else {
					clearInterval(updates)
					var buttonA = document.getElementById('packa')
					var buttonB = document.getElementById('packb')
					buttonA.disabled = false
					buttonB.disabled = false
				}
			}

			function start() {
				n = 0
				updates = setInterval(updateNum, 1000)
			}
		</script>
	</body>
</html>
```

### Failed

#### Failed Example 1

The text node automatically updates every 3 seconds after the page completes loading. There is no mechanism to stop or pause the automatic updates.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		function start() {
			updates = setInterval(change, 3000)
		}
	</script>
</body>
```

#### Failed Example 2

The text node automatically updates every 3 seconds after the page completes loading. The mechanism to stop the automatic updates is not visible.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stop()" value="Stop updates" style="position: absolute; top: -9999px; left: -9999px;" />

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		function start() {
			updates = setInterval(change, 3000)
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

#### Failed Example 3

The text node automatically updates every 3 seconds after the page completes loading. The mechanism to stop the automatic updates is not included in the accessibility tree.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<div onclick="stop()" aria-hidden="true">
		<span style="background-color:#333; color:white; padding:5px">Stop updates</span>
	</div>

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		function start() {
			updates = setInterval(change, 3000)
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

#### Failed Example 4

The text node automatically updates every 3 seconds after the page completes loading. The mechanism to stop the automatic updates has an empty accessible name.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<div onclick="stop()" aria-label="">
		<span style="background-color:#333; color:white; padding:5px">Stop updates</span>
	</div>

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		function start() {
			updates = setInterval(change, 3000)
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

#### Failed Example 5

The text node automatically updates every 3 seconds after the page completes loading. The mechanism to stop the automatic updates has an accessible name that is only whitespace.

```html
<body onload="start()">
	<p>Random number: <span id="target">1</span></p>
	<div onclick="stop()" aria-label="   ">
		<span style="background-color:#333; color:white; padding:5px">Stop updates</span>
	</div>

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		function start() {
			updates = setInterval(change, 3000)
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The text node automatically updates every 3 seconds after the page completes loading but it is not visible.

```html
<body onload="start()">
	<p style="display: none">Random number: <span id="target">1</span></p>

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		function start() {
			updates = setInterval(change, 3000)
		}
	</script>
</body>
```

#### Inapplicable Example 2

The text node automatically updates every 3 seconds but only as a result of an action from the user.

```html
<body>
	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="pause()" value="Start updates" />

	<script type="text/javascript">
		function change() {
			var target = document.getElementById('target')
			var number = Math.floor(Math.random() * 1000)
			target.innerText = number
		}

		var updates
		var updating = false
		function start() {
			var control = document.getElementById('control')
			control.value = 'Pause updates'
			updating = true
			updates = setInterval(change, 3000)
		}

		function pause() {
			if (updating) {
				var control = document.getElementById('control')
				control.value = 'Resume updates'
				updating = false
				clearInterval(updates)
			} else {
				start()
			}
		}
	</script>
</body>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[document readiness]: https://www.w3.org/TR/html53/dom.html#current-document-readiness
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html#dfn-essential
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[f16]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F16
[g186]: https://www.w3.org/WAI/WCAG21/Techniques/general/G186
[html document]: https://dom.spec.whatwg.org/#html-document
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[mechanism]: https://www.w3.org/TR/WCAG21/#dfn-mechanism
[sc 2.2.2]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'
