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

The rule applies to any `content` attribute in a `meta` element that contains the `http-equiv` attribute with value `"refresh"` (case-insensitive).

### Expectation

The value before the first semicolon or comma (representing seconds) of the value of the `content` attribute is not a number greater than 0.

**Note**: Semi-colon or comma is optional in the `content` attribute. When none is present, the value of the attribute should be considered as a whole. See [meta-refresh](https://www.w3.org/TR/html51/document-metadata.html#statedef-http-equiv-refresh) for parsing instructions.

 ## Assumptions  

- This test assumes no functionality was provided by the website for the user to adjust the timer. 

## Accessibility Support 

There are no major accessibility support issues known for this rule.

 ## Background  

- H76: Using meta refresh to create an instant client-side redirect
- F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit
- F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out

## Test Cases

### Passed

```html
  <head>           
    <meta http-equiv="refresh" content="0; URL='https://auto-wcag.github.io/auto-wcag/'" />    
  </head>  
```

```html
  <head>           
    <meta http-equiv="refresh" content="foo; URL='https://auto-wcag.github.io/auto-wcag/'" />    
  </head>  
```

```html
<head>
<meta http-equiv=refresh content=" -00.12 foo">
</head>
```

```html
<head>
<meta http-equiv="refresh" content="; 30">
</head>
```

### Failed

```html
<head>
<meta http-equiv="refresh" content="30">
</head>
```
```html
<head>
<meta http-equiv="refresh" content="30; URL='https://auto-wcag.github.io/auto-wcag/'">
</head>
```

### Inapplicable
```html
<head>
<meta http-equiv="refresh">
</head>
```

```html
<head>
<meta http-equiv="">
</head>
```

```html
<head>
<meta content="30">
</head>
```

```html
<head>
<meta>
</head>
```
