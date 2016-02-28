Back to Success Criterion [[2.4.5 Multiple Ways]]

## Status
{{status|0.1: For review|2133}}
[[Category:Review]]

## Description
This test checks that there are at least two of the following elements available on the web page:
- link to site map
- search form or link to search page
- list of links to all other web pages
- links to relevant web pages

## Background
- [http://www.w3.org/TR/WCAG20-TECHS/G63.html G63: Providing a site map]
- [http://www.w3.org/TR/WCAG20-TECHS/G125.html G125: Providing links to navigate to related Web pages]
- [http://www.w3.org/TR/WCAG20-TECHS/G126.html G126: Providing a list of links to all other Web pages]
- [http://www.w3.org/TR/WCAG20-TECHS/G161.html G161: Providing a search function to help users find content]

## Assumptions
- This test assumes that the web page isn’t a step or a result of a process.
- This test excludes technique G185: Linking to all the pages on the site from the home page.

## Test properties

| Property         | Value
|------------------|----
|Test name         |Multiple ways
|Test requirement  |[[2.4.5 Multiple Ways]]
|Test mode         |manual
|Test environment  |rendered page
|Test subject      |multiple web pages


## Test procedure

### Selector
Test method: [manual]
The entire web page.

### Step 1 (G125)
Test method: [manual]
Check if the web page provides links to navigate to related web pages.

{{UserInput
|presented-item = Web page.
|requires-context = yes
|requires-interaction = yes
|question = Does the web page provide links to the website navigation or other related web pages?
|help = A related web page is directly connected with the subject or purpose of the current web page. Examples are main navigation, table of contents and the breadcrumb trail.
}}

Create variable ‘multiple-ways’ and set value to ‘0’.

If true: variable ‘multiple-ways’ value + 1.

Continue to [[#Step 2 (G161)]].

### Step 2 (G161)
Test method: [manual]
Check if the web page provides a search form or a link to the search page.

{{UserInput
|presented-item = Web page.
|requires-context = yes
|requires-interaction = yes
|question = Does the web page provide a search form or a link to the search page?
|help = If the web page provides a search form or a link to the search page select "Yes". Else select "No".
}}

If true: variable ‘multiple-ways’ value + 1.


If variable ‘multiple-ways’ has a value of 2 or more, return:
{{Passed
|testcase = SC2-4-5-multiple-ways
|id = SC2-4-5-multiple-ways-passed1
}}

Else continue to [[#Step 3 (G63)]].

### Step 3 (G63)
Test method: [manual]
Check if the web page provides a link to the site map.

{{UserInput
|presented-item = Web page.
|requires-context = yes
|requires-interaction = yes
|question = Does the web page provide a link to the site map?
|help = A site map is a web page that provides links to all the web pages of the web site. If the web page has a link to the site map select “Yes”. Else select “No”.
}}

If true: continue to [[#Step 4 (G63)]].
Else continue to [[#Step 5 (G126)]].

### Step 4 (G63)
Test method: [manual]
Check if the site map is a valid site map.

{{UserInput
|presented-item = Site map.
|requires-context = yes
|requires-interaction = yes
|question = Is the site map a valid site map?
|help = The criteria of a valid site map are no broken links and includes all the links of primary and secondary navigation. If the site map meets the criteria select "Yes". Else select "No".
}}

If true: variable ‘multiple-ways’ value + 1.


If variable ‘multiple-ways’ has a value of 2 or more, return:
{{Passed
|testcase = SC2-4-5-multiple-ways
|id = SC2-4-5-multiple-ways-passed2
}}

Else continue to [[#Step 5 (G126)]].

### Step 5 (G126)
Test method: [manual]
Check if the web page provides a list of links to all other web pages.

{{UserInput
|presented-item = Web page.
|requires-context = yes
|requires-interaction = yes
|question = Does the web page provide a list of links to all other web pages?
|help = Examples are main navigation and a site map. If the page provides a list of links to all other web pages select "Yes". Else select "No".
}}

If true: variable ‘multiple-ways’ value + 1.


If variable ‘multiple-ways’ has a value of 2 or more, return:
{{Passed
|testcase = SC2-4-5-multiple-ways
|id = SC2-4-5-multiple-ways-passed3
}}

Else return:
{{Failed
|testcase = SC2-4-5-multiple-ways
|id = SC2-4-5-multiple-ways-failed1
|error = Not enough ways to access the web page.
|info =
}}
