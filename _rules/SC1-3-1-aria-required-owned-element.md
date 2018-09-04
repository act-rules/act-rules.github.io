---
name: ARIA required owned elements

description: |
	The rule checks existence of role(s) on required owned elements.

success_criterion:
- 1.3.1

test_aspects:
- DOM Tree

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to any element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) with a [non empty](#non-empty) `role` attribute whose value is applicable to required owned elements.

**Note:** I

### Expectation

Each target element has atleast one owned element with a relevant `role` attribute.

## Assumptions

*There are currently no assumptions/ add any assumptions as necessary*

## Accessibility Support

*There are no major accessibility support issues known for this rule/ or add any support details as necessary*

## Background

- [Required Owned Element](https://www.w3.org/TR/wai-aria-1.1/#mustContain)

## Test Cases

### Passed

#### Pass example 1

Owned `ul` element with role `list` has `span` element with role `listitem`.

```html
<ul role='list'>
	<span role='listitem'>
	</span>
	<span>
		<!-- atleast one element is expected have a role, not mandatory on all children -->
	</span>
</ul>
```

#### Pass example 2

Owned `ol` element with role `tablist` has `li` element with role `tab`.

```html
<ol role='tablist'>
	<li role='tab'>
	</li>
</ol>
```

#### Pass example 3

Owned `ul` element with role `list` has `li` element which has an implcit semantic role.

```html
<ul role='list'>
	<li></li> <!-- implicit role -->
</ul>
```

#### Pass example 4

Multiple owned elements with relevant nested roles.

```html
<table role='grid'>
	<tr role='row'>
		<span role='cell'>
		</span>
	</tr>
</table>
```

#### Pass example 5

Multiple satisfying roles on owned element(s).

```html
<ul role='menu'>
	<li></li> <!-- implicit role -->
	<li role='menuitem'></li>
	<li role='menuitemradio'></li>
</ul>
```

### Failed

#### Fail example 1

Missing role on owned element children.

```html
<ul role='list'>
	<span>
	</span>
</ul>
```

#### Fail example 2

Owned `ol` element with role `tablist` has `li` element with wrong role `listitem`.

```html
<ol role='tablist'>
	<li role='listitem'>
	</li>
</ol>
```

### Inapplicable

#### Inapplicable example 1

Element is not exposed to assistive technologies.

```html
<ul role='list' aria-hidden='true'>
	<li></li>
</ul>
```

#### Inapplicable example 2

Element has empty role.

```html
<ul role=''>
	<li></li>
</ul>
```