---
id: oe3rrh
name: Consistent navigation
rule_type: atomic
description: |
  This rule checks whether Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

accessibility_requirements:
  wcag2.1:3.2.3: # Consistent Navigation (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - CSS Styling
  - DOM tree
acknowledgments:
  authors:
    -  Chris Loiselle
    -  Helen Burge
---

## Applicability

This rule applies to any two pages within a given [set of pages][].

## Expectation 

For each target, [navigational mechanisms][] that are present on both pages appear in the same relative order.

## Background

### Assumptions

"Same relative order" means that secondary navigation items may change the original location of the elements. They can be present without affecting the outcome of this test.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding Success Criterion 3.2.3: Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)

## Test Cases

Procedure
Check to see if a navigation mechanism is being used on more than one Web page.
Check the default presentation of the navigation mechanism on each page to see if the list of links are in the same relative order on each Web page.
"Same relative order" means that secondary navigation items may be in between the link items on some pages. They can be present without affecting the outcome of this test.

Expected Results
If #1 is true and #2 is false, then this failure condition applies and content fails the Success Criterion.

### Passed


A search field is the last item on every Web page in a site. Users can quickly locate the search function.

An expanding navigation menu

A navigation menu includes a list of seven items with links to the main sections of a site. When a user selects one of these items, a list of sub-navigation items is inserted into the top-level navigation menu.

Consistently positioned skip navigation controls

A "skip navigation" (or "skip to main content") link is included as the first link on every page in a Web site. The link allows users to quickly bypass heading information and navigational content and begin interacting with the main content of a page.

Skip to navigation link

Navigational content is consistently located at the end of each page in a set of Web pages. A "skip to navigation" link is consistently located at the beginning of each page so that keyboard users can easily locate it when needed.

#### Passed Example 1

A consistently located control. Presenting repeated components in the same relative order each time they appear.


Examples of a navigation mechanism that presents links in same order.

Page 1 Menu

<div id="menu"> 
    <a href="Brazil.htm">Brazil</a><br />
    <a href="Canada.htm">Canada</a><br />
    <a href="Germany.htm">Germany</a><br />
    <a href="Poland.htm">Poland</a> 
</div>
Page 2 Menu

<div id="menu"> 
     <a href="Brazil.htm">Brazil</a><br />
    <a href="Canada.htm">Canada</a><br />
    <a href="Germany.htm">Germany</a><br />
    <a href="Poland.htm">Poland</a> 
</div>

#### Passed Example 2

...

### Failed

#### Failed Example 1

##### Description

This describes a failure condition for all techniques involving navigation mechanisms that are repeated on multiple Web pages within a set of Web pages (Success Criterion 3.2.3). If the mechanism presents the order of links in a different order on two or more pages, then the failure is triggered.

Example 1: An XHTML menu presenting a series of links that are in a different relative order on two different pages
Examples of a navigation mechanism that presents links in a different order.

Page 1 Menu

<div id="menu"> 
    <a href="Brazil.htm">Brazil</a><br />
    <a href="Canada.htm">Canada</a><br />
    <a href="Germany.htm">Germany</a><br />
    <a href="Poland.htm">Poland</a> 
</div>
Page 2 Menu

<div id="menu"> 
    <a href="Canada.htm">Canada</a><br />
    <a href="Brazil.htm">Brazil</a><br />
    <a href="Germany.htm">Germany</a><br />
    <a href="Poland.htm">Poland</a> 
</div>

```html
<!-- code -->
```

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

[set of pages]: #set-of-pages 'Definition of set of pages'
[navigational mechanisms]: #navigational-mechanisms 'Definition of a navigational mechanism'
