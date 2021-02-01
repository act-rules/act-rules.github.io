---
id: bisz58
name: '`meta` element has no refresh delay (no exception)'
rule_type: atomic
description: |
  This rule checks that the `meta` element is not used for delayed redirecting or refreshing.
accessibility_requirements:
  wcag20:2.2.4: # Interruptions (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:3.2.5: # Change on Request (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G110: # Using an instant client-side redirect
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H76: # Using meta refresh to create an instant client-side redirect
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

This rule applies to the first `meta` element in a document for which all the following are true:

- the element has an `http-equiv` [attribute value][] of `"refresh"`; and
- the element has a valid `content` [attribute value][], as described in the [meta refresh][] pragma directive.

## Expectation

For each test target, running the [shared declarative refresh steps][], given the target's document, the value of the target's `content` attribute, and the target results in _time_ is 0.

## Assumptions

- This rule assumes that no functionality was provided by the website for the user to adjust the timer.

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

## Background

- [Understanding Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)
- [Understanding Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html)
- [Understanding Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html)
- [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/general/G110)
- [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/TR/WCAG-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/TR/WCAG-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](https://www.w3.org/TR/WCAG-TECHS/F41.html)

## Test Cases

### Passed

#### Passed Example 1

This `meta` element redirects the user immediately. Users won't notice the change in context.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://w3c.org'" />
</head>
```

#### Passed Example 2

The first valid `meta` element redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3c.org" />
	<meta http-equiv="refresh" content="5; https://w3c.org" />
</head>
```

### Failed

#### Failed Example 1

This `meta` element refreshes the page after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30" />
</head>
```

#### Failed Example 2

This `meta` element redirects the user after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30; URL='https://w3c.org'" />
</head>
```

#### Failed Example 3

The first `meta` element is not valid (because of the colon instead of a semi-colon in the `content` attribute), the second one redirects after 5 seconds.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3c.org" />
	<meta http-equiv="refresh" content="5; https://w3c.org" />
</head>
```

#### Failed Example 4

This `meta` element redirects the user after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; http://example.com" />
</head>
```

### Inapplicable

#### Inapplicable Example 1

This `meta` element has no `content` attribute.

```html
<head>
	<meta http-equiv="refresh" />
</head>
```

#### Inapplicable Example 2

This `meta` element has no `http-equiv="refresh"` attribute.

```html
<head>
	<meta content="30" />
</head>
```

#### Inapplicable Example 3

This `meta` element has an invalid `content` attribute (because of the colon instead of a semi-colon), and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="0: http://example.com" />
</head>
```

#### Inapplicable Example 4

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="-00.12 foo" />
</head>
```

#### Inapplicable Example 5

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="; 30" />
</head>
```

#### Inapplicable Example 6

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="" />
</head>
```

#### Inapplicable Example 7

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="+5; http://w3c.org" />
</head>
```

#### Inapplicable Example 8

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3c.org'" />
</head>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
