---
title: ACT Implementations
---

<!-- Coverage status will be added automagically here -->

ACT Rules can be implemented in automated test tools and test methodologies. Tools and methodologies based on the same set of rules will produce (largely) the same results. Each rule includes a number of test cases that are used to check if an implementation is correct. The ACT Rules Community keeps a list of implementations that are actively implementing ACT Rules. By comparing how many implementations rules have, we work out which rules are widely agreed upon, and which ones need further discussion.

## Status Reports

The status of an ACT-R rule is dependent on how many implementations have adopted the rule. Once a sufficient number of implementations is reached, the ACT rule will be considered for submission for publication as a W3C note for WCAG.

| Status        | Description                              |
| ------------- | ---------------------------------------- |
| `New`         | The rule has no implementation           |
| `In Progress` | The rule has less than 3 implementations |
| `Done`        | The rule has 3 or more implementations   |

## Contribute An Implementation

If you developed an accessibility tool or a testing methodology, and would like to have your implementation included in the ACT-R website, there are two ways you can do so.

1. If you have a tool that can return a data format, you will need to run your tests against the [ACT-R test cases](../testcases/) and [submit a report](../reporting/).

2. If you use manual test methodology, where you fill results into some report template or tool, you can [Use the WCAG-EM Report Tool](../wcag-em-tool/) instead to produce implementation reports.
