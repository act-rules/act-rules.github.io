---
id: ffbc54
name: No keyboard shortcut uses only printable characters
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters, then there is a mechanism to disable the shortcut, or to remap the shortcut to use one or more non-printable character keys, or the shortcut for a user interface component is only available when that component has focus.
accessibility_requirements:
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Carlos Duarte
    - João Vicente
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [keyboard event][] for which all of the following is true:

- the event's attribute `key` is a [printable character][] key; and
- the event's method `getModifierState` returns `false` for each of the [valid modifier keys][]; and
- the event causes [changes in the content][changes in content] of the [HTML document][].

## Expectation

For each test target at least one of the following is true:

- **disable/remap**: there is at least one [set of clearly labeled instruments][] to [block events][blocked event] that use the [same key][same key events] as the test target and whose `getModifierState` method returns `false` for each of the [valid modifier keys][]; or
- **focus**: the [event target][] is an [inheriting semantic][] `widget`.

## Assumptions

- If there are ways to disable the result of [keyboard events][keyboard event] that do not require the user to interact with the web page (e.g. a setting at the operating system level), failing this rule might not be a failure of the success criterion.
- After being disabled, the event remains disabled until being re-enabled again. If the event is re-enabled through other non-user controlled means (e.g. a timeout) then this rule may pass while [Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4] is not satisfied.

## Accessibility Support

Currently [keyboard events][keyboard event] only support the types `keydown` and `keyup`. [Keyboard events][keyboard event] of type `keypressed` are considered [legacy keyboard events][] and are thus ignored by this rule.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4]. These extra requirements are left out of this rule, and should be tested separately.
This rule allows [changes to the content][changes in content] when a [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components) has focus to meet the "Active only on focus" requirement from [Success Criterion 2.1.4][sc2.1.4]. As explained in the [Event dispatch and DOM event flow section](https://www.w3.org/TR/uievents/#event-flow) of the [UI Events Working Draft](https://www.w3.org/TR/uievents/), each [keyboard event][] is dispatched to an [event target][]. The [event target][] is the element that has focus. As such, the "Active only on focus" requirement from [Success Criterion 2.1.4][sc2.1.4] is implied by saying that the [event target][] is an [inheriting semantic][] `widget`.

The "Turn off" and "Remap" requirements from [Success Criterion 2.1.4][sc2.1.4] are combined in the **disable/remap** item of the Expectation section. For the disable requirement, [changes in content][] that are made through [keyboard events][keyboard event] with a [printable character][] value for the `key` attribute and a `getModifierState` return value of `false` for each of the [valid modifier keys][] effectively need to be [blocked][blocked event] (in other words, turned off or disabled). The remap requirement unblocks the events if the `getModifierState` query returns `true` for at least one of the [valid modifier keys][]. Once the `getModifierState` returns `true` for at least one of the [valid modifier keys][] of a [keyboard event][], such [keyboard event][] is no longer applicable for the rule and it passes the "Remap" requirement from [Success Criterion 2.1.4][sc2.1.4].

### Bibliography

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4]
- [G217 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG22/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG22/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to disable the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, therefore meeting the **disable/remap** expectation.

```html
<html>
	<head>
		<title>Passed Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
					Use "ctrl" key together with the "+" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 2

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to **disable** the [keyboard event][]. A disabled event implies that the event is disabled when the `getModifierState` method returns `false`.

```html
<html>
	<head>
		<title>Passed Example 2</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<label>
			<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
			Toggle single character keyboard shortcut
		</label>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 3

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. For each [keyboard event][] causing [changes in content][], there exists an [instrument][] to disable it so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, therefore meeting the **disable/remap** expectation.

```html
<html>
	<head>
		<title>Passed Example 3</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body
		onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();"
	>
		<label for="target">Add to list (press "+" or "a" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input id="remap1" type="checkbox" onclick="toggleModifier('firstShortcut', this.checked)" />
					Use "ctrl" key together with the "+" key
				</label>
				<label>
					<input id="remap2" type="checkbox" onclick="toggleModifier('secondShortcut', this.checked)" />
					Use "ctrl" key together with the "a" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 4

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to **disable** those [keyboard events][keyboard event] that cause [changes in content][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`. In this example, the same [instrument][] is used to **remap** all [keyboard events][keyboard event].

```html
<html>
	<head>
		<title>Passed Example 4</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body
		onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();"
	>
		<label for="target">Add to list (press "+" or "a" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input
						id="remap"
						type="checkbox"
						onclick="toggleModifier('firstShortcut', this.checked); toggleModifier('secondShortcut', this.checked);"
					/>
					Use "ctrl" key together with the "+" or "a" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 5

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][], but the [events are blocked][blocked event] when no `widget` has [focus][].

```html
<html>
	<head>
		<title>Passed Example 5</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: '+', focusOnly: true}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 6

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists a [set of clearly labeled instruments][] to **disable** or to **remap** the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`.

```html
<html>
	<head>
		<title>Passed Example 6</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/ffbc54/styles.css" />
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<div id="overlay">
			<p>Disable/remap shortcut</p>
			<label>
				<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
				Toggle single character keyboard shortcut
			</label>
			<br />
			<label>
				<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
				Use "ctrl" key together with the "+" key
			</label>
			<br />
			<button onclick="closeModal();">Dismiss</button>
		</div>
		<p>To control the shortcuts activate the "Control shortcuts" button.</p>
		<input type="button" onclick="openModal()" value="Control shortcuts" />

		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There is no [instrument][] to **disable** or **remap** the [keyboard event][] and the [keyboard events][keyboard event] are not [blocked][blocked event] when no `widget` has [focus][].

