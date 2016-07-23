---
layout: default
---

# Basic aggregation algorithm

Each test case of the Auto-WCAG group is related to a specific WCAG 2.0 success criterion. A success criterion can (and usually does) have multiple test cases associated with it. Each test case can have one of three outcomes: Pass, CannotTell and Fail. The results of individual test cases can be combined in the following manner, to find the result of a specific success criterion.

Before applying the following rules, you should first know if the Success criterion is *completely covered*. This is only true if: 1. The Auto-WCAG group has indicated the test is completely covered in the documentation, and 2. all test cases described for the success criterion are implemented in the tool running the aggregation algorithm. 


- IF there are no test cases:
  -  the success criterion result is NotTested
- ELSE IF any of the test cases reported Failed:
  - the success criterion result is Failed
- ELSE IF any of the test cases reported CannotTell:
  - the success criterion result is CannotTell
- ELSE IF the success criterion is NOT completely covered:
  - the success criterion result is CannotTell
- ELSE IF any of the test case reported Passed:
  - the success criterion result is Passed
- ELSE:
  - The success criterion result is NotPresent

