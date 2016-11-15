---
rule_id: SC1-3-1-p-as-heading
name:
test_mode: semi-automatic

criteria:
- 1.3.1 # Info and relationships (level A)

authors:
- Wilco Fiers
---

## Description

This rule tests p elements, to ensure they should not have been marked up as a heading.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H42
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G141
- http://accessibility.psu.edu/headingshtml/

## Assumptions

- Headers can be identified by bolder text, the text being italic, or larger font-size
- Whole sentences are unlikely to be headings, and so text that appears to be one or more sentences is assumed not to be a a heading.

## Test procedure

### Selector

Test mode: [automatic][]

Select each `p` element that meets the following:

- It contains non-empty text
- It has one or more sibling `p` elements after it
- It does not contain a text paragraph (see definition)
- It does not have a role attribute

### Step 1: Differing style

Test mode: [automatic][]

Get the *defining text style* of the selected `p` element as style A, and of the defining text style of the next sibling `p` element as style B.

Check that one of the following is true:

- The font-size of Style A is bigger than that of Style B, or
- the font-weight of Style A is greater than that of Style B, or
- the font-style of Style A is italic and that of Style B is not.

If true, continue with [Step 2][#step-2-blockquote]:

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass1

### Step 2: Blockquote

Test mode: [automatic][]

If the selected `p` element is inside a blockquote, continue with [step 5][#step-5]

Else, continue with [Step 3][#step-3-first-paragraph]

### Step 3: First paragraph

Test mode: [automatic][]

Check that the selected `p` element has a sibling `p` element that precedes it.

If yes, continue with [step 4][#step-4]

Else, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail1

### Step 4: Preceding paragraph

Test mode: [automatic][]

Use the *defining text style* of this preceding `p` element as *style C*

Check that any of the following is true:

- The font-size of Style A is bigger than that of Style C, or
- the font-weight of Style A is greater than that of Style C, or
- the font-style of Style A is italic and that of Style C is not.

If true, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail2

If false, continue with [step 5][#step-5-user-question]

### Step 5: User question

Test mode: [manual][]

Ask the user to make a final judgment of the possible header.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | selected element
| Requires context     | yes
| Question             | Is this element a heading for the section following it?
| Help                 | Headings are a name or brief description for of an area on a (web) page. They give structure to a page, and are often used to skim the page.

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass2

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail3

## Definitions

Text paragraph:

: Any textNode containing punctuation marks: `.`, `:`, `!`, `?`.

Defining text style:

: Locate the highest element that could be used to style all the text in
  the element. The computed style of this element is the Defining text style

  Example: Here the `i` element can style all text

  ```
  <p>  <i>Text <b>here</b></i> </p>
  ```

## Implementation tests

### Inapplicable

Inapplicable 1:

	<article>
	  <p><b>Some text</b></p>
	</article

Inapplicable 2:

	<article>
	  <p><b>A paragraph!</b></p>
	  <p>A paragraph!</p>
	</article>

Inapplicable 3:

	<p>Some text</p>
	<blockquote>
	  <p>Some text</p>
	</blockquote>

Inapplicable 4:

	<article>
	  <p><b>Some text</b></p>
	</article>
    <p>Some text</p>

### Automated Passes

Pass 1:

	<p>Some text</p>
	<p>A paragraph!</p>

Pass 2:

	<p><b>Some text</b></p>
	<p><b>A paragraph!</b></p>

Pass 3:

	<p style="font-style:bold">Some text</p>
	<p><b>A paragraph!</b></p>

Pass 4:

	<p>Some text</p>
	<p><b>A paragraph!</b></p>

### Automated Failures

Failure 1:

	<p style="font-style:bold">Some text</p>
	<p>A paragraph!</p>

Failure 2:

	<p style="font-size:120%">Some text</p>
	<p>A paragraph!</p>

Failure 3:

	<p><b>Some text</b></p>
	<p>A paragraph!</p>

## Cant Tell / User Question

Cant tell 1:

	<p><b>Some text</b></p>
	<p><b>Some text</b></p>
	<p>A paragraph!</p>

Cant tell 2:

	<p><b>Some text</b></p>
	<p><b>A paragraph!</b></p>
	<p>A paragraph!</p>

Cant tell 3:

	<blockquote>
	  <p><i>Some text</i></p>
	  <p>A pragraph!</p>
	</blockquote>

[automatic]: ../pages/test-modes.html#automatic
[manual]: ../pages/test-modes.html#manual