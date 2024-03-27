---
id: bc659a
name: Meta element has no refresh delay
rule_type: atomic
description: |
  This rule checks that the `meta` element is not used for delayed redirecting or refreshing.
accessibility_requirements:
  wcag20:2.2.1: # Timing Adjustable (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.2.4: # Interruptions (AAA)
    secondary: This success criterion is **more strict** than this rule. This is because the rule allows redirects longer than 20 hours. Some of the passed examples do not satisfy this success criterion.
  wcag20:3.2.5: # Change on Request (AAA)
    secondary: This success criterion is **more strict** than this rule. This is because the rule allows redirects longer than 20 hours. Some of the passed examples do not satisfy this success criterion.
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
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
    - Wilco Fiers
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

For each target, the _time_ from the content [attribute value][] is either 0 or more than 72000 (20 hours). To determine the _time_, run the [shared declarative refresh steps][] on the `meta` element as described in the [HTML refresh state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-refresh).

## Assumptions

- This rule assumes no functionality was provided by the website for the user to adjust the timer.
- This rule assumes that the refresh was not [essential](https://www.w3.org/TR/WCAG22/#dfn-essential), which is listed as a valid exception to [2.2.1 Time Adjustable][sc221].

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

## Background

The `meta http-equiv="refresh"` directive is an HTML tag used to instruct browsers to automatically refresh or reload a web page after a specified time interval. This can be useful for updating content dynamically or redirecting users to another page.

The `content` attribute in the `meta http-equiv="refresh"` directive is used to define the time interval, in seconds, after which the browser should automatically refresh or reload the web page. For example, `content="5"` would instruct the browser to refresh the page every 5 seconds. Careful consideration of the refresh interval is crucial to ensure optimal user experience and accessibility, particularly for individuals who may require more time to consume or interact with web content.

Because a refresh with a timing of 0 is a redirect, it is exempt from this rule. Since this can cause rapid screen flashes it is strongly recommended to avoid this.

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

This page redirects to a new page immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://github.com'" />
</head>
```

#### Passed Example 2

The first valid `meta` element on this page redirects to a new page immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
```

#### Passed Example 3

This page redirects after more than 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; https://w3.org" />
</head>
```

### Failed

#### Failed Example 1

This page refreshes after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30" />
</head>
<body>
	<p>This page refreshes after 30 seconds.</p>
</body>
```

#### Failed Example 2

This page redirects to a new page after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30; URL='https://w3.org'" />
</head>
<body>
	<p>This page redirects afte 30 seconds.</p>
</body>
```

#### Failed Example 3

The first `meta` element on this page is not valid because it uses colon (":") rather than semicolon (";"). The second `meta` element redirects to a new page after 5 seconds.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
<body>
	<p>This page refreshes after 5 seconds.</p>
</body>
```

#### Failed Example 4

This page redirects to a new page after exactly 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72000; https://w3.org" />
</head>
<body>
	<p>This page redirects after exactly 20 hours.</p>
</body>
```

### Inapplicable

#### Inapplicable Example 1

This page will not refresh because it lacks a `content` attribute.

```html
<head>
	<meta http-equiv="refresh" />
</head>
<body>
	<p>This page does not refresh.</p>
</body>
```

#### Inapplicable Example 2

This page will not refresh because it lacks a `http-equiv` attribute.

```html
<head>
	<meta content="30" />
</head>
<body>
	<p>This page does not refresh.</p>
</body>
```

#### Inapplicable Example 3

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
</head>
<body>
	<p>This page does not redirect.</p>
</body>
```

#### Inapplicable Example 4

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="-00.12 foo" />
</head>
<body>
	<p>This page does not refresh.</p>
</body>
```

#### Inapplicable Example 5

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="; 30" />
</head>
<body>
	<p>This page does not refresh.</p>
</body>
```

#### Inapplicable Example 6

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="" />
</head>
<body>
	<p>This page does not refresh.</p>
</body>
```

#### Inapplicable Example 7

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="+5; https://w3.org" />
</head>
<body>
	<p>This page does not redirect.</p>
</body>
```

#### Inapplicable Example 8

This 'meta' element contains an invalid `content` attribute and will not refresh the page.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3.org'" />
</head>
<body>
	<p>This page does not redirect.</p>
</body>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[sc221]: https://www.w3.org/TR/WCAG22/#timing-adjustable 'WCAG 2.2 Success Criterion 2.2.1 Timing Adjustable'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
