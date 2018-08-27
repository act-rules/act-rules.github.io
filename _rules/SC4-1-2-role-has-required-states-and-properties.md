---
name: Role has required states and properties
description: |
  Elements that has a semantic role must also specify all required states and properties
  
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

Any HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an [explicit semantic role](#semantic-role). 

### Expectation

For each test target all [required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for that role as specified by [WAI-ARIA](https://www.w3.org/TR/wai-aria) are present and [non-empty](#non-empty).

**Note:** This rule does not test whether the required states and properties has a correct value, only that the attributes are present.

## Assumptions

This rule assumes that it is not sufficient to rely on browser support for [implicit values for roles](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole) to satisfy this accessibility requirement. Browsers should support implicit values for roles as per WAI-ARIA [values for states and properties](https://www.w3.org/TR/wai-aria/#state_prop_values): _“When a value is indicated as the default, the user agent MUST follow the behavior prescribed by this value when the state or property is empty or unspecified.”_ But WAI-ARIA also prescribes on [required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) that _“Content authors MUST provide a non-empty value for required states and properties. Content authors MUST NOT use the value undefined for required states and properties, unless undefined is an explicitly-supported value of that state or property."_ For this particular rule, the responsibility for living up to the accessibility requirement in these cases is placed with the content author. See more about the implications of this in the ”Accessibility Support” section for this rule.

## Accessibility Support

If browsers and/or assistive technologies supports leaving out [required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) if an [implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole) is specified in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole), failing this rule may not cause actual accessibility issues for users of assistive technologies. 

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
-  [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

```html
<!-- Element has required states (no properties required for this role) -->
<select role="option" aria-selected></select>
```

```html
<!-- Element has required properties (no states required for this role) -->
<div 
<select role="combobox" aria-controls="someElementId"></select>
```

### Failed

```html
<!-- Element does not list required states and properties (´aria-controls´ is required property for ´combobox´) -->
<select role="combobox"></select>
```

```html
<!-- Missing required state, 'aria-selected', for ´option´. It's not considered sufficient that 'aria-selected' has an implicit value (´false´) specified -->
<select role="option"></select>
```

### Inapplicable

```html
<!-- Element does not have a semantic role-->
<div>Some Content</div>
```
