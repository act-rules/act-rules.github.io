---
title: Implementation Report
order: 4
---

Incorporating a rule into your test tool, is considered an **implementation**. Submitting implementations from various test tools, helps not only showcase the coverage of test cases authored for the rule, but to build a robust understanding of the WCAG rules and the respective implementations.

Test tool authors are welcome to submit the implementation results for the above test cases to the WCAG-ACT-RULES-CG. The implementation report should be a valid [JSON-LD](https://json-ld.org/spec/latest/json-ld/) document, where the assertions are expressed using [EARL](https://www.w3.org/TR/EARL10-Schema/). Also, note that the report contains a list of assertion results for each of the test cases. An example assertion for a test case, is as below:

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

## How to submit your implementation metrics (report)

In order to submit your implementation metrics, it is recommended that the report be made available via a URL, in the above format, and an issue be opened for the same requesting that implementation metric be added to the site data.

The implementations are interpreted by the site, which are then listed in the [coverage report]({{ site.url }}/pages/implementations/coverage.html). Each rule also has an implementation flag based on the above reports. The flags are as below:

Flag | Description
---|---
`New` | The rule has no implementation
`In progress` | The rule has at least one implementation but no more than 2 implementations
`Done` | The rule has 3 or more implementations  