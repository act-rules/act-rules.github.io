---
title: Style Guide
---

## Basics

- All block level components (lists, paragraphs, headings, tables, etc.) should be separated by a single empty line.
- References to HTML elements and attributes should always use the back ticks character, followed by either the word element(s) or attribute(s). Example: **\`div\`** element and **\`alt\` attribute`**

## Referencing other documents

In order to maximize readability, don't use direct links in paragraphs. Use `[link text][ref]` instead of `[link text](url)`. When a link stands on it's own, or is the only text in a list item, this is not a problem. Links used multiple times on the same page should also use references.

The reference should be a abbreviation of no more than 6 characters, written in all capitals. The expanded reference is placed together with the URL at the bottom of the document, like so:

```markdown
[TXTALT]: ../pages/algorithms/text-alt.html
```
