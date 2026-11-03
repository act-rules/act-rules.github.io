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
This `h1` element that states the functional purpose of the page content is relevant.
```html
<h1>Renewing Your Passport Online</h1>
<p>If you meet all of these criteria explained in the sections listed below, you can renew your passport online.</p>
<ul>
  <li><a href="#a1">Who can renew their passports online</a></li>
  <li><a href="#a2">You need a digital photo for your new passport</a></li>
  <li><a href="#a3">Your current passport will be cancelled and the new one will be mailed to you</a></li>
  <li><a href="#a4">Sign in or register for an account for passports</a></li>
</ul>
```

#### Passed Example 2
This `h1` element about the marketing content that follows is relevant.
```html
<h1>Fresh deals just dropped: Printers</h1>
<div class="carousel" aria-label="Fresh deals">
  <div class="carousel-slides">
    <div class="slide active">
      <img src="printer1.jpg" alt="Compact All-in-One Laser Printer">
    </div>
    <div class="slide">
      <img src="printer2.jpg" alt="High-Speed Wireless Inkjet Printer">
    </div>
    <div class="slide">
      <img src="printer3.jpg" alt="Heavy-Duty Office Color Printer">
    </div>
    <div class="slide">
      <img src="printer4.jpg" alt="Photo Quality Portable Printer">
    </div>
    <div class="slide">
      <img src="printer5.jpg" alt="Eco-Friendly Tank Printer">
    </div>
  </div>

  <div class="carousel-controls">
    <button type="button" id="toggle-btn" aria-label="Pause slide rotation">Pause</button>
  </div>
</div>
```

#### Passed Example 3
This `h2` element for the structured weather forecast table that follows is relevant.
```html
<h2>Current Weather in New York</h2>
<table>
  <tr>
    <th>Day</th>
    <th>Condition</th>
    <th>High / Low</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Partly Cloudy</td>
    <td>18°C / 12°C</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Sunny</td>
    <td>22°C / 14°C</td>
  </tr>
</table>
```

#### Passed Example 4
This `h2` element acting as a structural identifier for sequential content sections is relevant, where the content that follows rarely alters whether it is relevant as long as an obvious misplacement is not observed.
```html
<h2>Chapter 4</h2>
<p>
  It was the White Rabbit, trotting slowly back again, and looking anxiously about as it went, as if it had lost something; and she heard it muttering to itself "The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers! She'll get me executed, as sure as ferrets are ferrets! Where can I have dropped them, I wonder?" Alice guessed in a moment that it was looking for the fan and the pair of white kid gloves, and she very good-naturedly began hunting about for them, but they were nowhere to be seen.
</p>
```

#### Passed Example 5
This `h3` element used as a generic section heading is relevant, as long as the section content retains basic contextual relevance.
```html
<h3>Glossary</h3>
<ol>
  <li><strong>API (Application Programming Interface):</strong> A set of rules and protocols that allows different software applications to communicate with each other.</li>
  <li><strong>Cache:</strong> A temporary storage area that saves web page resources to improve loading speed on subsequent visits.</li>
  <li><strong>DOM (Document Object Model):</strong> A programming interface for web documents that represents the page structure as a node tree.</li>
  <li><strong>Metadata:</strong> Information embedded within a document or web page that describes its content, author, or properties.</li>
  <li><strong>Responsive Design:</strong> A design approach that ensures web pages render adaptively across a variety of screen sizes and devices.</li>
</ol>
```

#### Passed Example 6
This `h1` element introducing the subsequent list is relevant, as long as the section content retains basic contextual relevance.
```html
<h1>Don't Forget To Bring:</h1>
<ul>
  <li>A valid government-issued photo ID (e.g., passport, driver's license, health card, etc.)</li>
  <li>Two recent proof of address documents (e.g., utility bill, bank statement, tax letter, etc.)</li>
  <li>Your printed appointment confirmation letter</li>
</ul>
```

#### Passed Example 7
This `h1` element is relevant to the page content despite exhibiting another WCAG failure for having a severely low contrast ratio.
```html
<img src="dummy-university-banner" alt="University Name" />
<h1 style="color: gray; background-color: dimgray;">Your Future Starts Here, at Our University</h1>
<p>
  Discover world-class academic programs, vibrant campus life, and pioneering research opportunities designed to help you achieve your professional goals. Apply today to join our global community of scholars.
</p>
```

#### Passed Example 8
This `p` element styled as a heading is relevant to the section content, despite failing other WCAG criteria due to using changes in text presentation without using the appropriate markup and utilizing an invalid ARIA value.
```html
<p class="h1" role="headline">A Million Different Journeys</p>
<ul>
  <li>Curated international vacation packages</li>
  <li>Last-minute flight and hotel deals</li>
  <li>Guided eco-tours and adventure trips</li>
</ul>
```

