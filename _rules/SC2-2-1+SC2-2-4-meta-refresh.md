---
name: Meta-refresh no delay
description: |
  This rule checks that the meta element is not used for delayed redirecting or refreshing.

success_criterion:
- 2.2.1 # Timing Adjustable
- 2.2.4 # Interruptions
- 3.2.5 # Change on Request

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
- Wilco Fiers
---

## Test procedure

### Applicability

The rule applies to the first [valid](https://www.w3.org/TR/html/document-metadata.html#statedef-http-equiv-refresh) `<meta http-equiv="refresh">` element with a `content` attribute in a document.

### Expectation

The `time` of the `content` attribute is 0 or bigger than 72000 (20 hours).

**Note**: See [Refresh state (`http-equiv="refresh"`)](https://www.w3.org/TR/html/document-metadata.html#statedef-http-equiv-refresh) for a precise description on how to determine the `time`.

## Assumptions  

* This test assumes no functionality was provided by the website for the user to adjust the timer. 
* This test assumes that the refresh was not [essential](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html#essentialdef), which is listed as a valid exception to SC 2.2.1.

## Accessibility Support 

There are no major accessibility support issues known for this rule.

## Background  

- [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/TR/WCAG-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/TR/WCAG-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](https://www.w3.org/TR/WCAG-TECHS/F41.html)

## Test Cases

### Passed

#### Passed example 1

Redirects immediately.

```html
  <head>           
    <meta data-rule-target http-equiv="refresh" content="0; URL='https://auto-wcag.github.io/auto-wcag/'" />    
  </head>  
```

#### Passed example 2

First valid `<meta http-equiv="refresh">` redirects immediately.

```html
<head>
  <meta data-rule-target http-equiv="refresh" content="0; http://example.com" />
  <meta data-rule-target http-equiv="refresh" content="5; http://example.com" />
</head>
```

#### Passed example 3

Redirects after 20 hours.

```html
<head>
  <meta data-rule-target http-equiv="refresh" content="72000; http://example.com" />
</head>
```

### Failed

#### Failed example 1

Refreshes after 30 seconds.

```html
<head>
	<meta data-rule-target http-equiv="refresh" content="30">
</head>
```

#### Failed example 2

Redirects after 30 seconds.

```html
<head>
	<meta data-rule-target http-equiv="refresh" content="30; URL='https://auto-wcag.github.io/auto-wcag/'">
</head>
```

#### Failed example 3

First `<meta http-equiv="refresh">` element is not valid, second one redirects after 5 seconds.

```html
<head>
  <meta data-rule-target http-equiv="refresh" content="0: http://example.com" />
  <meta data-rule-target http-equiv="refresh" content="5; http://example.com" />
</head>
```

### Inapplicable

#### Inapplicable example 1

No `content` attribute.

```html
<head>
	<meta data-rule-target http-equiv="refresh">
</head>
```

#### Inapplicable example 2

No `http-equiv="refresh"` attribute.

```html
<head>
	<meta data-rule-target content="30">
</head>
```

#### Inapplicable example 3

`content` attribute is invalid and therefore inapplicable.

```html
<head>
  <meta data-rule-target http-equiv="refresh" content="0: http://example.com" />
</head>
```

#### Inapplicable example 4

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta data-rule-target http-equiv=refresh content="-00.12 foo">
</head>
```

#### Inapplicable example 5

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta data-rule-target http-equiv="refresh" content="; 30">
</head>
```

#### Inapplicable example 6

`content` attribute is invalid and therefore inapplicable.
```html
<head>
	<meta data-rule-target http-equiv="refresh" content="">
</head>
```

#### Inapplicable example 7

`content` attribute is invalid and therefore inapplicable.

```html
<head>
  <meta data-rule-target http-equiv="refresh" content="+5; http://example.com">
</head>
```

#### Inapplicable example 8

`content` attribute is invalid and therefore inapplicable.

```html
<head>           
  <meta data-rule-target http-equiv="refresh" content="foo; URL='https://auto-wcag.github.io/auto-wcag/'" />    
</head>
```
