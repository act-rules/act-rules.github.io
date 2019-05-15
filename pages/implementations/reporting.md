---
title: Status & Reporting
---

<!-- Coverage status will be added automagically here -->

## Implementation & Reporting

Incorporating a rule into your test tool, is considered an **implementation**. Submitting implementations from various test tools, helps not only showcase the coverage of test cases authored for the rule, but to build a robust understanding of the WCAG rules and the respective implementations.

Test tool authors are welcome to submit the implementation results for the above test cases to the WCAG-ACT-RULES-CG. The implementation report should be a valid [JSON-LD](https://json-ld.org/spec/latest/json-ld/) document, where the assertions are expressed using [EARL](https://www.w3.org/TR/EARL10-Schema/).

Also, note that the report contains a list of assertion results for each of the test cases (of each rule). An example assertion for a test case, is as below:

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

## How to submit your implementation report

- In order to submit your implementation metrics, it is recommended that the report be made available via a `URL`, in the above format.

* After creating the report and an `issue` be opened for the same requesting that implementation report (`URL`) be added to the site metrics.

* The report is then consumed by the site to deduce implementation metrics & status. A status is also appended to each rule based on the above reports. The status are as below:

| Status        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `New`         | The rule has no implementation                                              |
| `In Progress` | The rule has at least one implementation but no more than 2 implementations |
| `Done`        | The rule has 3 or more implementations                                      |

The higher the number of implementations, collected by the various community submitted reports, ensure high accuracy and completeness of the rules.

> Note: Refer [available tools](/pages/implementations/tools) section, to see if any of them can be used to generate the report in the above format.
