---
title: Result Aggregation
---

Each rule of the Auto-WCAG group is related to a specific WCAG 2.x success criterion. A success criterion can (and usually does) have multiple rules associated with it. Each rule can have one of three outcomes: Pass, CannotTell and Fail. The results of individual rules can be combined in the following manner, to find the result of a specific success criterion.

Before applying the following logic, you should first know if the Success criterion is *completely covered*. This is only true if: 1. The Auto-WCAG group has indicated the criterion is completely covered in the documentation, and 2. all rules described for the success criterion are used in the test running the aggregation algorithm. 

- IF there are no rules:
  -  the success criterion result is NotTested
- ELSE IF any of the rule reported Failed:
  - the success criterion result is Failed
- ELSE IF any of the rule reported CannotTell:
  - the success criterion result is CannotTell
- ELSE IF the success criterion is NOT completely covered:
  - the success criterion result is CannotTell
- ELSE IF any of the rule reported Passed:
  - the success criterion result is Passed
- ELSE:
  - The success criterion result is NotPresent

