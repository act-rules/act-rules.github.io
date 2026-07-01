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

The testing scope under this rule is limited exclusively to the wording in elements perceived or presented as headings.

### None of the following is within this rule's scope:
- Complete lack of headings
- Heading structure or hierarchy
- Coding errors, provided that the heading is visible or exposed to assistive technologies
- Grammar or spelling errors in headings, unless they render the text entirely unintelligible
- Styling and presentation, unless the styling renders the heading completely illegible
- Other accessibility failures covered by distinct WCAG success criteria, regardless of their severity

## Expectations
- Each heading text is sufficiently intelligible and carries meaning
- Each heading is relevant to the specific page or section where it appears

## Background
This rule evaluates any element that functions as a heading, including those perceived visually by sighted users or explicitly exposed as headings to assistive technologies. The scope encompasses fully accessible headings (e.g., `<h1>Meaningful and relevant heading</h1>`), visual headings that lack assistive technology support (e.g., `<p class="h1">Meaningful and relevant heading</p>`), and structural headings that are hidden from visual presentation (e.g., `<h1 class="visually-hidden">Meaningful and relevant heading</h1>`). While these varied implementations may simultaneously trigger failures under other WCAG success criteria, they are all subject to this rule.

To pass, a heading must convey meaning and be relevant to its associated content. Headings consisting purely of non-default placeholder text or uninformative character strings fail this rule inherently. Under this rule, "content" refers to any textual or non-textual element presented on the web page, including sections, paragraphs, forms, user interface components, media galleries, lists, or hyperlinks.

### Assumptions
This rule assumes that testers evaluating the content possess the necessary language proficiency and contextual comprehension required to assess the relationship between the headings and their associated content. 

#### Limitations
The following scenarios present inherent limitations to evaluation and the headings being tested may be deemed out of scope:
- Multilingual content: Web pages containing content in multiple languages (e.g., a heading in one language preceding content in another) where the tester does not possess professional working proficiency in all languages present.
- Rapidly changing or real-time content streams: Live, dynamic content fields (e.g., streaming data feeds, live social walls, or active chat interfaces) where the content updates at a rate that prevents static evaluation against its structural headings.
- Use of automated testing tools: This rule is inherently subjective and relies entirely on human judgment; it is not intended for automated testing tools.
- Exposure to controversies: Because evaluating the relevance and meaning of textual content is non-technical, findings can be contested by anyone regardless of their technical background. Consequently, this rule is designed as a test-to-pass evaluation, meaning failures are exceptions. Testers should default to a passing or not applicable result when in doubt.

#### Exceptions
The following scenarios constitute exceptions to this rule, as the contextual intent of the author cannot be objectively determined by a web accessibility content guidelines specialist:
- Highly specialized or technical domains: content involving advanced scientific, technical, or academic material (e.g., specialized research documentation) that requires domain-specific expertise.
- Abstract or creative Works: content consisting of creative literary works, poetry, or abstract text where relevance is interpretive or non-linear rather than purely informational.
- Legally mundated or standardized statements: documents or user interfaces where the text and structure of headings are rigidly dictated by statutory, regulatory, or legal mandates (e.g., standardized privacy disclosures) that cannot be altered by the author.

### Accessibility Support
This rule does not rely on the support for particular accessibility features by different assistive technologies and user agents. 

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
Headings whose relevance or relationship to the section content is not immediately apparent, but becomes evident upon evaluation of the surrounding content or structural context.

#### Passed Example 15
This `h2` element uses a satirical or metaphorical phrase to introduce the topic. Although the heading text does not literally match the vocabulary of the section, its contextual relevance becomes evident when considering the immediate context of the paragraph that follows. Headings that use literary devices remain compliant under this rule, as the determination of tone or stylistic approach falls within the editorial domain.
```html
	<h2>Final Day for Savings</h2>
  <p>Everything will be more expensive tomorrow.</p>
	<!-- Followed by the subsection of an analysis article about inflation that begins with the above paragraph, explaining how long-term economic trends cause prices to rise continuously -->
```

#### Passed Example 16
This `h1` element employs irony to introduce the topic. Although the heading text does not explicitly reference the literal vocabulary of the section, its contextual relevance becomes evident when the primary purpose of the content is determined. Headings that utilize literary or stylistic devices remain compliant under this rule, as the determination of editorial tone falls outside the scope of accessibility evaluation.
```html
	<h1>Nobel's Peace Prize Office is Temporarily Closed Due to Declining Business</h1>
	<!-- Followed by an opinion piece that provides statistics regarding active global conflicts and advocates for international peace -->
```

