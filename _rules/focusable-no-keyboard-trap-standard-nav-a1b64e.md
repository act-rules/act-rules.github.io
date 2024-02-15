---
id: a1b64e
name: Focusable element has no keyboard trap via standard navigation
rule_type: atomic
description: |
  This rule checks if it is possible to use standard keyboard navigation to navigate through all content on a web page without becoming trapped in any element.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Malin Øvrebø
    - Shadi Abou-Zahra
    - Stein Erik Skotkjerra
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable][].

## Expectation

For each target element, focus can cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

**Note:** It is not possible to fulfill this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.
- The Browser UI is part of the focus navigation cycle of the page.

## Accessibility Support

There are no accessibility support issues known.

## Background

This rule only requires navigation in one direction (either forward or backward), not both, and not a specific one. It is clear that not being able to escape a focus trap in any direction is a failure of [Success Criterion 2.1.2 No keyboard trap][sc212]. However, it is less clear that being able to escape in only one direction is enough to satisfy it. If [Success Criterion 2.1.2 No keyboard trap][sc212] requires the possibility to escape the trap in a specific way (e.g. forward [standard keyboard navigation](#standard-keyboard-navigation)) or in both directions, this rule may pass while the criterion is not satisfied.

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed Example 1

These [focusable][] elements do not create a trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

This element is made [focusable][] by the `tabindex` attribute. It does not create a trap for keyboard navigation.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

This element is made [focusable][] by the `tabindex` attribute, even if it is not part of the sequential focus navigation. It does not create a trap for keyboard navigation.

```html
<div tabindex="-1">Text</div>
```

### Failed

#### Failed Example 1

This [focusable][] element creates a keyboard trap bringing focus to the `button`. Note that if one of the links is removed, the focus may jump to the browser UI before the timeout expires, at which point the `this.focus()` trap cannot trigger anymore.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
<a href="#">Link 2</a>
```

#### Failed Example 2

These [focusable][] `button` elements create a keyboard trap preventing the last `button` to be reached using the keyboard.

```html
<button onblur="setTimeout(() => this.nextElementSibling.focus(), 10)">
	Button1
</button>
<button onblur="setTimeout(() => this.previousElementSibling.focus(), 10)">
	Button2
</button>
<button>
	Button3
</button>
```

#### Failed Example 3

This `button` element is between other `button` elements creating keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

### Inapplicable

#### Inapplicable Example 1

There is no [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

There is no [focusable][] element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

There is no [focusable][] element.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

There is no [focusable][] element.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button style="visibility:hidden;">Button1</button>
```

[focusable]: #focusable 'Definition of focusable'
[html or svg element]: #namespaced-element
[sc212]: https://www.w3.org/TR/WCAG22/#no-keyboard-trap 'Success Criterion 2.1.2 No Keyboard Trap'
