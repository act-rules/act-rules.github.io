---
title: Rule Design
---

The Auto-WCAG rule design builds on WCAG 2.0 and its supporting documents. To achieve the Auto-WCAG goals the following approach is suggested:

1. **Rule identifier**: The identifier for the rule

2. **Description**: Brief description of what the rule does

3. **Background**: A list of resources that support the workings of the rule.

4. **[Assumptions](#assumptions)**: Explicitly state all assumptions made by the rule to ensure accountability of the results.

5. **[Rule properties](#rule-properties)**: Define the test subject and its environment, as well as other meta data.

6. **[Selector](#selector)**: Use selectors to group the tests by page element and Success Criterion.

- **[Test steps](#test-steps)**: Describe complete flow and testing logic, i.e. test procedures that can reach a conclusion if the web content passes or fails a Success Criterion.

## Rule identifier

For the name of the test case use the following format: **SC#-#-#-identifier**

- **SC#-#-#**: This is an identifier for the criterion to which the test case applies. #-#-# stands for the number of that criterion, such as SC4-1-2.

- **+SC#-#-#**: This can be used if the test case applies to multiple success criteria, such as SC1-1-1+SC4-1-2-identifier. The numbers are in the same order as they are used in WCAG.

- **identifier**: This must be a lower case identifier of the test, preferably no more then 3 words. It can only contain alphanumeric values or a dash (-).

## Assumptions

Many accessibility evaluations (especially automated tools) make assumptions about the structure of the web content and the way in which (web) technologies are used. Such assumptions influence the outcome of a test. If the assumptions are made implicitly, it will be difficult to interpret the test result. Comparability and reproduction of results by other tools are limited. Therefore the Auto-WCAG test include a list of all assumptions made by the design of the rule.

> *For example:* A rule for 1.4.1 Use of Color has to make an assumption with CSS-properties are used to make a link visually evident. Typically something like `background`, `border`, `color`, `font`, or `text-decoration`.

While most assumptions relate to the rule itself, there are some assumptions that apply at other stages of the evaluation:

- It is assumed that the tested web page is the one that has to conform to WCAG 2.0 and that there is no [conforming alternative version](http://www.w3.org/TR/WCAG20/#conforming-alternate-versiondef).

- It is assumed that the following technologies are accessibility supported: HTML, CSS, WAI-ARIA, ... (See also Auto-WCAG's [explanation on Accessibility Support](accessibility-support.html)).

## Rule properties

The Auto-WCAG rules indicate the subject to which the test is applied and describe the environment in which the test is carried out. (See also: **WAET** [Retrieving and rendering web content](http://www.w3.org/TR/2014/WD-WAET-20140724/#subjects))

### Test environment

The **environment** specifies how tools must pre-process the web content before the test is applied.

*Example**: An HTML grammar check is carried out on the unprocessed HTML source. Tests that check the color contrast must be applied on the DOM and CSS.

The environment is one of:

- **HTML source**: Unprocessed source of the web page
- **DOM tree**: Generated source after onload scripts are applied (no user interaction). CSS is taken into account so that elements that are not displayed are not tested.
- **DOM and CSS**: Same as 2. plus computed style for each element)=
- **Rendered page**: Page as it is presented in a browser
- **Rendered page + server connection**: Page as it is presented in a browser, as well as an open connection (and any cookies or other session data that might be required)

**Note**: The rule should specify the minimum level of pre-processing. A test that is carried out on the DOM can usually also be carried out on the rendered page but the the latter needs more processing power. It should also be kept in mind that the use of a (headless) browser can introduce bugs in the test procedure.

### Test subject

The **subject** determines which parts of a web page or web site must be analysed to carry out the test.

> Example:
> A test that checks for labels in a form can be carried out on the respective DOM fragment. A test for consistent navigation must take into account multiple pages.

The subject is one of:

- single web page
- multiple web pages
- web page state
- DOM document fragment

*Note* that the test description should specify the minimum level.

### Assertor requirements (optional)

For each step of a test procedure (including the selection step) the auto-wcag tests describe if the step is carried out by a tool or by a human evaluator.

If the step is carried out by a human evaluator, the level of expertise can be specified:

1. no prior knowledge
2. basic understanding of HTML
3. basic understanding of HTML and WCAG
4. advanced understanding of HTML and WCAG

If the step is carried out by a tool, the required processing capabilities can be specified.

## Selector

The selectors add structure to the set of tests and provide additional details for the implementation in automated test tools.

For each Success Criterion the page elements that have to be checked are identified. The tests are grouped by page element.

The selectors are **disjoint**, i.e. each elements is matched by at most one selector per SC.

> *Example*: Success criterion 1.4.1 Use of Color might have the following selectors:
>
> - links within text
> - form elements
> - other text
> - images

The Auto-WCAG will describe separate tests for each of these cases. The cases are derived from the WCAG 2.0 Success Criteria and the Techniques for WCAG 2.0.

The selectors must be **unambiguous**. Whenever possible selectors should be given in a machine-readable way. So that the subject of the test can be identified automatically (and thus be subject to sampling if needed). This approach supports less experienced evaluators because the test subject can be presented together with the relevant steps of the test procedure. In some cases the selection can't be done by a tool because human judgment is required. This is also be stated in the test description.

The following options for **machine-readable** selectors used by Auto-WCAG:

- **CSS selectors**:
  1. W3C Recommendation: [http://www.w3.org/TR/css3-selectors/ Selectors Level 3].
  2. Work in progress [Selectors Level 4](http://www.w3.org/TR/2013/WD-selectors4-20130502/) and [Non-element Selectors Module Level 1](http://www.w3.org/TR/2014/WD-selectors-nonelement-1-20140603/)

- **HTML 5**: Algorithmic selectors as described in [The elements of HTML](http://www.w3.org/TR/html5/semantics.html#semantics)

- **XPath**: W3C Recommendation: [XML Path Language (XPath) 3.0](http://www.w3.org/TR/xpath-30/)

**Note**: Selectors are used to trigger a test. They should not be confused with ways to identify an element in the report/test results. The latter will be expressed as a Test Result, in particular the `earl:pointer` property.

## Test steps

The selectors help the user (or tool) identify what has to be checked. The goal of the Auto-WCAG test design is to cover the complete workflow, i.e. all steps / all tests that are necessary to reach a conclusion. The procedure contains automated and manual steps. Usually a combination of both.

The results for the individual steps / tests are combined to reach a conclusion about the success criterion. All success criteria use the same [basic aggregation algorithm](/pages/structure/aggregation.html).
