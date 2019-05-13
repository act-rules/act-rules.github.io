# Contribute Implementations

ACT implementations are accessibility test tools or test procedures, that are consistent with ACT rules. Implementors can have their tool or testing methodology added to the list, by providing implementation data. This data comes in the form of results from tests on the test cases included in the ACT rules.

**Important**: Most of this document is written to support automation. If you are following a manual test methodology, look up how to use the [WCAG-EM Report Tool](./wcag-em-report-tool.md) for implementations instead.

## Test Cases

You can find a JSON file with URLs to all test cases here: https://act-rules.github.io/testcases.json

## Report Format

The test results for an implementation will use EARL, and be expressed using JSON-LD. This will look something like this:

```json
{ 
  "@context": "https://act-rules.github.io/earl-context.json",
  "@graph": [{
    "@type": "Assertion",
    "subject": {
      "source": "https://act-rules.github.io/testcases/a1b64e/6c3ac31577c3cb2d968fc26c4075dd533b5513fc.html"
    },
    "test": {
      "title": "My Tool's rule title"
    },
    "result": {
      "outcome": "earl:passed"
    }
  }]
}
```

### What is EARL / JSON-LD


### Required Fields


- `@type`: This must be "Assertion", to distinguish it from other data types that might exist in an EARL report.
- `subject.source`: The URL of the page that was tested. This is used to match the assertion up with the rule and test case that it is about. This can work even if the origin of the URL is changed (such as when served from localhost).
- `test.title`: A title for the rule / test procedure as it is known in the implementation
- `result.outcome`: One of the following values:

  - `earl:passed`: The test case passed the rule / test procedure. Other rules may still fail.
  - `earl:failed`: 
  - `earl:inapplicable`:
  - `earl:cantTell`:
  - `earl:untested`:

## Submitting Tests


## Permissions

Before you consider submitting an ACT implementation, make sure you have permission from the owner of the test tool or test methodology. If you or your product are unknown to the ACT-Rules community,  you will be asked to provide proof of this. You must be an ACT-R Community Group member to submit an implementation.