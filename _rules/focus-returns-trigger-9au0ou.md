---
id: 9au0ou
name: Focus returns to trigger
rule_type: atomic
description: |
  This rule checks that when a modal closes the focus returns to the trigger that opened the modal.
accessibility_requirements:
  wcag20:2.4.3: # Focus Order (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G59: # Placing the interactive elements in an order that follows sequences and relationships within the content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
acknowledgments:
  authors:
    -  Helen Burge
  previous_authors:
    -  Helen Burge
---

## Applicability

This rule applies to any element with a semantic role of dialog or alertdialog that is not visible.

## Expectation

The element that has the focus when the target element becomes visible is the same element that receives focus when the target element stops being visible.

## Background

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG22/Techniques/general/G59)

## Test Cases

### Passed

#### Passed Example 1

The button that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the close button in the modal.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Passed Example</title>
		<script src="/test-assets/9au0ou/aria-apg-dialog.js"></script>
		<script src="/test-assets/9au0ou/aria-apg-utils.js"></script>
		<link href="/test-assets/9au0ou/aria-apg-dialog.css" rel="stylesheet" />
		<link href="/test-assets/9au0ou/9au0ou.css" rel="stylesheet" />
	</head>
	<body>
		<button type="button">Do nothing</button>
		<button type="button" onclick="openDialog('dialog1', this)">Open modal dialog</button>
		<button type="button">Do nothing</button>
		<div id="dialog_layer" class="dialogs">
			<div role="dialog" id="dialog1" aria-labelledby="dialog1_label" aria-modal="true"
					 class="hidden">
				<h2 id="dialog1_label" class="dialog_label">Dialog title</h2>
				<div class="dialog_form">Dialog content.</div>
				<button type="button" class="close-button topright" aria-label="Close" title="Close" 
						onclick="closeDialog(this)">
					&times;
				</button>
				<div style="text-align: right;">
					<button type="button" onclick="closeDialog(this)">Ok</button>
					<button type="button" onclick="closeDialog(this)">Cancel</button>
				</div>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 2

The button that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the escape key.

```html
Code needed!
```

#### Passed Example 3

The button that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the cancel button.

```html
Code needed!
```

#### Passed Example 4

The link that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the close button in the modal.

```html
Code needed!
```

#### Passed Example 5

The link that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the escape key.

```html
Code needed!
```

#### Passed Example 6

The link that is activated to display the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the cancel button.

```html
Code needed!
```

#### Passed Example 7
The page has a list of buttons that is activated to display a [modal][], the [focus][] is returned to the correct button on dismissing the modal.

```html
Code needed!
```

### Failed

#### Failed Example 1
The button that is activated to display the [modal][] gets the [focus][] returned to the item after it when the [modal][] is dismissed.

```html
Code needed!
```

#### Failed Example 2
The button that is activated to display the [modal][] gets the [focus][] returned to the start of the page when the modal is dismissed.

```html
Code needed!
```

#### Failed Example 3
The link that is activated to display the [modal][] gets the [focus][] returned to the item after it when the [modal][] is dismissed.

```html
Code needed!
```

#### Failed Example 4
The link that is activated to display the [modal][] gets the [focus][] returned to the start of the page when the modal is dismissed.

```html
Code needed!
```

#### Failed Example 5
The page has a list of buttons that is activated to display a [modal][], the [focus][] is returned to the incorrect button on dismissing the modal.

```html
Code needed!
```

### Inapplicable

#### Inapplicable Example 1
TBC

```html
Code needed!
```

[focus]: #focused 'Definition of focused'
[modal]: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
