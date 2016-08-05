---
title: Test design
---

## Templates

The following templates are currently used for the design of new tests:

- [Rule template](rule-template.html) with explanations
- [Rule template (empty)](rule-template-empty.html) for creating new tests
- Selector tests overview
- Result template

## How to Work With the Wiki

To edit on the wiki, you need to log in with your W3C account. Only members of the auto-wcag community group can edit the wiki. Once logged in, the page contains an 'edit' button. You'll see a text editor, which is just a textarea with a few buttons at the top to help with the wiki text markup. Wiki text is a type of text format that is transformed into the HTML of the page. If you are not sure about how to do certain mark up, you can use the tool bar in the text editor 

Click the 'save page' button at the bottom  of the page to store changes. If you want to preview the page to see if you did the markup correct, click the "preview" tab at the top of the edit page to review. Please review your work before you save it. Once something is saved it's part of the page history.

Internal links of the wiki come in three different colours. Unfortunately this not quite as accessibility out of the box as we may want. Important to note are the red links. These refer to pages that are not yet created. This is indicated in the title of the link, which contains the text "page does not exist".

## How to Create a Test Case

Start off at the [[Test overview]] page. This page contains all the success criteria. If a name is next to the success criterion, this means that development of test cases for that success criterion are coordinated by that person. If you wish to contribute to test cases for such a criterion, please contact this person and let them know what you plan to do.

### Add the Test Case to the Criterion

If you want to add a test case for a success criterion that does not have a page yet. Simply create this page and use the content of another success criterion page as a template for the new page. Make sure to update the text of the criterion and to remove references to test cases of the other criterion.

Once the page is created, you can create your test case. Add a new list item to the page under 'Which elements / situations are tested?', and link that to the test case you wish to create. Instructions on what should be contained in the test case can be found in [[Test template]] with explanations. You can use the [[Test template (empty)]] as a basis for the test case.

### Submit the Test Case for Review

Once you're done with the test, add the `[[Category:Review]]` tag to the top of the page. This will add it to the page to the [List of test cases for review](). During the weekly meetings tests will be reviewed from this list. If you require specific feedback or have any questions you can contact the mailing list at public-auto-wcag@w3.org.

### Add examples to the Test Case

You can add examples pages and html code snippets to a test case. There is a separate page for each test case that contains the examples. The name of the page is the name of the test case with " Example" appended. For instance "[SC2-4-4-a Example]()" contains the examples for "[SC2-4-4-a]()".

If an html code snippet is related to a specific outcome of the test case, use the corresponding identifier (e.g. "SC2-4-4-link-text-fail1") to describe it.

Please add the `[[Category:Example]]` tag to identify pages containing examples.
