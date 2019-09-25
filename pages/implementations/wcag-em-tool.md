---
title: WCAG-EM Report Tool
---

If you have a manual test methodology, where you fill results into some report template or tool, you can use the WCAG-EM Report Tool to produce implementation reports.

## Step 1: Find the Test Cases File

1. Go to the [rules](/rules) page, then open the rule you wish to test

2. In the page navigation under Useful likes, you will find a link to **Testcases (EM Report Tool)**. Click this link and save the file to your machine.

## Step 2: WCAG-EM Report Tool, Setup

1. Open the WCAG-EM Report tool: https://www.w3.org/WAI/eval/report-tool/#/open

2. Select the file you downloaded in step 1 and load it

3. Go to Audit sample

4. Under "Sample to evaluate" click the checkbox to select all files

## Step 3: Run The Testcases

1. Under each success criterion set to "Cannot tell" click "Show web pages to enter
   individual results

2. For every page, answer "passed", "failed" "not present" or "cannot tell" (this has to be
   done on each success criterion

3. Go to "report findings" and enter your name under "evaluator"

4. Go to "View report" and click "Save evaluation data (JSON)". This will get you the implementation report.

## Step 4: Upload the Implementation Report

### For New Implementors

1. [Join the ACT-R Community group](https://w3.org/community/act-r/). This ensures the community license agreement is signed.

2. [Open an issue](https://github.com/act-rules/act-rules.github.io/issues/new), proposing the new implementation. Please include the name of the implementation, and attach the implementation report.

### For Existing Implementors

1. Go to the "reports" directory in the repository of your implementation (Example: [RGAA Reports](https://github.com/act-rules/act-rules-implementation-rgaa/tree/master/reports))

2. Click "Upload files" and upload the reports
