---
rule_id: SC4-1-1-tag-nesting
name: Tags nested correctly
test_mode: automatic

criteria:
- 4.1.1 # Parsing (Level A)

author:

---

## Description

This test checks that tags of an HTML or XHTML document are nested correctly. So that elements that must be closed are, elements that shouldn't be aren't, and that elements are closed in the correct order.

## Background

- [H74: Ensuring that opening and closing tags are used according to specification](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H74)
- [eGovMon test ID: H74-1](http://wiki.egovmon.no/wiki/SC4.1.1#All_HTML_code)

## Assumptions

*no known assumptions*

## Test procedure

### Selector

Select all opening and closing tags in the HTML document

### Step 1: Verify opening tag attributes=

- IF the tag is a closing tag:
  - GO TO step 4

### Step 2: Check unclosed opening tags=

- Locate the closing tag that corresponds to the current tag
- IF there was no closing tag
  - IF the element type requires a closing tag:
    - RETURN {{ page.rule_id }}-fail1
  - IF the document is an XML page AND the tag is not self-closing:
    - RETURN {{ page.rule_id }}-fail2
  - ELSE RETURN {{ page.rule_id }}-pass1

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| Error    | This element requires a closing tag.
| Pointer  | selector result
| ID       | {{ page.rule_id }}-fail1

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| Error    | Element must use self-closing syntax.
| Pointer  | selector result
| ID       | {{ page.rule_id }}-fail2

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| Pointer  | selector result
| ID       | {{ page.rule_id }}-pass1

### Step 3: Check that tags are closed in the right place=

- Make a list childTags of tags that follow the current tag, until it's closing tag
- IF childTags has an opening tag for each closing tag in the list:
  - return {{ page.rule_id }}-pass2
- ELSE IF NOT ALL these unopened closing tags does not fail STEP 4:
  - return {{ page.rule_id }}-fail3

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| Pointer  | selector result
| ID       | {{ page.rule_id }}-pass2

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| Error    | Element is incorrectly nested
| Pointer  | selector result
| ID       | {{ page.rule_id }}-fail3

### Step 4: Closing tags have a corresponding opening tag=

- IF The current closing tag does not have a corresponding opening tag:
  - Return {{ page.rule_id }}-fail4

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| Error    | Closing tag does not have a corresponding opening tag
| Pointer  | selector result
| ID       | {{ page.rule_id }}-fail4

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>