```html
<html>
	<head>
		<title>Failed Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({shortcutKey: '+', disabled: false}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Failed Example 2

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There is an [instrument][] to **disable** or **remap** the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, but the [instrument][] is not in a [clearly labeled location][].

```html
<html>
	<head>
		<title>Failed Example 2</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/ffbc54/styles.css" />
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<div id="overlay">
			<p>Disable/remap shortcut</p>
			<label>
				<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
				Toggle single character keyboard shortcut
			</label>
			<br />
			<label>
				<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
				Use "ctrl" key together with the "+" key
			</label>
			<br />
			<button onclick="closeModal();">Dismiss</button>
		</div>

		<input type="button" onclick="openModal()" value="Open modal" />

		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] but it only causes [changes in content][] if the event's attribute `key` is not a [printable character][] (in this example, the Escape key).

```html
<html>
	<head>
		<title>Inapplicable Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: 'Escape'}); activateShortcuts();">
		<label for="target">Add to list (press "esc" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Inapplicable Example 2

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] but it does not cause [changes in content][] unless the `getModifierState` returns `true`.

```html
<html>
	<head>
		<title>Inapplicable Example 2</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: '+', ctrlKey: true}); activateShortcuts();">
		<label for="target">Add to list (press "ctrl" and "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

[blocked event]: #blocked-event 'Definition of blocked event'
[changes in content]: #changes-in-content 'Definition of changes in content'
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[dispatched]: https://dom.spec.whatwg.org/#dispatching-events
[event target]: https://dom.spec.whatwg.org/#eventtarget
[focus]: https://html.spec.whatwg.org/#focusable-area
[html document]: https://dom.spec.whatwg.org/#concept-document
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[keyboard event]: https://www.w3.org/TR/uievents/#events-keyboardevents
[legacy keyboard events]: https://www.w3.org/TR/uievents/#legacy-keyboardevent-events
[printable character]: #printable-characters 'Definition of printable characters'
[same key events]: #same-key-events 'Definition of same key events'
[sc2.1.4]: https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html
[set of clearly labeled instruments]: #set-of-clearly-labeled-instruments 'Definition of set of clearly labeled instruments'
[valid modifier keys]: https://www.w3.org/TR/uievents-key/#keys-modifier 'Definition of modifier keys'
