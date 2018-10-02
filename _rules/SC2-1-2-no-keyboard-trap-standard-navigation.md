---
name: No keyboard trap standard navigation
test_type: atomic

description: |
  This rule checks if it is possible to use standard keyboard navigation to navigate through all content on a web page without becoming trapped in any element.

test aspects:
- DOM Tree
- CSS Styling

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

The rule applies to any HTML or SVG element on a web page that is [focusable](#focusable).

**Note**: The WCAG 2.0 success criterion 2.1.2 applies to all content where focus can be moved to through keyboard navigation.

### Expectation

For each target element focus can cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

**Note**: Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfil this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.
- The Browser UI is part of the focus navigation cycle of the page.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F10)

## Test Cases

### Passed

#### Pass example 1

No trap for keyboard navigation.

```html
<a href ="#">Link 1</a>
<button class="target">Button1</button>
```

#### Pass example 2

Using `tabindex="1"`.

```html
<div tabindex=“1”>Text</div>
```

#### Pass example 3

Using `tabindex="-1"`.

```html
<div tabindex=“-1”>Text</div>
```

### Failed

#### Fail example 1

Keyboard trap one element.

```html
<a href="#">Link 1</a>
<button class="target" onblur="setTimeout(() => this.focus(), 10)">Button1</button>
```

#### Fail example 2

Keyboard trap group.

```html
<button class="target" onblur="setTimeout(() => this.nextSibling.focus(), 10)">Button1</button>
<button class="target" onblur="setTimeout(() => this.previousSibling.focus(), 10)">Button2</button>
```

#### Fail example 3

A focusable element inbetween to keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button class="target" >Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

### Inapplicable

#### Inapplicable example 1

No focusable element.

```html
<h1>Page 1</h1>
```

#### Inapplicable example 2

Disabled element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable example 3

Hidden element using `display:none`

```html
<button type="button" style=“display:none;”>Click Me!</button>
```

#### Inapplicable example 4

Hidden element using `visibility:hidden`.

```html
<a href ="#" style="visibility:hidden;">Link 1</a>
<button class="target" style="visibility:hidden;">Button1</button>
```
