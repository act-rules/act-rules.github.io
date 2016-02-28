This test belongs to [[4.1.1 Parsing]].

## Status
{{status|1|1113}}
[[Category:Completed]]


## Description
This test checks that tags of an HTML or XHTML document are nested correctly. So that elements that must be closed are, elements that shouldn't be aren't, and that elements are closed in the correct order.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H74 H74: Ensuring that opening and closing tags are used according to specification]
- [http://wiki.egovmon.no/wiki/SC4.1.1#All_HTML_code eGovMon test ID: H74-1]


## Assumptions
*no known assumptions*


## Test properties
| Property          | Value
|-------------------|----
| Test requirement  | [[4.1.1 Parsing]]
| Test mode         | Automatic
| Test environment  | HTML source
| Test subject      | Single web page


## Test procedure

### Selector
Test method: [automatic]

Select all opening and closing tags in the HTML document

### Step 1: Verify opening tag attributes=
Test method: [automatic]

- IF the tag is a closing tag:
  - GO TO step 4

### Step 2: Check unclosed opening tags=
Test method: [automatic]

- Locate the closing tag that corresponds to the current tag
- IF there was no closing tag
  - IF the element type requires a closing tag:
    - RETURN SC4-1-1-tag-nesting-fail1
  - IF the document is an XML page AND the tag is not self-closing:
    - RETURN SC4-1-1-tag-nesting-fail2
  - ELSE RETURN SC4-1-1-tag-nesting-pass1

| Outcome  | Failed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Error    | This element requires a closing tag.
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-fail1

| Outcome  | Failed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Error    | Element must use self-closing syntax.
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-fail2

| Outcome  | Passed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-pass1

### Step 3: Check that tags are closed in the right place=
Test method: [automatic]

- Make a list childTags of tags that follow the current tag, until it's closing tag
- IF childTags has an opening tag for each closing tag in the list:
  - return SC4-1-1-tag-nesting-pass2
- ELSE IF NOT ALL these unopened closing tags does not fail STEP 4:
  - return SC4-1-1-tag-nesting-fail3

| Outcome  | Passed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-pass2

| Outcome  | Failed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Error    | Element is incorrectly nested
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-fail3

### Step 4: Closing tags have a corresponding opening tag=
- IF The current closing tag does not have a corresponging opening tag:
  - Return SC4-1-1-tag-nesting-fail4

| Outcome  | Failed
|----------|-----
| Testcase | SC4-1-1-tag-nesting
| Error    | Closing tag does not have a corresponding opening tag
| Pointer  | selector result
| ID       | SC4-1-1-tag-nesting-fail4
