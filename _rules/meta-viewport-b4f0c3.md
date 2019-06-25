---
id: b4f0c3
name: meta viewport
rule_type: atomic
description: |
  This rule checks that the meta element is not used to block the user agent ability to zoom. 
accessibility_requirements:
  wcag20:1.4.10: # Reflow (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Jey Nandakumar
  - Audrey Maniez
---

## Applicability

The rule applies to every `<meta name="viewport">` elements with a `content` attribute in a document.

## Expectation

The `content` attribute of the test target: 
- does not have the property `user-scalable` or it is set to `yes`and
- does not have the property `maximum-scale`. 

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- There may be some inconsistencies with how different browser vendors interpret `<meta name="viewport">`.

## Background

- [The `meta` element](https://www.w3.org/TR/html52/document-metadata.html#the-meta-element)

## Test Cases

### Passed

#### Passed Example 1

The `<meta name="viewport">` does not define the `maximum-scale` and `user-scalable` properties.

````html
<head>
	<meta name="viewport" content="width=device-width">
</head>
````

#### Passed Example 2

The `<meta name="viewport">` defines the `user-scalable=yes` so the user can still zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, user-scalable=yes">
</head>
````

#### Passed Example 3

The `<meta name="viewport">` with an empty `content` attribute.

````html
<head>
  <meta name="viewport" content="">
</head>
````

### Failed

#### Failed Example 1

The `<meta name="viewport">` defines the `user-scalable=no` so the user can't zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no">
</head>
````

#### Failed Example 2

The `<meta name="viewport">` sets the `maximum-scale=1.0` so the user can't zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, maximum-scale=1.0">
</head>
````

#### Failed Example 3

The `<meta name="viewport">` sets the `maximum-scale=2` so the user can't zoom in more than twice.

````html
<head>
  <meta name="viewport" content="width=device-width, maximum-scale=2">
</head>
````

### Inapplicable

#### Inapplicable Example 1

The `<meta name="viewport">` is not present within the page.

````html
<html>
  <head>
    <meta http-equiv="refresh" content="0; URL='https://github.com'">
  </head>
</html>
````
