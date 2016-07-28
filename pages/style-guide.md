---
title: Auto-WCAG Rules Style Guide
---

This style guide provides instructions on how to formulate and format your rules. **[Learn how to design a rule](rule-design.html)**, before starting with this guide.

## Markdown

Rules are written in markdown, specifically GitHub Flavored Markdown (GFM). Markdown is a markup language designed for easy readability. It is a way to formalize the way many people would add structure to their page if they were using a plain text format. For example, an empty line to indicate the start of a new paragraph, or use of `-` or `*` or `1.`, `2.`, etc. at the beginning of a line to indicate an unordered or ordered list.

The markdown files will be presented in two different places. On the Auto-WCAG Rules website, which uses the Kramdown library to convert the markdown to HTML. On the GitHub project the documents can also be used. This means that the rules are processed by two similar *but slightly different* markdown libraries. 

## Formatting And Language

- All block level components (lists, paragraphs, headings, tables, etc.) should be separated by a **single** empty line. Kramdown (unlike GitHub) occasionally concatenates tables and lists to other items if this isn't done.

- References to HTML elements and attributes should always use the back ticks character, followed by either the word element(s) or attribute(s). Example: **\`div\` element** and **\`alt\` attribute`**

## Procedural Statements

Each rule has a number of steps, where each step is made up of several statements. For example: 

	If the selected image has no alt, continue with [Step 2](#step-2).

These statements are often no more then two are three sentences long. They are written in plain English

### If, Else and Return

Each step may ask one (or a few) questions that result in a pass, fail or continue to the next step result. For Auto-WCAG Rules, the following terms are used for these expressions `if`, `else`, `return` and `continue with Step X`. Each if and else statement must be their own paragraph, and should be kept short. Example:
	
	If the selected element has an `alt` attribute, continue with [Step 3](#step-3)

	Else return:

	| Outcome  | Failed
	|----------|-----
	...

The term *selected element* should be used to refer to the each item that is obtained by the selector.

If and else statements should be a single sentence. Avoid using `and` and `or` in the sentence. If you find the if / else statement getting too complex, use a `Check` statement instead, for example:

	Check that the color contrast for bold text is less than 3:1 or for normal text is less than 4.5:1.

	If true, return:


### Variables

TODO

## Steps In A Test Procedure

The test procedure is broken up into steps toA make the rule easier to read and understand. Each step is often a single if-statement, possibly including a few statements that have to be executed before the if statement. As a rule of thumb, hold that each step in a rule should do one of the following three things:

  - Return a pass or a fail with an if statement (this is usually the last step).

  - Return a fail or move to the next step with an if statement.

  - Branch the test procedure into two paths testing different scenarios.
    *Note:* Branching can often also be solved by breaking the rule up into multiple rules. If this would make for easier rules this is much preferred.

### Naming Steps

When rules get complicated, it becomes useful to give the step a short name that is descriptive of what the step does. This makes it easier to understand the flow of a rule. Example: 

	### Step 1: check element type (F65)

## Referencing Other Documents

In order to maximize readability, don't use direct links in paragraphs. Use `[link text][ref]` instead of `[link text](url)`. *(Note the brackets are different.)* When a link stands on it's own, or is the only text in a list item, this is not a problem. Links used multiple times on the same page should also use references.

The reference should be a abbreviation of no more than 6 characters, written in all capitals. The expanded reference is placed together with the URL at the bottom of the document, like so:

	[TXTALT]: ../pages/algorithms/text-alt.html

## Providing Notes

TODO