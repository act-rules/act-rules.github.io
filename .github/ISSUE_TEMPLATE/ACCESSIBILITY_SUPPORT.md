---
name: Accessibility support template
about: Issue for tracking accessibility support on ACT Rules
title: ''
labels: ['accessibility support']
assignees: ''
---

## Accessibility support

(( Put the accessibility support item here ))

## ACT Rules

- ... List the rules here, link to its acc support section

## Examples

### Test case 1 ...

(( Add example here ))

```html
code snippet here
```

[Open this example]()

(( Add a link to a code pen or other hosted example. Keep in mind this example needs to be accessible and persistent. ))

#### Preconditions

Before running the test, check your settings. In many cases default settings aren't strictly required and will not impact the results. Use common sense here. If non-default settings are necessary for you, record the settings used in the reported results.

- Ensure browsers are in the default settings, turn off unnecessary extensions
- Ensure ATs are in the default settings
- Ensure operating system are in default settings
- Ensure software uses the correct version (usually the latest version)

#### Test instructions

(( Provide instructions on how to test the example, this should include: ))

- Which technologies to use
- Any setting changes necessary to run the test
- Any variation in how to operate the different assistive technologies
- Step by step instructions on how to check the example
- What the expected results are

### External links

(( List any external links to bugs in browsers & AT, WPT, or spec issues. Be sure to open issues in the appropriate repositories. ))

<!--
Links to external resources to look for / raise issues
- Web platform tests: https://github.com/web-platform-tests/wpt
- JAWS issues: https://github.com/FreedomScientific/VFO-standards-support/issues
- NVDA issues: https://github.com/nvaccess/nvda/issues
- Firefox issues: https://bugzilla.mozilla.org/
- Chromium issues: https://issues.chromium.org/issues?q=componentid:1363614+
- Safari issues: https://github.com/WebKit/webkit/issues
- ARIA: https://github.com/w3c/aria/issues
- HTML: https://github.com/whatwg/html/issues
- CSS: https://github.com/w3c/csswg-drafts/issues
- AccName: https://github.com/w3c/accname/issues
- HTML AAM: https://github.com/w3c/html-aam/issues
- ARIA in HTML: https://github.com/w3c/html-aria/issues
- PowerMapper tests: https://www.powermapper.com/tests/
- Accessibility support: https://www.a11ysupport.io/
-->

## Test results

Please report test results in a comment below. Please use the following format:

```md
## Test case X

- Date: ...
- Operating system: ..., version ...
- Browser: ..., version ...
- Assistive technology: ..., version ...
- Test result: Passed / Failed (if failed, how was it different from expected?)
```
