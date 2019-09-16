---
id:
name:
rule_type: composite
description: |
  This rule checks ...

accessibility_requirements: # Remove whatever is not applicable
  wcag20:x.x.x: # <Name of Success Criterion> (A | AA | AAA)
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  aria11:x.x.x: # <Heading in WAI-ARIA>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  wcag-technique:x.x.x: # <Technique title>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

input_rules:
  -  # Include the ID of the rule

authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation (1)

For each test target, the outcome of (at least one of | all of | any of etc.) the following rules is (passed / failed / etc.):

- [Rule name](relative_link_to_rule.html)
- ...

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

<!-- Add an introduction, if you want to add further information not available on the pages you are linking to in this section. -->

### Understanding WCAG

<!-- Add links to understanding documents for all success criteria the rule maps to, either directly or through a composite rule. Remove if not applicable -->

- <!-- Example of a WCAG SC. REMOVE THIS LINK.--> [WCAG 2.1 - Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Related WCAG Techniques

<!-- Add links to related techniques. Remove if not applicable -->

- <!-- Example of a WCAG Technique. REMOVE THIS LINK. --> [G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G108)

### Standards and Definitions

<!-- 
Add links to related specifications or definitions within those specifications. Remove if not applicable

- When linking to the entire specification, use the full name and number in the link text
- When linking to a section, use the abbreviated name and version number of the specification, as well as the chapter name and number
- When linking to a definition, use the abbreviated name and version number of the specification, followed by "definition:" and the definition term
-->

- <!-- Example of a w3 standard. REMOVE THIS LINK. --> [Accessible Rich Internet Applications 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- <!-- Example of a w3 standard direct heading link. REMOVE THIS LINK. --> [WAI-ARIA 1.1: 6. Supported States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
- <!-- Example of a WCAG definition. REMOVE THIS LINK. --> [WCAG 2.1 definition: user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components)

### Further Reading

<!-- Add links to related articles, blog posts, tools, other test suites, etc. Use the title of the article as a link text. Remove if not applicable -->

- <!-- Example of an article. REMOVE THIS LINK. -->[Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Test Cases

### Passed

#### Passed Example 1

Description...

```html
<!-- code -->
```

#### Passed Example 2

...

### Failed

#### Failed Example 1

Description...

```html
<!-- code -->
```

#### Failed Example 2

...

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

#### Inapplicable Example 2

...
