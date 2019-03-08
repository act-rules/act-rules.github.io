---
layout: default
title: Implementation Overview
---

The {{site.title}} rules are authored for reliable `WCAG` testing. In order to facilitate this goal each rule has a variety of test cases in the categories of `passed`, `failed` and `inapplicable`. Incorporating a rule from the {{site.title}} into your test tool, is considered an **implementation**. The test cases provided for the rules can be used to infer if an implementation yields the `expected` results.

In the spirit of Open source collaboration, the {{site.title}} welcomes [contributions]({{ site.url }}/pages/contribute.html) of implementation statistics, to aid as a coverage metric of the rules. This in turn helps to improve the accuracy and completeness of both the rules and the test tools.

The below sections go into greater detail on the structure of a test case, tools for using the test cases, the anatomy of an implementation report and how to submit an implementation report, back to the community.

## {{ site.title }} Test Cases

The rules authored in the {{site.title}}, comes with several test cases, which are designed for easy consumption by test tools. The test cases are made available regularly at [{{site.data.package.config.testcases.url}}]({{site.data.package.config.testcases.url}}).

A test case for a given rule is represented as shown by the below excerpt, where:
- `url`: is the standalone page containing the test case.
- `expected`: is the expected outcome of the test case, pertaining to the rule.
- `ruleId`: is the unique identifier for the rule.
- `rulePage`: is the page containing a detailed rule description.

```json
 "a11y-testcases": [
    {
      "url": "https://auto-wcag.github.io/auto-wcag/auto-wcag-testcases/assets/SC1-1-1-image-has-name_passed_example_1.html",
      "expected": "passed",
      "ruleId": "SC1-1-1-image-has-name",
      "rulePage": "https://auto-wcag.github.io/auto-wcag/rules/SC1-1-1-image-has-name.html"
    },
    ...
 ]
```


## Available tooling for using {{site.title}} Test Cases

The community has authored an open source tool, that demonstrates consumption of the {{site.title}} test cases against a test tool. 

Contributions to the `testrunner` tool, and or other tooling of similar nature are welcome. 

Refer [contribution guide]({{ site.url }}/pages/contribute.html).

Tool Name | Tool URL | Language |  Tool Description
---|---|---|---
`testrunner` | [https://github.com/auto-wcag/testrunner](https://github.com/auto-wcag/testrunner) | JavaScript | A [puppeteer](https://github.com/GoogleChrome/puppeteer) based implementation that allows running a configurable test tool against all the above {{ site.title }} test cases on a per page basis, and returns raw results.


## {{ site.title }} Implementation Report

Incorporating a {{site.title}} rule into your test tool, is considered an **implementation**. Submitting implementations from various test tools, helps not only showcase the coverage of test cases authored for the rule, but to build a robust understanding of the WCAG rules and the respective implementations.

Test tool authors are welcome to submit the implementation results for the above test cases to the {{site.title}} community. The implementation report should be a valid [JSON-LD](https://json-ld.org/spec/latest/json-ld/) document, where the assertions are expressed using [EARL](https://www.w3.org/TR/EARL10-Schema/). Also, note that the report contains a list of assertion results for each of the test cases. An example assertion for a test case, is as below:

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
      },
      "test": { 
        "@type": "@id" 
      }
    },
    "@type": "WebPage",
    "url": "https://auto-wcag.github.io/auto-wcag/auto-wcag-testcases/assets/SC1-1-1-image-has-name_passed_example_1.html",
    "assertions": [
      {
        "@type": "Assertion",
        "mode": "earl:automatic",
        "assertedBy": {
          "@id": "URL by which the specific version of your tool can be identified",
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
        "test": "Link to rule description",
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

## How to submit your implementation metrics

In order to submit your implementation metrics, it is recommended that the report be made available via a URL, in the above format, and an issue be opened for the same requesting that implementation metric be added to the site data.

The implementations are interpreted by the site, which are then listed in the [coverage report]({{ site.url }}/pages/implementations/coverage.html). Each rule also has an implementation flag based on the above reports. The flags are as below:

Flag | Description
---|---
`New` | The rule has no implementation
`In progress` | The rule has at least one implementation but no more than 2 implementations
`Done` | The rule has 3 or more implementations

See pages:
- [Coverage Metrics]({{ site.url }}/pages/implementations/coverage.html)
- [Rule Implementation Metrics]({{ site.url }}/pages/rules.html)
  