#### Passed Example 16
This `h3` element employs an interrogative structure to introduce the section topic. Although the heading itself asks a question rather than providing a direct declaration, its contextual relevance becomes immediately evident upon evaluating the concise response that follows in the immediate text. 
```html
	<h3>Opening hours?</h3>
	<p>24/7</p>
  <p>No opening hours. We are at your service round the clock!<p>
```

### Passed (Situation F)
Headings that are compliant under this criterion, while containing errors in spelling, punctuation, capitalization, syntax, vocabulary, or structure. They may also include replicated text fragments resulting from copy-paste errors. These headings are considered passing if the text remains fairly intelligible. This is because the severity of these errors does not introduce ambiguity, distort the user's comprehension of the page structure, or cause any adverse material impact on any group of users.

#### Passed Example 17
This `h2` element contains a combination of language errors. Despite the poor linguistic quality of the text, it remains compliant with this rule because the meaning is completely preserved, leaving no room for user misinterpretation or navigational barriers.
```html
	<h2>The Goverment is Planing to Introducing New Regulations!.</h2>
	<!-- Followed by an opinion piece about the upcoming regulations -->
```

#### Passed Example 18
This `h3` element contains a duplicated text fragment and a trailing white space resulting from a mechanical copy-paste or rendering error. It remains compliant because the core descriptive intent remains entirely unambiguous, not introducing a risk for user misunderstanding.
```html
	<h3>Contact Contact Customer Support </h3>
	<!-- Followed by the contact details for customer support -->
```

#### Passed Example 19
This `h2` element utilizes an incorrect word substitution resulting from a literal cross-linguistic translation. While the word "command" cannot replace "order" in English here, the heading remains compliant because the immediate operational context allows the action to be unmistakably understood, not introducing a risk for user misunderstanding.
```html
	<h2>Command your food for delivery</h2>
	<!-- Followed by a digital menu interface, a shopping cart summary, and a checkout button -->
```

### Failed (Situation A)
Headings that contain unintended or malformed text resulting from programmatic errors, publishing anomalies, or unremoved development artifacts. These structural failures are typically identifiable through programmatic or visual evaluation without requiring a deep analysis of the surrounding content.

#### Failed Example 1
This `h1` element contains unremoved placeholder text from a content template. It fails this rule because the text serves as a developmental instruction rather than describing the purpose or topic of the page content.
```html
	<h1>[Replace this text with heading 1]</h1>
```

#### Failed Example 2
This `h1` element contains a raw back-end runtime error message injected during server-side execution. It fails this rule because the displayed text is a system-generated message rather than an intentional heading describing the purpose or topic of the page content.
```html
	<h1>Uncaught Error: Call to undefined function get_user_data() in /var/www/html/profile.php on line 42</h1>
	<!-- Followed by a page with a form that collects user information -->  
```

#### Failed Example 3
This `h1` element contains only a raw timestamp. Due to a publishing or layout logic failure, this metadata was incorrectly rendered within the primary heading container rather than as a document footer element. It fails this rule because the date and time string do not identify or describe the primary purpose or topic of the page content.
```html
	<h1>2026-06-30 13:46 UTC</h1>
	<!-- Followed by the list of academic programs available at a college -->
```

### Failed (Situation B)
Headings that consist entirely of generic phrases, sequential locators, or conversational greetings that, on their face, lack the descriptive property required to identify a specific topic. Because these labels are inherently ambiguous, they typically fail this rule based on their textual content alone, without necessitating any evaluation of the surrounding content.

#### Failed Example 4
This `h1` element contains a brief, conversational greeting. It fails this rule on its face because the informal text possesses no descriptive value and provides no indication of the highly specific transactional nature of the form that follows.
```html
	<h1>Hi</h1>
	<!-- Followed by a form that collects personal and financial data for a credit card application -->
```

#### Failed Example 5
This `h1` element consists solely of a sequential placeholder. It fails this rule because the text lacks any topic-specific descriptor to identify the subject of the section, unless the page is part of a multi-volume document or a strictly paginated publication where the sequence itself serves as the primary identifier. A rapid evaluation of the immediate context confirms that this is a standard product listing, meaning the sequential label provides no descriptive utility.
```html
	<h1>Page 1</h1>
	<!-- Followed by a list of kitchen appliances on sale -->
```

