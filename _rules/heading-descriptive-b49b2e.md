---
id: b49b2e
name: Heading is relevant
rules_format: 1.1
rule_type: atomic
description:
  This rule checks that headings are relevant to a specific topic, purpose or page.
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
    - Armağan Tekdöner
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [semantic](semantic-role "Definition of semantic role") `heading` element that is [included in the accessibility tree](included-in-the-accessibility-tree "Definition of included in the accessibility tree") and has a non-empty `""` [accessible name](accessible-name "Definition of accessible name"). It also applies to other elements that are not semantically `heading` elements, but that are presented as headings.

### Applicability Type Designation

Rule contains subjective applicability, depending on whether the target element should be considered a heading.

## Expectations

Each heading is relevant to the specific page or section where it appears and it is sufficiently intelligible.

## Background

Headings are normally marked as semantic headings using `<h1>` to `<h6>` elements or using generic elements with correct ARIA roles that convert them into semantic headings. On the other hand, on websites that are not adhering to HTML5 semantic coding practices, or that are intended to apply semantics in the code while containing errors in the usage of ARIA roles for example, other elements can be observed that function as headings. Sometimes a heading is a list item, sometimes a figcaption, sometimes a table caption, sometimes another element that is not normally a heading.

Under this rule, "content" refers to any textual or non-textual element presented on the web page, including sections, paragraphs, forms, user interface components, media galleries, lists, or hyperlinks.

To pass, a heading must be relevant to its associated content. (Headings consisting of placeholder text or uninformative character strings fail this rule inherently.)

### Assumptions

The limitations for the evaluation are live, dynamic content fields (e.g., streaming data feeds, live social walls, or active chat interfaces) where the content updates at a rate that prevents static evaluation against its structural headings or content that is highly specialized, academic, or artistic are exceptions when the evaluator does not possess the necessary know-how to determine whether the heading is relevant.