#### Passed Example 9
This `h1` element is relevant to the purpose of the page content, despite being overly casual and unnecessarily verbose. 
```html
<h1>Welcome to Our State-of-the-Art Brand New Wizard That Will Mail Your Beautiful Loyalty Card Right to Your Doorstep</h1>
<p>Step 1 of 4: Personal Information</p>
<form action="#" method="post">
  <div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="first-name">
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="last-name">
  </div>
  <button type="submit">Next</button>
</form>
```

#### Passed Example 10
This `h1` element identifying the topic of a travel safety guidance page is relevant, despite containing redundant phrasing.
```html
<h1>Travel Advisories and Travel Advisory Information</h1>
<ul>
  <li>Keep digital copies of your passport and vital documents stored securely.</li>
  <li>Monitor local news and official safety channels while abroad.</li>
  <li>Register your contact details with your embassy prior to departure.</li>
</ul>
```

#### Passed Example 11
This `h2` element for the promotional banner that follows is relevant, regardless of redundant text present verbatim in the title attribute or the accompanying `figcaption` element.
```html
<h2>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites</h2>
<figure>
  <img title="Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites." src="hotel-promo-banner.png" alt="Panoramic view of a mountain ski resort in winter, with the modern hotel facade illuminated in the foreground." />
  <figcaption>Our hotel, conveniently located near the historic town center, features 118 guest rooms and 18 luxury suites.</figcaption>
</figure>
```

#### Passed Example 12
This `h2` element is relevant because it describes the section content, even though the wording is generic and the heading states the obvious.
```html
<h2>List of Links</h2>
<ul>
  <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative (WAI)</a></li>
  <li><a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG) 2.1</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Practices Guide (APG)</a></li>
</ul>
```

#### Passed Example 13
This `h2` element is relevant despite using a metaphorical phrase to introduce a satirical article on inflation. It passes this rule because it is contextually relevant when read alongside the content, even though it relies on stylistic phrasing.
```html
<h2>Final Day for Savings</h2>
<p>Everything will be more expensive tomorrow.</p>
<p>Persistent inflation continues to erode purchasing power, forcing consumers to adjust to steadily rising costs across basic goods and services.</p>
```

#### Passed Example 14
This `h1` element is relevant to the section content despite using irony to introduce an opinion piece on global peace, regardless of editorial style or literary tone.
```html
<h1>Nobel's Peace Prize Office is Temporarily Closed Due to Declining Business</h1>
<p>Recent diplomatic data shows active armed conflicts reaching a two-decade high across multiple continents.</p>
<p>While international peace organizations struggle to broker lasting ceasefires, humanitarian efforts require immediate global support and renewed commitment to de-escalation.</p>
```

#### Passed Example 15
This `h1` element that uses a question to introduce the section topic is relevant.
```html
<h3>Opening hours?</h3>
<p>24/7</p>
<p>No opening hours. We are at your service round the clock!</p>
```

#### Passed Example 16
This `h3` element is relevant to the section despite containing a duplicated word from a paste error. 
```html
<h3>Contact Contact Customer Support</h3>
<p>Email: support@example.com</p>
<p>Phone: 1-800-555-5555</p>
```

#### Passed Example 17
This `h3` element is relevant to the section despite containing residual placeholder text, a trailing whitespace, and a stray angle bracket at the end that resulted from publishing errors. 
```html
<h3>Contact Customer Support (h3) <</h3>
<p>Email: support@example.com</p>
<p>Phone: 1-800-555-5555</p>
```

### Failed

#### Failed Example 1
This `h1` element is not relevant as its sole content is unremoved placeholder text from a content template. It fails this rule because the heading text serves as a developmental instruction rather than describing the purpose or topic of the page content.
```html
<h1>[Replace this text with heading 1]</h1>
<p>If you meet all of these criteria explained in the sections listed below, you can renew your passport online.</p>
<ul>
  <li><a href="#a1">Who can renew online</a></li>
  <li><a href="#a2">You need a digital photo to renew online</a></li>
  <li><a href="#a3">Your current passport will be cancelled and the new one will be mailed to you</a></li>
  <li><a href="#a4">Sign in or register for an account</a></li>
</ul>
```

#### Failed Example 2
This `h1` element containing a raw back-end runtime error message injected during server-side execution is not relevant. It fails this rule because the displayed text is a system-generated message rather than an intentional heading describing the purpose or topic of the page content.
```html
<h1>Uncaught Error: Call to undefined function get_user_data() in /var/www/html/profile.php on line 42</h1>
<div class="carousel" aria-label="Fresh deals">
  <div class="carousel-slides">
    <div class="slide active">
      <img src="printer1.jpg" alt="Compact All-in-One Laser Printer">
    </div>
    <div class="slide">
      <img src="printer2.jpg" alt="High-Speed Wireless Inkjet Printer">
    </div>
    <div class="slide">
      <img src="printer3.jpg" alt="Heavy-Duty Office Color Printer">
    </div>
    <div class="slide">
      <img src="printer4.jpg" alt="Photo Quality Portable Printer">
    </div>
    <div class="slide">
      <img src="printer5.jpg" alt="Eco-Friendly Tank Printer">
    </div>
  </div>

  <div class="carousel-controls">
    <button type="button" id="toggle-btn" aria-label="Pause slide rotation">Pause</button>
  </div>
</div>
```

