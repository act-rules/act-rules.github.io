---
title: Rule Design
---

The [auto-wcag test design](Introduction_to_auto-wcag_test_design) builds on WCAG 2.0 and its supporting documents. To achieve the [[auto-wcag goals]] the following approach is suggested:

- Use **selectors** to group the tests by page element and Success Criterion.
- Define the **test subject and its environment**.
- Describe **complete workflow and testing logic**, i.e. test procedures that can reach a conclusion if the web content passes or fails a Success Criterion.
- Explicitly state **all assumptions** made by the test design to ensure accountability of the tests.

Optional features:

- Identify **assertor requirements**, such as the level of expertise of a human evaluator or the capabilities of an automated tool.

## Selectors

The selectors add structure to the set of tests and provide additional details for the implementation of automated test.

For each Success Criterion the page elements that have to be checked are identified. The tests are grouped by page element.

The selectors are **disjoint**, i.e. each elements is matched by at most one selector per SC.

```
{{Example
|text = [[1.4.1 Use of Color]] addresses:
* links within text
* form elements
* other text
* images
}}
```

The auto-wcag will describe separate tests for each of these cases. The cases are derived from the WCAG 2.0 Success Criteria and the Techniques for WCAG 2.0.

The selectors must be **unambiguous**. Whenever possible selectors should be given in a machine-readable way. So that the subject of the test can be identified automatically (and thus be subject to sampling if needed). This approach supports less experienced evaluators because the test subject can be presented together with the relevant steps of the test procedure. In some cases the selection can't be done by a tool because human judgement is required. This is also be stated in the test description.

The following options for **machine-readable** selectors are considered by auto-wcag:

;CSS selectors: 
:* W3C Recommendation: [http://www.w3.org/TR/css3-selectors/ Selectors Level 3].
:* Work in progress [http://www.w3.org/TR/2013/WD-selectors4-20130502/ Selectors Level 4] and [http://www.w3.org/TR/2014/WD-selectors-nonelement-1-20140603/ Non-element Selectors Module Level 1]
;HTML 5: Algorithmic selectors as described in [http://www.w3.org/TR/html5/semantics.html#semantics The elements of HTML]
;XPath: W3C Recommendation: [http://www.w3.org/TR/xpath-30/ XML Path Language (XPath) 3.0]

''Note'' that selectors are used to trigger a test. They should not be confused with ways to identify an element in the report/test results. The latter will be expressed as [[Result_template#earl:TestResult|earl:TestResult]] in particular the <code>earl:pointer</code> property.

== Test subject and environment ==
The auto-wcag tests state the subject to which the test is applied and describe the environment in which the test is carried out. (See also: **WAET** [http://www.w3.org/TR/2014/WD-WAET-20140724/#subjects Retrieving and rendering web content])

The **environment** specifies how tools must pre-process the web content before the test is applied.

```
{{Example
|text = An HTML grammar check is carried out on the unprocessed HTML source. Tests that check the color contrast must be applied on the DOM and CSS.
}}
```

The environment is one of:

1. HTML source (= unprocessed source of the web page)
2. DOM tree (= generated source after onload scripts are applied (no user interaction). CSS is taken into account so that elements that are not displayed are not tested.)
3. DOM and CSS (= same as 2. plus computed style for each element)
4. rendered page (= page as it is presented in a browser)
5. rendered page + server connection

*Note* that the test descriptions should specify the minimum level of pre-processing. A test that is carried out on the DOM can usually also be carried out on the rendered page but the the latter needs more processing power. It should also be kept in mind that the use of a (headless) browser can introduce bugs in the test procedure.

```
{{Open question
|name = To do
|text = Elaborate connection to WCAG 2.0 ''[http://www.w3.org/TR/WCAG20/#reliedupondef (technologies that are) relied upon]''
}}
```

The **subject** determines which parts of a web page or web site must be analysed to carry out the test.

```
{{Example
|text = A test that checks for labels in a form can be carried out on the respective DOM fragment. A test for consistent navigation must take into account multiple pages.
}}
```

The subject is one of:
- single web page
- multiple web pages
- web page state
- DOM document fragment

*Note* that the test description should specify the minimum level.

## Complete workflow and testing logic

The selectors help the user (or tool) identify what has to be checked. The goal of the auto-wcag test design is to cover the complete workflow, i.e. all steps / all tests that are necessary to reach a conclusion. The workflow contains automated and manual steps. Usually a combination of both.

The results for the individual steps / tests are combined to reach a conclusion about the success criterion. All success criteria use the same [[basic aggregation algorithm]].

## All assumptions

Many accessibility evaluations (especially automated checks) make assumptions about the structure of the web content and the way in which technologies are used. Such assumptions influence the outcome of a test. If the assumptions are made implicitly, it will be difficult to interpret the test result. Comparability and reproduction of results by other tools are limited. Therefore the auto-wcag test include a list of all assumptions made by the test design.

```
{{Example
|text = A test for [[1.4.1 Use of Color]] has to make an assumption with CSS-properties are used to make a link visually evident. Typically something like <code>background</code>, <code>border</code>, <code>color</code>, <code>font</code>, or <code>text-decoration</code>.
}}
```

While most assumptions relate to the test itself, there are some assumptions that apply at other stages of the evaluation:

- It is assumed that the tested web page it the one that has to conform to WCAG 2.0 and that there is no [http://www.w3.org/TR/WCAG20/#conforming-alternate-versiondef conforming alternative version].
- It is assumed that the following technoligies are accessiblity supported: HTML 5, WAI-ARIA, ... (See also auto-wcag's [[Accessibility_Support|explanation on Accessibility Support]]).

Some tests also have **preconditions**. I.e. another accessibility test must pass before this test can be applied.

```
{{Open question
|name = To do
|text = Elaborate concept of "precondition". Is this really needed?
}}
```

## Assertor requirements (optional)
For each step of a test procedure (including the selection step) the auto-wcag tests describe if the step is carried out by a tool or by a human evaluator.

If the step is carried out by a human evaluator, the level of expertise can be specified:

1. no prior knowledge
2. basic understanding of HTML
3. basic understanding of HTML and WCAG
4. advanced understanding of HTML and WCAG

If the step is carried out by a tool, the required processing capabilities can be specified.