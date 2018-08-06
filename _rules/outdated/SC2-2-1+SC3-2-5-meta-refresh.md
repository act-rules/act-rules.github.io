---
name: Meta-refresh no delay
description: |
  This rule checks that the meta element is not used for delayed redirecting or refreshing.

success_criterion:
- 2.2.1 # Timing Adjustable
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

```html
<!-- redirects immediately -->
  <head>           
    <meta http-equiv="refresh" content="0; URL='https://auto-wcag.github.io/auto-wcag/'" />    
  </head>  
```

```html
<!-- first valid <meta http-equiv="refresh"> redirects immediately  -->
<head>
  <meta http-equiv="refresh" content="0; http://example.com" />
  <meta http-equiv="refresh" content="5; http://example.com" />
</head>
```

```html
<!-- redirects after 20 hours -->
<head>
  <meta http-equiv="refresh" content="72000; http://example.com" />
</head>
```

### Failed

```html
<!-- refreshes after 30 seconds -->
<head>
<meta http-equiv="refresh" content="30">
</head>
```

```html
<!-- redirects after 30 seconds -->
<head>
<meta http-equiv="refresh" content="30; URL='https://auto-wcag.github.io/auto-wcag/'">
</head>
```

```html
<!-- first <meta http-equiv="refresh"> element is not valid, second one redirects after 5 seconds -->
<head>
  <meta http-equiv="refresh" content="0: http://example.com" />
  <meta http-equiv="refresh" content="5; http://example.com" />
</head>
```

### Inapplicable
```html
<!-- no content attribute -->
<head>
<meta http-equiv="refresh">
</head>
```

```html
<!-- no http-equiv="refresh" attribute -->
<head>
<meta content="30">
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>
  <meta http-equiv="refresh" content="0: http://example.com" />
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>
<meta http-equiv=refresh content="-00.12 foo">
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>
<meta http-equiv="refresh" content="; 30">
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>
<meta http-equiv="refresh" content="">
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>
  <meta http-equiv="refresh" content="+5; http://example.com">
</head>
```

```html
<!-- content attribute is invalid and therefore inapplicable. -->
<head>           
  <meta http-equiv="refresh" content="foo; URL='https://auto-wcag.github.io/auto-wcag/'" />    
</head>
```
