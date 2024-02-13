---
id: akn7bn
name: Iframe with interactive elements is not excluded from tab-order
rule_type: atomic
description: |
  This rule checks that `iframe` elements which contain an interactive (tabbable) element are not excluded from sequential focus navigation.
accessibility_requirements:
  wcag20:2.1.1: # Keyboard (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G202: # Ensuring keyboard control for all functionality
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any `iframe` element that is not [inert][] and that [contains](#akn7bn:contain) at least one element for which all the following are true:

- the element is [visible][]; and
- the element is part of the [sequential focus navigation order][] of the `iframe`'s [document][].

An element is <dfn id="akn7bn:contain">contained</dfn> in a [nested browsing context][] if its [owner document][] is the [container document][] of the [nested browsing context][].

## Expectation

The test target does not have a negative number as a `tabindex` [attribute value][].

## Assumptions

This rule assumes that interactive content inside `iframe` elements is used to provide functionality. If the interactive content does not provide functionality, for example a button that does nothing when clicked, [success criterion 2.1.1][sc211] may be satisfied, even if the rule is failed.

## Accessibility Support

There are no accessibility support issues known.

## Background

Setting the `tabindex` attribute of an `iframe` element to a negative value effectively excludes its content from the tab-order of the page. A `button` may be in the tab-order of an `iframe`, but if the `iframe` itself is taken from the tab-order, the `button` is effectively keyboard inaccessible.

Each document, including documents inside an `iframe`, has its own [sequential focus navigation order][]. These focus orders are combined to get the page's global tab-order (called the [flattened tabindex-ordered focus navigation scope][]). For an `iframe` with a negative tabindex, its sequential focus navigation order is not included in the page's global tab-order (as a consequence for the rules to build the [tabindex-ordered focus navigation scope][]).

### Bibliography

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Passed Example 2

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe tabindex="0" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Failed

#### Failed Example 1

This `iframe` element contains a [visible][] link that is part of its [sequential focus navigation order][], and has a negative `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Inapplicable

#### Inapplicable Example 1

This `iframe` element contains no content that is part of its [sequential focus navigation order][].

```html
<iframe tabindex="-1" srcdoc="<h1>Hello world</h1>"></iframe>
```

#### Inapplicable Example 2

This `iframe` element contains no [visible][] content because the iframe is hidden.

```html
<iframe tabindex="-1" hidden srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 3

This `iframe` element contains no [visible][] content because of the small size of the iframe.

```html
<iframe tabindex="-1" width="1" height="1" srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 4

This `iframe` element contains a link that is not part of its [sequential focus navigation order][] because of its own `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/' tabindex='-1'>Home</a>"></iframe>
```

#### Inapplicable Example 5

This `iframe` element is [inert][] because of its own `inert` [attribute value][].

```html
<iframe tabindex="-1" inert srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 6

Once the "Privacy policy details" button is activated, the `iframe` element becomes [inert][] because of the showModal() method, which causes the `iframe` to be [blocked by a modal].

```html
<iframe id="myFrame" title="Links" srcdoc="<a href='/'>Home</a>"></iframe>
<div>
	<button id="ppButton" onclick="openDialog()">Privacy policy details</button>
</div>
<dialog id="ppDialog" aria-labelledby="dialogLabel">
	<h2 id="dialogLabel">Privacy Policy</h2>
	<p>We store no data.</p>
	<button id="cancel" onclick="ppDialog.close()">Cancel</button>
</dialog>
<script>
	const openDialog = () => {
		ppDialog.showModal()
		myFrame.tabIndex = '-1'
	}
	ppDialog.addEventListener('close', () => (myFrame.tabIndex = 0))
	window.addEventListener('DOMContentLoaded', openDialog)
</script>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[blocked by a modal]: https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog
[container document]: https://html.spec.whatwg.org/#bc-container-document 'HTML browsing context container document, 2020/12/18'
[document]: https://html.spec.whatwg.org/multipage/dom.html#document 'HTML definition of document'
[flattened tabindex-ordered focus navigation scope]: https://html.spec.whatwg.org/multipage/interaction.html#flattened-tabindex-ordered-focus-navigation-scope 'HTML - Living Standard, 2022/07/08'
[inert]: #inert 'Definition of Inert'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/12/18'
[owner document]: https://dom.spec.whatwg.org/#dom-node-ownerdocument 'DOM node owner document property, 2020/12/18'
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'WCAG 2.2 Success criterion 2.1.1 Keyboard'
[sequential focus navigation order]: https://html.spec.whatwg.org/multipage/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/12/18'
[tabindex-ordered focus navigation scope]: https://html.spec.whatwg.org/multipage/interaction.html#tabindex-ordered-focus-navigation-scope
[visible]: #visible 'Definition of visible'
