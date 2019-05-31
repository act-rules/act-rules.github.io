---
title: Rule Template
---

The rule template contains a plain language description of the rule, some background information, and a list of all assumptions. The test procedure is defined by the selector, a number of steps and a description of the possible outcomes.

Use the [empty atomic rule template](atomic-template-empty.html) to create new rule. When creating a new rule, first read [rule design](rule-design.html).

## Atomic Rule Template

````md
---
id: 
name:
rule_type: atomic

description: |
  This rule checks ...

accessibility_requirements:
  wcag20:x.x.x: # (Name of Success Criterion)
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
    
input_aspects:
  -  # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)

authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation (1)

Each target element ...

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

<!-- Add an introduction if you want to add further information not available on another page -->

### Understanding WCAG 

<!-- Add links to understanding documents for all success criteria the rule maps to, either directly or through a composite rule. Remove if not applicable -->

- [WCAG 2.0 - Understanding 4.1.2: Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

### Related WCAG Techniques

<!-- Add links to related techniques. Remove if not applicable -->

- [G108: Using markup features to expose the name and role](https://www.w3.org/TR/WCAG20-TECHS/G108.html)

### Standards and Definitions

<!--
Add links to related specifications or definitions within those specifications. Remove if not applicable

- When linking to the entire specification, use the full name and number in the link text
- When linking to a section, use the abbreviated name and version number of the specification, as well as the chapter name and number
- When linking to a definition, use the abbreviated name and version number of the specification, followed by "definition:" and the definition term
-->

- [Accessible Rich Internet Applications 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA 1.1: 6. Supported States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
- [WCAG 2.1 definition: user interface component
](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components)

### Further Reading

<!-- Add links to related articles, blog posts, tools, other test suites, etc. Use the title of the article as a link text. Remove if not applicable -->

- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

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
````

## Composite Rules

Composite rules are rules that take results from different rules and through some logic come to a single result. For example: SC 1.2.3 allows video to pass with either a transcript, an audio description, or if it is a media alternative. Each of these would be atomic rules, that are used in a composite rule. The composite rule than describes that at least one of these must pass for the composite rule to pass.

For more about composite rules, see the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/#composed-rules). To create a composite rule, use the [empty composite rule template](./composite-template-empty.html).

### Composite Rule Template

````md
---
id: 
name:
rule_type: composite

description: |
  This rule checks ...

accessibility_requirements:
  wcag20:x.x.x: # (Name of Success Criterion)
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
  -

authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation

For each test target, the outcome of (at least one of / all of / any of etc.) the following rules is (passed / failed / etc.):

- [Rule name](relative_link_to_rule.html)
- ...

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

<!-- Add an introduction if you want to add further information not available on another page -->

### Understanding WCAG 

<!-- Add links to understanding documents for all success criteria the rule maps to, either directly or through a composite rule. Remove if not applicable -->

- [WCAG 2.0 - Understanding 4.1.2: Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

### Related WCAG Techniques

<!-- Add links to related techniques. Remove if not applicable -->

- [G108: Using markup features to expose the name and role](https://www.w3.org/TR/WCAG20-TECHS/G108.html)

### Standards and Definitions

<!--
Add links to related specifications or definitions within those specifications. Remove if not applicable

- When linking to the entire specification, use the full name and number in the link text
- When linking to a section, use the abbreviated name and version number of the specification, as well as the chapter name and number
- When linking to a definition, use the abbreviated name and version number of the specification, followed by "definition:" and the definition term
-->

- [Accessible Rich Internet Applications 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA 1.1: 6. Supported States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
- [WCAG 2.1 definition: user interface component
](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components)

### Further Reading

<!-- Add links to related articles, blog posts, tools, other test suites, etc. Use the title of the article as a link text. Remove if not applicable -->

- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

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
````
