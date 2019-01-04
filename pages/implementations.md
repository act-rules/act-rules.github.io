---
layout: default
title: Implementations & Coverage Report
---

<!-- List of implementations -->
<table class="table table-striped">
  <thead>
    <tr>
			<th width='3%'>#</th>
			<th>Test System Name</th>
      <th>Version</th>
			<th>Created By</th>
			<th>Report</th>
    </tr>
	</thead>
  <tbody id='pageImplementationsTblBody' >
    <!-- Rows are injected dynamically -->
  </tbody>
</table>

<!-- Javascript -->
<script type="text/javascript" src="{{site.baseurl}}/assets/js/page-implementations.js"></script>

# {{ site.title }} Test Cases

The test cases of {{ site.title }} rules are made available at [{{site.baseurl}}/auto-wcag-testcases/testcases.json]({{site.baseurl}}/auto-wcag-testcases/testcases.json).

A test case for a given rule is represented as shown by the below excerpt, where:
- `url`: is the standalone page containing the test case.
- `expected`: is the expected outcome of the test case, pertaining to the rule.
- `ruleId`: {}
- `rule`: 
- `ruleUrl`:

<!-- TODO: the above structure may have to change due to file name changes -->

```json
 "a11y-testcases": [
    {
      "url": "https://auto-wcag.github.io/auto-wcag/auto-wcag-testcases/assets/SC1-1-1-image-has-name_passed_example_1.html",
      "expected": "passed",
      "ruleId": "SC1-1-1-image-has-name",
      "rulePage": "https://auto-wcag.github.io/auto-wcag/rules/SC1-1-1-image-has-name.html",
      "rule": {
        "id": "xxxxxx",
        "title": "Image has name",
        "url": "https://auto-wcag.github.io/auto-wcag/rules/SC1-1-1-image-has-name.html"
      }
    },
    ...
 ]
```

The above test cases can be consumed to run against a test tool. The generated results are welcome to be submitted as implementation to the auto-wcag community.

# {{ site.title }} Implementation

Submitting implementations from various test tools, helps not only showcase the coverage of test cases authored for the rule, but to build a robust understanding of the WCAG rules and the respective implementations.
Any test tool authors are welcome to submit the implementation results for the above test cases to the {{site.title}} community. 
The implementation manifest should be a valid [JSON-LD](https://json-ld.org/spec/latest/json-ld/) document, where the assertions are expressed using [EARL](https://www.w3.org/TR/EARL10-Schema/).
The manifest contains a list of assertion results for each of the test cases. 

An example assertion for a test case, is as below:

```json
[
  {
    "@context": {
      "doap": "http://usefulinc.com/ns/doap#",
      "foaf": "http://xmlns.com/foaf/spec/#",
      "@vocab": "http://www.w3.org/ns/earl#",
      "earl": "http://www.w3.org/ns/earl#",
      "WCAG20": "http://www.w3.org/TR/WCAG20/#",
      "WCAG21": "http://www.w3.org/TR/WCAG21/#",
      "auto-wcag": "https://auto-wcag.github.io/auto-wcag/rules/",
      "dct": "http://purl.org/dc/terms#",
      "sch": "https://schema.org/",
      "WebPage": "sch:WebPage",
      "url": "dct:source",
      "assertions": {
        "@reverse": "subject"
      },
      "assertedBy": {
        "@type": "@id"
      },
      "outcome": {
        "@type": "@id"
      },
      "mode": {
        "@type": "@id"
      },
      "pointer": {
        "@type": "ptr:CSSSelectorPointer"
      }
    },
    "@type": "WebPage",
    "url": "https://auto-wcag.github.io/auto-wcag/auto-wcag-testcases/assets/SC1-1-1-image-has-name_passed_example_1.html",
    "assertions": [
      {
        "@type": "Assertion",
        "mode": "earl:automatic",
        "assertedBy": {
          "@id": "==== YOUR TOOL ID & VERSION ====",
          "@type": [
            "earl:Assertor",
            "earl:Software",
            "doap:Project"
          ],
          "doap:name": "Axe",
          "doap:vendor": {
            "@id": "==== YOUR ORGANIZATION URL ====",
            "@type": "foaf:Organization",
            "foaf:name": "==== YOUR ORGANIZATION NAME ===="
          }
        },
        "test": {
          "@type": "TestCase",
          "@id": "==== LINK TO RULE DESCRIPTION ===="
        },
        "result": {
          "@type": "TestResult",
          "info": "Ensures <img> elements have alternate text or a role of none or presentation",
          "outcome": "earl:passed",
          "pointer": "img"
        }
      }
    ]
  },
  ...
]
```

# Available tooling

Below is a list of Open Source tooling, that enables both consumption of the {{site.title}} test cases, and for the generation of the manifest.


Tool Name | Tool URL | Language |  Tool Description
---|---|---|---
Testrunner | https://github.com/auto-wcag/testrunner | JavaScript | A [puppeteer](https://github.com/GoogleChrome/puppeteer) based implementation that allows running a configurable test tool against all the above {{ site.title }} test cases on a per page basis, and returns raw results.
