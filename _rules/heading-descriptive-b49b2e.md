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
- [Understanding Success Criterion 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG21/Understanding/section-headings)
- [Use headings to convey meaning and structure](https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed (Situation A)
Headings that are compliant under this criterion, while exhibiting no other accessibility or structural failures under WCAG.

#### Passed Example 1
This `h1` element provides a relevant heading that states the functional purpose of the page content.
```html
	<h1>Renew Your Passport Online</h1>
	<!-- Followed by a page that has instructions, images, and a form about how to make the renewal application -->
```

#### Passed Example 2
This `h1` element provides a relevant heading for the marketing content that follows it.
```html
  <h1>Fresh deals just dropped: Printers</h1>
  <!-- Followed by a carousel displaying newly arrived printers on a shopping website -->
```

#### Passed Example 3
This `h1` element provides a relevant heading for the informational data that follows it.
```html
	<h1>Current Weather in New York</h1>
	<!-- Followed by a data table that contains info about the weather forecast -->
```

### Passed (Situation B)
Headings that serve as structural or sequential identifiers, which are inherently compliant regardless of the specific content that follows.
Similarly:  
- Headings denoting standard document sections – such as "Glossary," "Summary," or "Appendix" – are inherently compliant, unless an obvious error is observed.
- Headings serving as call-to-action items, reminders, or warnings followed by list items or other relevant content – such as "Don't Forget To:", "Please Bring...", or "Doors are closed at 10:00 pm sharp!" – are considered compliant, unless a clear contextual mismatch is observed (such as appearing on an unrelated page).

#### Passed Example 4
This `h1` element provides a sequential identifier for a major document section. The content that follows makes no difference to the outcome of this test.
```html
	<h1>Chapter 4</h1>
	<!-- Any content -->
```

#### Passed Example 5
This `h1` element provides a structural identifier for a section of a musical work. The content that follows makes no difference to the outcome of this test, unless an obvious misplacement is observed.
```html
	<h1>1st movement</h1>
	<!-- The content that follows describes the mood of the first movement of a symphony -->
```

#### Passed Example 6
This `h1` element is for a standard document section. The content that follows makes no difference unless an obvious error indicates it is not a glossary section.
```html
	<h1>Glossary</h1>
	<!-- Terms and explanations of them -->
```

#### Passed Example 7
This `h1` element is a reminder heading. The content that follows makes no difference unless a clear contextual mismatch indicates it belongs on another page.
```html
	<h1>Don't Forget To Bring:</h1>
	<!-- The content that follows is an items list -->
```

### Passed (Situation C)
Headings that are compliant under this criterion, despite exhibiting other accessibility or structural failures under WCAG.

#### Passed Example 8
This `h1` element provides a relevant heading that states the purpose of the page content. It passes this rule despite exhibiting other WCAG failures, such as hiding the text from assistive technologies and having a severely low contrast ratio.
```html
	<h1 style="color: darkgrey; background-color: black;" aria-hidden="true">Your Future Starts Here, at Our University</h1>
	<!-- Followed by the name of the university and some other promotional content -->
```

#### Passed Example 9
Because this `p` element looks like a heading, it is perceived as a heading. It passes this rule as its text is relevant, despite failing other WCAG criteria due to using changes in text presentation without using the appropriate markup and utilizing an invalid ARIA role and value.
```html
	<p class="h1" role="headline">A Million Different Journeys</p>
	<!-- Followed by the home page of a travel website that advertises their services -->
```

#### Passed Example 10
Because this `img` element is visually presented as a heading, it is perceived as a heading. It passes this rule as its text is relevant, despite failing other WCAG criteria by relying entirely on an image of text and lacking an accessible name.
```html
	<!-- The image of text below is large and reads "Today’s Mortgage Rates at Our Bank" -->
	<img src="image-of-text.png" style="max-width: 100%; height: auto;" alt="" />
	<!-- Followed by a data table showing different rates for different amortizations -->
```

### Passed (Situation D)
Headings that are compliant under this criterion by remaining meaningful and relevant, irrespective of whether they could be optimized for length, contain redundant phrasing, are entirely unnecessary, or provide editorially unnecessary descriptions.

#### Passed Example 11
This `h1` element provides a relevant heading from which the purpose of the page content can be understood. It passes this rule despite being overly casual and including unnecessary details.
```html
	<h1>Welcome to Our State-of-the-art New Wizard That Will Mail Your Driver's Licence Home</h1>
	<!-- Followed by a page that has instructions, images, and a form about how to make the driver's licence renewal application -->
```

#### Passed Example 12
This `h1` element provides a relevant heading from which the purpose of the page content can be understood. It passes this rule despite containing completely redundant phrasing.
```html
	<h1>Travel Advisories and Travel Advisory Information</h1>
	<!-- Followed by a page that contains a list of hyperlinks to sections about other countries -->
```

#### Passed Example 13
This `h2` element accurately describes the content of the promotional banner that follows it. It passes this rule despite being entirely unnecessary, as it repeats the text of the accompanying `figcaption` element verbatim.
```html
	<h2>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites</h2>
	<figure>
		<img src="hotel-promo-banner.png" alt="Panoramic view of a mountain ski resort in winter, with the modern hotel facade illuminated in the foreground." />
		<figcaption>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites.</figcaption>
	</figure>
```

#### Passed Example 14
This `h2` element provides a relevant heading that accurately describes the content of the section. It passes this rule despite being editorially unnecessary because the following list of hyperlinks makes the purpose of the section immediately obvious. Although an alternative like "Links to External Resources" would provide better clarity, headings cannot be deemed non-compliant under this rule for merely stating the obvious, as such choices remain strictly within the editorial domain.
```html
	<h2>List of Links</h2>
	<!-- Followed by a list of links to external resources -->
```

### Passed (Situation E)

______________________ CHANGES MADE FINISH HERE _____________________________
