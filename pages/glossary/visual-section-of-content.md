---
title: Visual section of content
key: visual-section-of-content
unambiguous: true
objective: false
---

A _visual section of content_ is a distinct part of the [visible][] content of a document which:

- **uninterrupted** all the content of a visual section of content must be rendered together, without being interrupted by content from another visual section of content, except if it is fully included in the visual section of content (subsection); and
- **large enough** a visual section of content must contain at least all the content of one [paragraph][], or at least all the content of one [embedded content][] element; and
- **separated** a visual section of content must be separated from surrounding content by one or more of the following visual cues:
  1. **boundaries**: it has borders, box shadow, or different backgrounds;
  2. **layout**: it is displayed in separate column or row;
  3. **indentation**: it has a greater indentation than surrounding content;
  4. **separators**: there is [decorative][] non-text content before or after it;
  5. **whitespace separators**: the spacing before or after it is greater than the default spacing between paragraphs;
  6. **headings**: its first [text][] content has larger font size or greater font weight the rest of the text;
  7. **Text styling**: its [text][] has a styling different from the rest of the text (text color, font, size, weight, shadow, outline, …)

**Note:** The precise splitting of a document into its visual sections of content is a subjective matter. For example, [decorative][] lines can be used to let the text "breath" without necessarily creating a new visual section of content. Each document can use any number of the visual cues to separate its sections of content.

**Note:** Headings elements (`h1`-`h6`) are usually [rendered][rendering of sections and headings] with a larger and heavier font than normal text. When this is the case, they do fulfill the **headings** case of the **separated** condition, and they define visual sections of content that match the [implicit ones][implicit section of content].

**Note:** The **large enough** condition prevents, for example, a single word in bold in a paragraph to be a visual section of content.

**Note:** While [embedded content][] may be part of a [paragraph][], a [paragraph][] may not be composed solely of [embedded content][]. The second part of the **large enough** condition allows visual sections of content to be composed solely of, for example, videos (only `video` elements).

**Note:** A visual section of content may contain both [text][] and [non-text content][]. It may also contain [decorative][] content.

**Note:** A visual section of content may contain nested (visual) subsections of content.

[decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[embedded content]: https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2 'Definition of Embedded content elements'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'WCAG definition of Non-text content'
[paragraph]: https://html.spec.whatwg.org/multipage/dom.html#paragraph 'Definition of paragraph'
[rendering of sections and headings]: https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings 'Suggestions for rendering sections and headings elements'
[text]: https://www.w3.org/TR/WCAG21/#dfn-text 'WCAG definition of Text'
[visible]: #visible 'Definition of visible'
