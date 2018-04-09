---
title: Auto-WCAG Rules Style Guide
---

This style guide provides instructions on how to formulate and format your rules. **[Learn how to design a rule](rule-design.html)**, before starting with this guide.

## Markdown

Rules are written in markdown, specifically GitHub Flavored Markdown (GFM). Markdown is a markup language designed for easy readability. It is a way to formalize the way many people would add structure to their page if they were using a plain text format. For example, an empty line to indicate the start of a new paragraph, or use of `-` or `*` or `1.`, `2.`, etc. at the beginning of a line to indicate an unordered or ordered list.

The markdown files will be presented in two different places. On the Auto-WCAG Rules website, which uses the Kramdown library to convert the markdown to HTML. On the GitHub project the documents can also be used. This means that the rules are processed by two similar *but slightly different* markdown libraries. 

## Formatting And Language

- All block level components (lists, paragraphs, headings, tables, etc.) should be separated by a **single** empty line. Kramdown (unlike GitHub) occasionally concatenates tables and lists to other items if this isn't done.

- References to HTML elements and attributes should always use the back ticks character, followed by either the word element(s) or attribute(s). Example: **\`div\` element** and **\`alt\` attribute**

## Referencing Other Documents

In order to maximize readability, don't use direct links in paragraphs. Use `[link text][ref]` instead of `[link text](url)`. *(Note the brackets are different.)* When a link stands on it's own, or is the only text in a list item, this is not a problem. Links used multiple times on the same page should also use references.

The reference should be a abbreviation of no more than 6 characters, written in all capitals. The expanded reference is placed together with the URL at the bottom of the document, like so:

	[TXTALT]: ../pages/algorithms/text-alt.html
