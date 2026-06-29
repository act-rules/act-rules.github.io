---
id: b49b2e
name: Heading is relevant and meaningful
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks that headings are meaningful and they are relevant to a specific topic, purpose or page.
accessibility_requirements:
  wcag20:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Armagan Tekdoner
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability
This rule applies to any visible content that is perceived as a heading on a given page, as well as to any semantic heading element that is [included in the accessibility tree](included-in-the-accessibility-tree "Definition of included in the accessibility tree") while not visible. In other words, this rule applies to headings and their relation to the content, regardless of their compliance with any other accessibility criteria.

This rule requires that testing be limited to the wording in headings, in plain language.

### None of the following is within this rule's scope:
- Complete lack of headings
- Heading structure and hierarchy (incorrectly nested, skipped, or missing heading levels, or heading elements that do not follow a logical sequence)
- Source code errors, provided that the heading is visible or exposed to assistive technologies
- Grammar or spelling errors in headings, unless they render the text entirely unintelligible
- Styling and presentation, unless the styling renders the heading completely illegible
- Other accessibility failures covered by distinct WCAG success criteria, regardless of their severity

## Expectation
Each heading is relevant to the content on the page where it appears. This content may encompass the entire page, the section or paragraph immediately following the heading, or elements clustered within its visual or structural scope.

## Background
This rule evaluates any element that functions as a heading, including those perceived visually by sighted users or explicitly exposed as headings to assistive technologies. The scope encompasses fully accessible headings (e.g., `<h1>Meaningful and relevant heading</h1>`), visual headings that lack assistive technology support (e.g., `<p class="h1">Meaningful and relevant heading</p>`), and structural headings that are hidden from visual presentation (e.g., `<h1 class="visually-hidden">Meaningful and relevant heading</h1>`). While these varied implementations may simultaneously trigger failures under other WCAG success criteria, they are all equally applicable under this rule.

To pass, a heading must convey meaning and be relevant to its associated content. Headings consisting purely of non-default placeholder text or uninformative character strings fail this rule inherently. Under this rule, "content" refers to any textual or non-textual element presented on the web page, including sections, paragraphs, forms, user interface components, media galleries, lists, or hyperlinks.

### Assumptions
This rule assumes that the tester evaluating the content possesses the necessary language proficiency and contextual comprehension required to assess the relationship between the headings and their associated content. 

#### Limitations
The following scenarios present inherent limitations to evaluation, and the headings being tested may be deemed out of scope:
- Multilingual Content: Web pages containing content in multiple languages (e.g., a heading in one language preceding content in another) where the tester does not possess professional working proficiency in all languages present.
- Rapidly Changing or Real-Time Content Streams: Live, dynamic content fields (e.g., streaming data feeds, live social walls, or active chat interfaces) where the content updates at a rate that prevents static evaluation against its structural headings.
- Transient Loading States: Temporary layout interfaces, such as skeletal loaders or placeholder templates, where the final text content has not yet completely rendered in the Document Object Model (DOM).

#### Exceptions
The following scenarios constitute exceptions to this rule, as the contextual intent of the author cannot be objectively determined by a general evaluator:
- Highly Specialized or Technical Domains: Content involving advanced scientific, technical, or academic material (e.g., specialized research documentation) that requires domain-specific expertise.
- Abstract or Creative Works: Content consisting of creative literary works, poetry, or abstract text where relevance is interpretive or non-linear rather than purely informational.
- Legally Mandated or Standardized Boilerplate: Documents or user interfaces where the text and structure of headings are rigidly dictated by statutory, regulatory, or legal mandates (e.g., standardized privacy disclosures or government forms) and cannot be altered by the author.

### Accessibility Support
This rule is inherently subjective and relies entirely on human judgment; it is not intended for automated testing environments. Because evaluating the relevance of textual content is non-technical, findings may be subject to varying interpretations by individuals regardless of their technical background. Consequently, this rule is designed as a test-to-pass evaluation. Testers should default to a passing result unless an irrelevance or lack of meaning is obvious; any identified failure should be immediately apparent and acknowledgeable by the content creators or those familiar with the page context.

### Other Resources
- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [Understanding Success Criterion 2.4.10 Section Headings)](https://www.w3.org/WAI/WCAG21/Understanding/section-headings)
- [Use headings to convey meaning and structure](https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed (category 1)
Headings that are compliant under this criterion, while exhibiting no other accessibility or structural failures under WCAG.

#### Passed Example 1
This `h1` element provides a relevant heading that states the functional purpose of the page content.
```html
	<h1>Passport Renewal</h1>
	<!-- Followed by a page that has instructions, images and a form about how to make the renewal application -->
```

#### Passed Example 2
This `h1` element provides a relevant heading for the marketing content that follows it.
```html
	<h1>Fresh deals just dropped</h1>
	<!-- Followed by a carousel displaying newly arrived products on a shopping website -->
```

#### Passed Example 3
This `h1` element provides a relevant heading for the informational data that follows it.
```html
	<h1>Current Weather in New York</h1>
	<!-- Followed by a data table that contains icons and other legend -->
```

### Passed (category 2)
Headings that are compliant under this criterion, despite exhibiting other accessibility or structural failures under WCAG.

#### Passed Example 4
This `h1` element provides a relevant heading that states the purpose of the page content. It passes this rule despite exhibiting other WCAG failures, as the text is hidden from assistive technologies and has an insufficient contrast ratio.
```html
	<h1 style="color: darkgrey; background-color: black;" aria-hidden="true">Your Future Starts at Our University</h1>
	<!-- Followed by the name of the university and some other promotional content -->
```

#### Passed Example 5
This `p` element is perceived as a heading. It passes this rule because its text is relevant, despite failing other WCAG criteria by relying entirely on visual presentation to convey heading structure and utilizing an invalid ARIA role and value.
```html
	<p class="h1" role="headline">A Million Different Journeys</p>
	<!-- Followed by the home page of a travel website that advertises their services -->
```

#### Passed Example 6
This `img` element is perceived as a heading. It passes this rule because its text content is relevant, despite failing other WCAG criteria by lacking an accessible name.
```html
<!-- The image of text below is large and reads "Our Mortgage Interest Rates" -->
<img src="image-of-text.png" style="max-width: 100%; height: auto;" alt="" />
<!-- Followed by a data table showing different rates for different amortizations -->
```

### Failed

#### Failed Example 1

This `h1` heading element does not describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph.

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph. The heading is positioned off screen but is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p>
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

This `h1` heading element does not describe the first [perceivable content][] after it (the first `p` element). The next [perceivable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>It is going to rain tomorrow</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

This `h1` heading element is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 hidden>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

[decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships ' Success Criterion 1.3.1 Info and Relationships'
[sc246]: https://www.w3.org/TR/WCAG22/#headings-and-labels 'Success Criterion 2.4.6 Headings and Labels'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[perceivable content]: #perceivable-content 'Definition of perceivable content'