#### Failed Example 6
This `span` element utilizes the `role="heading"` attribute to programmatically identify itself as an `h1` equivalent, but contains a generic operational description of the site structure rather than a descriptive label for the current view. It fails this rule because the text describes the navigational tier instead of identifying the unique topic, aggregate purpose, or functional scope of the content that follows; consequently, it provides no discernable indication whatsoever regarding the actual nature of the articles being presented.
```html
	<span role="heading" aria-level="1">Home Page of Our Newspaper</span>
	<!-- Followed by several image buttons that open their own articles -->
```

### Failed (Situation C)
Headings that contain explicitly incorrect, mislabeled, or contradictory information that misrepresents the actual purpose, functional scope, or transactional nature of the content that follows.
Unlike subjective editorial choices, these failures are characterized by objective, glaring mismatches that can be easily identified by a human reviewer within seconds of contextual evaluation. This situation focuses primarily on structural errors that cause immediate, severe consequences for most users, but especially for screen reader users and for users with cognitive disabilities the consequences may be more severe.

#### Failed Example 7
This `h2` element misrepresents the operational direction of a financial transaction. The element fails this rule because the heading text explicitly contradicts the functional purpose of the content it introduces.
By providing an entirely inaccurate label for the transaction, the heading possesses zero descriptive utility and fails to identify the true topic or purpose. When a heading explicitly states an inbound transaction ("Request Money") but the interactive form executes an outbound transaction ("Send Money"), a user may inadvertently authorize an irreversible transfer of funds, resulting in immediate financial loss.
```html
	<h2>Request Money</h2>
	<!-- Followed by the e-transfer screen for sending out money -->
```

#### Failed Example 8
This `h1` element contains an explicit mismatch regarding the organizational topic of the page. At first glance, a user or tester is led to believe they are accessing Human Resources information, only to find that the subsequent headings and content are obviously dedicated to Information Technology.
The `h1` element fails this rule because the primary heading text explicitly misidentifies the subject matter of the content it precedes. A rapid evaluation of the heading structure reveals a direct contradiction between the primary title and the functional content sections, meaning the h1 provides zero accurate descriptive value for the document view.

```html
	<h1>Contact Human Resources</h1>
	<main>
		<h2>Information Technology (IT) management contact information</h2>
		<!-- Followed by a list of emails and phones of managers and directors with their job titles clearly posted under their names -->
	</main>
```

#### Failed Example 9
This `h1` element contains an explicitly erroneous transactional label, which is directly refuted by the form labels and input fields immediately following it. This `h1` element fails this rule because the primary heading text provides a completely false description of the page's functional utility.

```html
	<h1>Apply for Urgent Passport Renewal</h1>
	<main>
		<label for="dl-number">Enter your 15-digit Driver's Licence Number:</label>
		<input type="text" id="dl-number" name="dlNumber" required>
		<!-- Followed by fields for driving restrictions, vision test results, and vehicle class selections -->
	</main>
```

### Failed (Situation D)
Headings that contain errors in spelling, punctuation, capitalization, syntax, vocabulary, or structure. They may also include replicated text fragments resulting from copy-paste errors. These headings are considered failing if the text no longer remains fairly intelligible. This is because the severity of these errors introduces ambiguity, distorts the user's comprehension of the page structure, or causes an adverse material impact on some group of users.

#### Failed Example 10
This `h2` element contains severe mechanical text fragments and truncations, likely caused by an automated find-and-replace or script error. It fails to comply with this criterion because the structural degradation of the words prevents users from determining the topic or purpose of the subsequent content.

```html
	<h2>The gov regu next year</h2>
	<!-- Followed by an opinion piece about upcoming government regulations -->
```

#### Failed Example 11
This `h3` element contains fragmented, truncated text resulting from a catastrophic copy-paste or rendering error. It fails to comply with this criterion because the remaining text fragment fails to convey any meaningful topic, leaving it entirely irrelevant to the underlying content.
```html
	<h3>ortcontact Custo</h3>
	<!-- Followed by the contact details for customer support -->
```

#### Failed Example 12
This `h2` element utilizes an incorrect word substitution resulting from a literal cross-linguistic translation. While the developer intended to convey "finalize or complete your order," the word "terminate" instead implies canceling or deleting the items. The heading is non-compliant because it introduces severe ambiguity and a risk of user misunderstanding.
```html
	<h2>Terminate your food basket here</h2>
	<!-- Followed by a digital menu interface, a shopping cart summary, and a checkout button of an online food delivery company -->
```
______________________ CHANGES MADE END HERE _____________________________

