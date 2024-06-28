---
id: bisz58
name: Meta element has no refresh delay (no exception)
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
  wcag20:2.2.1: # Timing Adjustable (A)
    secondary: This success criterion is **less strict** than this rule. This is because this criterion allows redirects longer than 20 hours. Some of the failed examples satisfy this success criterion.
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
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

For each target, the _time_ from the content [attribute value][] is 0. To determine the _time_, run the [shared declarative refresh steps][] on the `meta` element as described in the [HTML refresh state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-refresh).

## Assumptions

- This rule assumes that no functionality was provided by the website for the user to adjust the timer.

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

## Background

The `meta http-equiv="refresh"` directive is an HTML tag used to instruct browsers to automatically refresh or reload a web page after a specified time interval. This can be useful for updating content dynamically or redirecting users to another page.

The `content` attribute in the `meta http-equiv="refresh"` directive is used to define the time interval, in seconds, after which the browser should automatically refresh or reload the web page. For example, `content="5"` would instruct the browser to refresh the page every 5 seconds. Careful consideration of the refresh interval is crucial to ensure optimal user experience and accessibility, particularly for individuals who may require more time to consume or interact with web content.

Because a refresh with a timing of 0 is effectively a redirect, it is exempt from this rule. Since refreshing the same page with a time of 0 can cause rapid screen flashes it is strongly recommended to avoid this.

### Bibliography

- [Understanding Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [Understanding Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html)
- [Understanding Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html)
- [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG22/Techniques/general/G110)
- [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/TR/WCAG-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/TR/WCAG-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](https://www.w3.org/TR/WCAG-TECHS/F41.html)

## Test Cases

### Passed

#### Passed Example 1

This `meta` element redirects the user immediately. Users won't notice the change in context.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://w3.org'" />
</head>
```

#### Passed Example 2

The first valid `meta` element redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3.org" />
	<meta http-equiv="refresh" content="30; https://w3.org" />
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

This `meta` element redirects the user after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; URL='https://w3.org'" />
</head>
```

#### Failed Example 3

The first `meta` element is not valid (because of the colon instead of a semi-colon in the `content` attribute), the second one redirects after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
	<meta http-equiv="refresh" content="72001; https://w3.org" />
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
	<meta content="72001" />
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
	<meta http-equiv="refresh" content="; 72001" />
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
	<meta http-equiv="refresh" content="+72001; http://w3.org" />
</head>
```

#### Inapplicable Example 8

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3.org'" />
</head>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
