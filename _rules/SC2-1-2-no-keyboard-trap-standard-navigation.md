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

The rule applies to any HTML or SVG element on a web page that is [focusable][].

**Note**: The WCAG 2.0 success criterion 2.1.2 applies to all content where focus can be moved to through keyboard navigation.

### Expectation

For each target element focus can cycle to the browser UI by using [standard keyboard navigation][].

**Note**: Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfil this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.
- The Browser UI is part of the focus navigation cycle of the page.

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
<!-- Tab index 1 -->
<div tabindex=“1”>Text</div>
```

```html
<!-- Tab index -1 -->
<div tabindex=“-1”>Text</div>
```

### Failed

```html
<!-- Keyboard trap one element -->
<a href="#">Link 1</a>
<button class="target" onblur="setTimeout(() => this.focus(), 10)">Button1</button>
```

```html
<!-- Keyboard trap group -->
<button class="target" onblur="setTimeout(() => this.nextSibling.focus(), 10)">Button1</button>
<button class="target" onblur="setTimeout(() => this.previousSibling.focus(), 10)">Button2</button>
```

```html
<!-- A focusable element inbetween to keyboard traps -->
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button class="target" >Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

### Inapplicable

```html
<!-- No focusable element -->
<h1>Page 1</h1>
```

```html
<!-- Disabled element -->
<button type="button" disabled>Click Me!</button>
```

```html
<!-- Hidden element using display:none -->
<button type="button" style=“display:none;”>Click Me!</button>
```

```html
<!-- Hidden element using visibility:hidden -->
<a href ="#" style="visibility:hidden;">Link 1</a>
<button class="target" style="visibility:hidden;">Button1</button>
```

[focusable]: ../pages/algorithms/focusable.html
[standard keyboard navigation]: ../pages/algorithms/standard-keyboard-navigation.html
