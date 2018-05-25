---
name: No keyboard trap standard navigation
group:
- SC2-1-2-no-keyboard-trap-standard-navigation
- SC2-1-2-no-keyboard-trap-non-standard-navigation

description: |
  This rule checks if it is possible to use standard keyboard navigation to navigate through all content on a web page without becoming trapped in any element.

success_criterion: 
- 2.1.2 # No Keyboard Trap

test aspects:
- DOM Tree

authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
- Malin Øvrebø
- Shadi Abou-Zahra
- Carlos Duarte
- Anne Thyme Nørregaard
- Stein Erik Skotkjerra
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element on a web page that is [focusable][] by keyboard.

### Expectation

For each target element focus can cycle to the browser UI by using [standard keyboard navigation][].

**Note**: Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfil this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- The WCAG success criterion applies to all content where focus can be moved to through keyboard navigation.
- It is possible to use unmodified arrow or tab keys, or other standard exit methods to move focus away.
- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G21
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F10

## Test Cases

### Passed

```html
<a href ="#">Link 1</a>
<button class="target">Button1</button>
```

```html
<a href ="#" style="visibility: hidden;">Link 1</a>
<button class="target" style="visibility: hidden;">Button1</button>
```

```html
<div tabindex=“1”>Text</div>
```

### Failed

```html
<!-- keyboard trap one element -->
<a href="#">Link 1</a>
<button class="target" onblur="setTimeout(() => this.focus(), 10)">Button1</button>
```

```html
<!-- keyboard trap group -->
<button class="target" onblur="setTimeout(() => this.nextSibling.focus(), 10)">Button1</button>
<button class="target" onblur="setTimeout(() => this.previousSibling.focus(), 10)">Button2</button>
```
### Inapplicable

```html
<h1>Page 1</h1>
```

```html
<!-- Element you can't reach -->
<a href="#" tabindex="-1">Tab key cannot reach here!</a>
```
```html
<!-- Disabled element -->
<button type="button" disabled>Click Me!</button>
```

```html
<!-- Hidden element -->
<button type="button" style=“display: none;”>Click Me!</button>
```

[focusable]: ../pages/algorithms/focusable.html
[standard keyboard navigation]: ../pages/algorithms/standard-keyboard-navigation.html