This rule is designed as a test-to-pass evaluation and failures should be reserved for obviously non-compliant cases. Testers should default to a passing or not applicable result when in doubt.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [Understanding Success Criterion 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG21/Understanding/section-headings)
- [Use headings to convey meaning and structure](https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Examples

### Passed

#### Passed Example 1
An `h1` element is followed by a page that has instructions about how to make the renewal application and an application form.
This `h1` element states the functional purpose of the page content.
```html
<h1>Renew Your Passport Online</h1>
```

#### Passed Example 2
An `h1` element is followed by a carousel displaying newly arrived printers on a shopping website.
This `h1` element contains a heading about the marketing content that follows it.
```html
<h1>Fresh deals just dropped: Printers</h1>
```

#### Passed Example 3
An `h2` element precedes a data table that contains info about the weather forecast.
This `h2` element is a relevant heading for the informational data that follows it.
```html
<h2>Current Weather in New York</h2>
```

#### Passed Example 4
Headings denoting standard document sections – such as "Glossary," "Summary," or "Appendix" – are inherently compliant, unless an obvious error is observed.
This `h2` element contains a structural identifier of the order of content sections. The content that follows makes no difference to the outcome of this test.
```html
<h2>Chapter 4</h2>
```

#### Passed Example 5
This `h2` element contains a structural identifier for a section of a musical work. The content that follows makes no difference to the outcome of this test, unless an obvious misplacement is observed.
```html
<h2>1st movement</h2>
```

#### Passed Example 6
This `h3` element is for a standard document section, preceding terms and explanations of them.
```html
<h3>Glossary</h3>
```

#### Passed Example 7
This `h1` element contains an important reminder for users. The content that follows makes no difference, unless there is a clear contextual mismatch, i.e. the content clearly belongs on another page.
```html
<h1>Don't Forget To Bring:</h1>
```

#### Passed Example 8
An `h1` element precedes the name of a university and some other promotional content.
This `h1` element contains a relevant heading to the page content. It passes this rule despite exhibiting another WCAG failure for having a severely low contrast ratio.
```html
<h1 style="color: darkgrey; background-color: black;">Your Future Starts Here, at Our University</h1>
```

#### Passed Example 9
The home page of a travel website that advertises their services. The heading content is contained in a `p` element,  but its presentation style is intended to be perceived visually as a heading.
The heading passes this rule as its content is relevant and descriptive, despite failing other WCAG criteria due to using changes in text presentation without using the appropriate markup and utilizing an invalid ARIA role and value.
```html
<p class="h1" role="headline">A Million Different Journeys</p>
```

#### Passed Example 10
There is large image of text that reads "Today’s Mortgage Rates at Our Bank", which is followed by a data table showing different rates for different amortizations.
Because this `img` element is visually presented as a heading, it is perceived as a heading. It passes this rule as its text is relevant, despite failing other WCAG criteria by relying entirely on an image of text and lacking an accessible name.
```html
<img src="image-of-text.png" style="max-width: 100%; height: auto;" alt="" />
```

#### Passed Example 11
Headings that are compliant under this criterion by remaining relevant or descriptive, irrespective of whether they could be optimized for length, contain redundant phrasing, are entirely unnecessary, or provide editorially unnecessary descriptions.
An `h1` element precedes a page that has instructions, images, and a form about how to make the driver's licence renewal application. This `h1` element contains a heading from which the purpose of the page content can be understood. It passes this rule despite being overly casual and including unnecessary details.
```html
<h1>Welcome to Our State-of-the-art New Wizard That Will Mail Your Driver's Licence Home</h1>
```

#### Passed Example 12
This `h1` element contains a heading from which the purpose of the page content can be understood. It passes this rule as its meaning or efficacy of the description despite containing completely redundant phrasing.
```html
<h1>Travel Advisories and Travel Advisory Information</h1>
<!-- Followed by a page that contains a list of hyperlinks to sections about other countries -->
```

#### Passed Example 13
This `h2` element describes the content of the promotional banner that follows it. It passes this rule despite it repeats the text of the accompanying `figcaption` element verbatim and the redundant tooltip.
```html
<h2>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites</h2>
<figure>
  <img title="Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites." src="hotel-promo-banner.png" alt="Panoramic view of a mountain ski resort in winter, with the modern hotel facade illuminated in the foreground." />
  <figcaption>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites.</figcaption>
</figure>
```

#### Passed Example 14
The section that precedes the `h2` element contains an unordered list of hyperlinks.
This `h2` element provides a relevant heading that describes the content of the section. It passes this rule despite being editorially unnecessary because the following list of hyperlinks makes the purpose of the section immediately obvious. Although an alternative like "Useful Links to External Resources" would provide better clarity, headings cannot be deemed non-compliant under this rule for merely stating the obvious, as such choices remain strictly within the editorial domain.
```html
<h2>List of Links</h2>
```

#### Passed Example 15
This `h2` element uses a satirical or metaphorical phrase to introduce the topic. Although the heading text does not seem to match the vocabulary of the section, its contextual relevance becomes evident when considering the immediate context that follows, which is an analysis article about inflation, explaining how long-term economic trends cause prices to rise continuously. Headings that use literary devices remain compliant under this rule, as the determination of tone or stylistic approach falls within the editorial domain.
```html
<h2>Final Day for Savings</h2>
<p>Everything will be more expensive tomorrow.</p>
```

#### Passed Example 16
A heading for an opinion piece that provides statistics regarding active global conflicts and advocates for international peace.
This `h1` element employs irony to introduce the topic. Although the heading text does not explicitly reference the literal vocabulary of the section, its contextual relevance becomes evident when the primary purpose of the content is determined. Headings that utilize literary or stylistic devices remain compliant under this rule, as the determination of editorial tone falls outside the scope of accessibility evaluation.
```html
<h1>Nobel's Peace Prize Office is Temporarily Closed Due to Declining Business</h1>
```

#### Passed Example 17
This `h3` element employs an interrogative structure to introduce the section topic. Although the heading itself asks a question rather than providing a direct declaration, its contextual relevance becomes immediately evident upon evaluating the concise response that follows in the immediate text. 
```html
<h3>Opening hours?</h3>
<p>24/7</p>
<p>No opening hours. We are at your service round the clock!<p>
```

#### Passed Example 18
This `h3` element contains a duplicated word and a trailing white space resulting from a manual copy-paste error. It is followed by the contact details for customer support. It passes this rule despite a repeated word, as the second "Contact" word could cause no misunderstanding. 
```html
<h3>Contact Contact Customer Support </h3>
```

#### Passed Example 19
This `h3` element contains the former placeholder text (h3) at the end of the heading. It is followed by the contact details for customer support. The web publisher forgot to remove it after pasting the actual heading. It passes this rule despite the forgotten (h3), as it is still clearly about contacting customer support. 
```html
<h3>Contact Customer Support (h3)</h3>
```

#### Passed Example 20
This `h3` element contains an extra angle bracket at the end that resulted from a local markup formatting oversight. It is followed by the contact details for customer support. It passes this rule despite the extra angle bracket which may not be noticeable by some, as the meaning of the heading is not affected. 
```html
<h3>Contact Customer Support <</h3>
```

### Failed

#### Failed Example 1
This `h1` element contains unremoved placeholder text from a content template. It fails this rule because the text serves as a developmental instruction rather than describing the purpose or topic of the page content.
```html
<h1>[Replace this text with heading 1]</h1>
```

#### Failed Example 2
A page displays a form, but its heading mistakenly shows a back-end error message.
This `h1` element contains a raw back-end runtime error message injected during server-side execution. It fails this rule because the displayed text is a system-generated message rather than an intentional heading describing the purpose or topic of the page content.
```html
<h1>Uncaught Error: Call to undefined function get_user_data() in /var/www/html/profile.php on line 42</h1>
```

#### Failed Example 3
A page contains list of academic programs available at a college, but its heading mistakenly shows timestamp.
This `h1` element contains only a raw timestamp. Due to a publishing or layout logic failure, this metadata was incorrectly rendered within the primary heading container rather than as a document footer element. It fails this rule because the date and time string do not identify or describe the primary purpose or topic of the page content.
```html
<h1>2026-06-30 13:46 UTC</h1>
```

#### Failed Example 4
This `h1` element for a credit card application page contains a brief, conversational greeting. It fails this rule on its face because the informal text possesses no descriptive value and provides no indication of the highly specific transactional nature of the form that follows.
```html
<h1>Hi</h1>
```

#### Failed Example 5
This `h1` element, followed by a list of kitchen appliances on sale, consists solely of a sequential placeholder. It fails this rule because the text lacks any topic-specific descriptor to identify the subject of the section, unless the page is part of a multi-volume document or a strictly paginated publication where the sequence itself serves as the primary identifier. A rapid evaluation of the immediate context confirms that this is a standard product listing, meaning the sequential label provides no descriptive utility.
```html
<h1>Page 1</h1>
```

#### Failed Example 6
A page contains several image buttons that open their own articles.
This `span` element utilizes the `role="heading"` attribute to programmatically identify itself as an `h1` equivalent, but the only word it contains provides no discernable indication whatsoever regarding the actual nature of the articles being presented. It passes other criteria, failing under this criterion only.
```html
<span role="heading" aria-level="1">Home</span>
```

#### Failed Example 7
An e-transfer screen for sending out money.
This `h2` element misrepresents the operational direction of a financial transaction. The element fails this rule because the heading text explicitly contradicts the functional purpose of the content it introduces.
By providing an entirely inaccurate label for the transaction, the heading fails to identify the true topic or purpose. When a heading explicitly states an inbound transaction ("Request Money") but the interactive form executes an outbound transaction ("Send Money"), a user may inadvertently authorize an irreversible transfer of funds, resulting in immediate financial loss.
```html
<h2>Request Money</h2>
```

#### Failed Example 8
A page about the IT unit employees.
This `h1` element contains an explicit mismatch regarding the organizational topic of the page. At first glance, a user or tester is led to believe they are accessing Human Resources information, only to find that the subsequent headings and content are obviously dedicated to Information Technology.
```html
<h1>Contact Human Resources</h1>
<main>
  <h2>Information Technology (IT) management contact information</h2>
</main>
```

#### Failed Example 9
A page about driver's licence renewal.
This `h1` element contains an explicitly erroneous transactional label, which is directly refuted by the form labels and input fields immediately following it. This `h1` element fails this rule because the primary heading text provides a completely false description of the page's functional utility.

```html
<h1>Apply for Urgent Passport Renewal</h1>
```

#### Failed Example 10
This `h3` element contains fragmented, truncated text resulting from a catastrophic copy-paste error. It fails this rule because the remaining text fragment fails to convey any meaningful topic, leaving it entirely irrelevant to the underlying content.
```html
<h3>ortcontact Custo</h3>
```

#### Failed Example 11
This `h3` element contains the former placeholder text at the beginning of the heading. The web publisher forgot to remove it after pasting the actual heading. It fails this rule because the heading will cause confusion and it cannot be reasonably considered meaningful for many users. 
```html
<h3>Insert Your Heading Righ Here and Do It by the End of Day Contact Customer Support</h3>
```

#### Failed Example 12
This `h3` element reveals an HTML comment that should have been invisible to users, due to a coding mistake the web developer made. It fails this rule because the heading will cause confusion and it cannot be reasonably considered meaningful for many users. 
```html
<h3><!-Make sure to update-> Contact Customer Support</h3>
```

### Inapplicable

#### Inapplicable Example 1
Lack of the following elements:

- `h1` through `h6` elements:
```html
<h1>
```
- Elements with an explicit ARIA heading role:
```html
<div role="heading" aria-level="1">
```
- Visually hidden semantic headings designed exclusively for assistive technologies:
```html
<h1 class="visually-hidden">
```
- Visually hidden elements utilizing an ARIA heading role:
```html
<div role="heading" aria-level="1" class="visually-hidden">
```
- Elements styled to be visually perceived as a heading despite lacking semantic markers:
```html
<p class="h1">
```
- Images of text perceived as a heading, regardless of the validity or presence of an `alt` attribute:
```html
<img src="image-of-text.png" alt="" />
```

#### Inapplicable Example 2
The page has one or more of the following elements with no content, nothing visible, or nothing exposed to assistive technology:

- Empty `h1` through `h6` elements:
```html
<h1></h1>
```
- Empty elements styled to be visually perceived as a heading despite lacking semantic markers:
```html
<p class="h1"></p>
```
- Empty elements with an explicit ARIA heading role:
```html
<div role="heading" aria-level="1"></div>
```
- Empty visually hidden semantic headings designed exclusively for assistive technologies:
```html
<h1 class="visually-hidden"></h1>
```
- Empty visually hidden elements utilizing an ARIA heading role:
```html
<div role="heading" aria-level="1" class="visually-hidden"></div>
```
- Heading elements that contain no content other than markup:
```html
<h1>
  <div></div>
</h1>
```
