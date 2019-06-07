---
id: b4f0c3
name: meta viewport
rule_type: atomic
description: |
  This rule checks that the meta element is not used to block the user agent ability to zoom 
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

The rule applies to the first valid `<meta name="viewport">` element with a `content` attribute in a document.

## Expectation

The `content` attribute of the test target: 
- do not have the property `user-scalable` or it is set to `yes`
- do not have the property `maximum-scale` 

## Assumptions

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [The `meta` element](https://www.w3.org/TR/html52/document-metadata.html#the-meta-element)

## Test Cases

### Passed

#### Passed Example 1

The meta `viewport` do not define the `maximum-scale` and `user-scalable` properties.

````html
<head>
	<meta name="viewport" content="width=device-width" />
</head>
````

#### Passed Example 2

The meta `viewport` define the `user-scalable` so the user can still zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, user-scalable=yes" />
</head>
````

#### Passed Example 3

The meta `viewport` with an empty `content` attribute.

````html
<head>
  <meta name="viewport" content="" />
</head>
````

### Failed

#### Failed Example 1

The meta `viewport` define the `user-scalable` so the user can't zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no" />
</head>
````

#### Failed Example 2

The meta `viewport` set the `maximum-scale` to 1 so the user can't zoom in.

````html
<head>
  <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
</head>
````

#### Failed Example 3

The meta `viewport` set the `maximum-scale` to 2 so the user can't zoom in more than twice.

````html
<head>
  <meta name="viewport" content="width=device-width, maximum-scale=2" />
</head>
````

### Inapplicable

#### Inapplicable Example 1

The meta `viewport` is not present in the `<head>`.

````html
<head>
  <meta http-equiv="refresh" content="0; URL='https://github.com'" />
</head>
````