#### Failed Example 3
This `h1` element containing only a raw timestamp is not relevant. It fails this rule because the date and time string do not identify or describe the primary purpose or topic of the page content.
```html
<img src="dummy-university-banner" alt="University Name" />
<h1>2026-06-30 13:46 UTC</h1>
<p>
  Discover world-class academic programs, vibrant campus life, and pioneering research opportunities designed to help you achieve your professional goals. Apply today to join our global community of scholars.
</p>
```

#### Failed Example 4
This `h1` element is not relevant because the text "Hi" provides no context for the personal information form that follows.
```html
<h1>Hi</h1>
<p>Step 1 of 4: Personal Information</p>
<form action="#" method="post">
  <div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="first-name">
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="last-name">
  </div>
  <button type="submit">Next</button>
</form>
```

#### Failed Example 5
This `img` element displaying an image of text that visually acts like a heading is not relevant because "Page 1" as a heading lacks any topic-specific descriptor for the content that follows, despite passing other applicable WCAG criteria.
```html
<img src="image-of-text-that-reads-page-1.svg" style="max-width: 1360px; height: auto;" alt="Page 1" />
<ul>
  <li>Stainless Steel Countertop Microwave</li>
  <li>Convection Toaster Oven</li>
  <li>10-Cup Programmable Coffee Maker</li>
  <li>Quiet-Operation Blender</li>
</ul>
```

#### Failed Example 6
This `span` element with role="heading" is not relevant because the text provides no discernable context regarding the article links that follow, despite passing other criteria.
```html
<span class="h1" role="heading" aria-level="1">Welcome</span>
<div>
  <a href="/articles/space-exploration">
    <img src="mars-rover.jpg" alt="Read article: Latest findings from the Mars rover mission">
  </a>
  <a href="/articles/deep-sea-discovery">
    <img src="trench-expedition.jpg" alt="Read article: Deep sea expedition uncovers new oceanic species">
  </a>
  <a href="/articles/renewable-energy">
    <img src="solar-grid.jpg" alt="Read article: Advancements in next-generation solar panels">
  </a>
</div>
```

#### Failed Example 7
This `h2` element misrepresents the operational direction of a financial transaction. The heading text is not relevant, as it explicitly contradicts the functional purpose of the content it introduces.
```html
<h2>Request Money</h2>
<form action="/send-transfer" method="post">
  <p>Complete the fields below to transfer funds from your account to a recipient.</p>
  <div>
    <label for="recipient-email">Recipient Email Address</label>
    <input type="email" id="recipient-email" name="recipient-email" required>
  </div>
  <div>
    <label for="transfer-amount">Amount ($ CAD)</label>
    <input type="number" id="transfer-amount" name="transfer-amount" min="1" step="0.01" required>
  </div>
  <div>
    <label for="security-question">Security Question</label>
    <input type="text" id="security-question" name="security-question" required>
  </div>
  <div>
    <label for="security-answer">Security Answer</label>
    <input type="text" id="security-answer" name="security-answer" required>
  </div>
  <button type="submit">Send Money Now</button>
</form>
```

#### Failed Example 8
This `h1` element that incorrectly states the functional purpose of the page content is not relevant.
```html
<h1>Renewing Your Passport Online</h1>
<p>If you meet all of these criteria explained in the sections listed below, you can renew your driver's licence online.</p>
<ul>
  <li><a href="#a1">Who can renew their driver's licences online</a></li>
  <li><a href="#a2">You need a digital photo for your new driver's licence</a></li>
  <li><a href="#a3">Your current driver's licence will be cancelled and the new one will be mailed to you</a></li>
  <li><a href="#a4">Sign in or register for an account for driver's licences</a></li>
</ul>
```

#### Failed Example 9
This `h3` element is not relevant to the section as the text it contains cannot be reliably interpreted to understand what the following emails and phone numbers are for. 
```html
<h3>ortcontact Custo</h3>
<p>Email: support@example.com</p>
<p>Phone: 1-800-555-5555</p>

```

#### Failed Example 10
This `h3` element is not relevant as it contains the former placeholder text at the beginning of the heading.
```html
<h3>Insert Your Heading Righ Here and Do It by the End of Day Contact Customer Support</h3>
<p>Email: support@example.com</p>
<p>Phone: 1-800-555-5555</p>
```

### Inapplicable

#### Inapplicable Example 1
This snippet is inapplicable because the page contains no headings, explicit heading roles, visual heading styles, or images of text acting as headings.
```html
<ul>
  <li><a href="/products/widget-alpha">Widget Alpha</a></li>
  <li><a href="/products/widget-beta">Widget Beta</a></li>
  <li><a href="/products/widget-gamma">Widget Gamma</a></li>
  <li><a href="/products/widget-delta">Widget Delta</a></li>
</ul>
```

#### Inapplicable Example 2
This snippet is inapplicable because the heading element has no content to evaluate.
```html
<h1></h1>
```
