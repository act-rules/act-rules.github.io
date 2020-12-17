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

This rule applies to the first [valid](https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh) `<meta http-equiv="refresh">` element with a `content` attribute in a document.

## Expectation

The `time` of the `content` attribute is 0.

See the definition of the [Refresh state (`http-equiv="refresh"`)](https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh) for a precise description on how to determine the `time`.

## Assumptions

- This rule assumes that no functionality was provided by the website for the user to adjust the timer.

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. This can cause redirects to happen in some browsers, but not in others. This can cause some pages to pass this rule, while still having a redirect in a minority of web browsers.

## Background

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
	<meta http-equiv="refresh" content="0; http://w3c.org" />
	<meta http-equiv="refresh" content="5; http://w3c.org" />
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
	<meta http-equiv="refresh" content="0: http://w3c.org" />
	<meta http-equiv="refresh" content="5; http://w3c.org" />
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
