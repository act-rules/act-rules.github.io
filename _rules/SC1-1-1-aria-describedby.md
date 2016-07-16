---
ruleId: SC1-1-1-aria-describedby
requirements:
  - name: 1.1.1 Non-text Content
    reference: https://www.w3.org/TR/WCAG20/#text-equiv-all
---

## Description
This test checks the sufficient provision of a long text description for elements using the `aria-describedby` attribute.

## Background
- [ARIA15: Using aria-describedby to provide descriptions of images](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA15)
- [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G73)
- [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G74)
- [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G92)
- [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F67)
- The proper provision of a short text alternative is checked in [[SC1-1-1-text-alternative]].


## Assumptions
- It is not checked for references to long text descriptions within short text alternatives such as "The image is described in text below".
- If the `aria-describedby` attribute is provided, a long description was intended and is needed for the element.
- This test assumes that `role="image"` is properly used.


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Proper use of aria-describedby
| Success Criterion | 1.1.1 Non-text Content
| Test mode         | SemiAuto
| Test environment  | Rendered page
| Test subject      | Web page state
| User profile      | Requires sight


## Test procedure

### Selector
Test method: [automatic][earl:automatic]

Select following elements providing an `aria-describedby` attribute:
- `img` elements
- `input` elements of `type="image"`
- all elements with `role="image"`

````
//*[self::img[@aria-describedby] or self::input[@type="image" and @aria-describedby] or self::*[@role="image" and @aria-describedby]]
````

### Step 1
Test mode: [automatic][earl:automatic]

Check if at least one of the `aria-describedby` attribute values is a valid identifier.

if yes, continue with [step 2](#step-2)

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-aria-describedby
| ID       | SC1-1-1-aria-describedby-fail1
| Error    | None of the aria-describedby attribute values is a valid identifier.

### Step 2
Test method: [automatic][earl:automatic]

Check if at least one of the elements referenced by the valid `aria-describedby` attribute values exists.

if yes, continue with [step 3](#step-3)

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-aria-describedby
| ID       | SC1-1-1-aria-describedby-fail2
| Error    | None of the elements referenced by aria-describedby exists.

### Step 3
Test method: [manual][earl:manual]

Concatenate the results of [[Text Alternative Computation]] Algorithm run on the element itself and assign it to variable T1 and on all elements referenced by the `aria-describedby` attribute and assign it to variable T2.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Element with T1 and T2
| Question             | Does T2 provide an extended description of the image additionally to T1?
| Help                 | If the image contributes meaning to the page or provide any functionality or conveys information additional to the pages text, this must be described.
| Repair               | If no, could you suggest an long text alternative, which would sufficiently describe the image?
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-aria-describedby
| ID       | SC1-1-1-aria-describedby-pass1

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-aria-describedby
| ID       | SC1-1-1-aria-describedby–fail3
| Error    | The long description provided using aria-describedby is not sufficiently descriptive.

[earl:automatic]: ../pages/test-modes.md#automatic
[earl:semiauto]: ../pages/test-modes.md#semiauto
[earl:manual]: ../pages/test-modes.md#manual