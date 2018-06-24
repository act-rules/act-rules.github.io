---
name: Role has required states and properties
description: | Elements that has a semantic role must also specify all required states and properties
  
success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has a [semantic role](#semantic-role). 

### Expectation 1

For each test target all [required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for that role as specified by [WAI-ARIA](https://www.w3.org/TR/wai-aria) are present.

### Expectation 2

Each of the [required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) have a valid value according to the [value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value) for the given state or property as specified by [WAI-ARIA](https://www.w3.org/TR/wai-aria).

**Note:** 
- If the value of the required states and properties is of value type `ID Reference` or `ID Reference List` ensure that an element with the given id exists in the document. 
- If the value of the required states and properties is of value type `URI` ensure that it matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

## Assumptions

- Even though browsers and/or assistive technologies seem to support leaving out at least some [required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) if an [implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole) is specified in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole), we do not consider it enough to pass this rule, that WAI-ARIA specifies an implicit value for the required states or properties for a role.
- Checking that linked resources in required states or properties with value type `URI` are available is considered out of scope for this rule. For this rule it is considered sufficient that the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

## Accessibility Support

If browsers and/or assistive technologies supports leaving out [required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) if an [implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole) is specified in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole), failing this rule may not cause actual accessibility issues for users of assistive technologies. 

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
- [Overview of possible WAI-ARIA states and properties value types](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
-  [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

```html
<!-- Element has correct required states and properties -->
<div id="someElementId">...</div>
<select role="combobox" aria-controls=''someElementId"></select>
```

### Failed

```html
<!-- Element does not list required states and properties -->
<select role="combobox"></select>
```

```html
<!-- Element has wrong value type for required states and properties -->
<select role="combobox" aria-controls=''"></select>
```

### Inapplicable

```html
<!-- Element does not have a semantic role-->
<div>Some Content</div>
```
