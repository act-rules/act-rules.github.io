---
id: b4f0c3
name: meta viewport does not prevent zoom
rule_type: atomic
description: |
  This rule checks that the `meta` element is not used to block the user agent ability to zoom. 
accessibility_requirements:
  wcag21:1.4.4: # Resize text (AA)
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

The rule applies to each `<meta name="viewport">` element with a `content` attribute.

## Expectation

The `content` attribute of the test target: 
- either does not have the property `user-scalable` or has it set to yes; and
- does not have the property `maximum-scale`, or has it set to a value that prevents significant zooming. 

## Assumptions

- The [page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) has [visible](#visible) [content](https://www.w3.org/TR/WCAG21/#dfn-content).

## Accessibility Support

- Interpretation of `<meta name="viewport">` may vary with browsers, meaning browsers may override `user-scalable=no` and `maximum-scale=1` values to support gestures like pinch and zoom based interaction on permissible devices, thereby causing inconsistent behavior.

## Background

- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [The `meta` element](https://www.w3.org/TR/html52/document-metadata.html#the-meta-element)

## Test Cases

### Passed

#### Passed Example 1

The `<meta name="viewport">` element does not define the `maximum-scale` and `user-scalable` properties.

````html
<html>
  <head>
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

#### Passed Example 2

The `<meta name="viewport">` element defines the `user-scalable=yes` so the user can still zoom in.

````html
<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=yes">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

#### Passed Example 3

The `<meta name="viewport">` element with an empty `content` attribute.

````html
<html>
  <head>
    <meta name="viewport" content="">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

### Failed

#### Failed Example 1

The `<meta name="viewport">` element defines the `user-scalable=no` so the user can't zoom in.

````html
<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

#### Failed Example 2

The `<meta name="viewport">` element sets the `maximum-scale=1.0` so the user can't zoom in.

````html
<html>
  <head>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

#### Failed Example 3

The `<meta name="viewport">` element sets the `maximum-scale=2` so the user can't zoom in more than twice.

````html
<html>
  <head>
    <meta name="viewport" content="width=device-width, maximum-scale=2">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

### Inapplicable

#### Inapplicable Example 1

The `<meta name="viewport">` element is not present within the page.

````html
<html>
  <head>
    <meta http-equiv="refresh" content="0; URL='https://github.com'">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````

#### Inapplicable Example 2

The `<meta name="viewport">` element does not have `content` attribute.

````html
<html>
  <head>
    <meta name="viewport">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
````