Back to [[2.4.4 Link Purpose (In Context)]]


## Background
- [programmatically determined link context](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html#pdlinkcontextdef)
- [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/)
- [Accessible Name Calculation algorithm](http://www.w3.org/TR/wai-aria/roles#textalternativecomputation)
- [HTML to Platform Accessibility APIs Implementation Guide](http://www.w3.org/TR/html-aapi/#a-element) (section 6.10)
- [ARIA7: Using aria-labelledby for link purpose](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA7)
- [ARIA8: Using aria-label for link purpose](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA8)
- [H77: Identifying the purpose of a link using link text combined with its enclosing list item](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H77)
- [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H78)
- [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells ](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H79)
- [H81: Identifying the purpose of a link in a nested list using link text combined with its parent list item ](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H81)
- [F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F63)
- [F89 - providing null alt text on an image that is the only content of a link](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F89)


## Assumptions
- This test checks for actual links, not links whose role has been mapped to other UI elements using ARIA (example role="button").
- This test does not check for missing alt attribute for `<area>` tags in image maps, that is covered under [[SC2-4-4-image-map]]


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Link Purpose
| Success Criterion | [[ 2.4.4 Link Purpose (In Context)]]
| Test mode         | SemiAuto
| Test environment  | HTML source or DOM
| Test subject      | Single web page


## Test procedure
### Selector
Test method: [automatic]
- All anchor tags with an "href" attribute on a webpage, excluding anchor tags that have been mapped to other elements using ARIA roles.
- All elements with a `role="link"` attribute.

### Step 1 - Check for Accessible Name
Test method: [automatic]

- For each link, use the accessible name algorithm to derive the link's accessible name: see [HTML to Platform Accessibility APIs Implementation Guide](http://www.w3.org/TR/html-aapi/#a-element) - section 6.10
# If link has an aria-labelledby attribute, the link's accessible name is the value of its associated element.
# Otherwise check for aria-label. If an aria-label attribute is present, the link's accessible name is the text string value of that attribute.
# Otherwise use the link element subtree (value of the link content, if any). This include alt texts for images.
# Otherwise use the link's title attribute.

If none of the above yield a usable text string for the link:
return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-fail1
| Error    | No accessible name for link.

else go to [[Step 2]]

### Step 2 - Check for Uniqueness.
Test method: [semi-automatic]

Compare the calculated accessible names (see step 1) of all links on the page.

If all accessible names are unique then:
Return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-pass1

else go to [[Step 3]]

### Step 3 - Check Link Targets
Test method: [semi-automatic]

The following data structure is necessary for the remaining steps in this test:

- Create a group of all links whose accessible name is identical. (from here on refered to as a "group item")
- Add the group to a datastructure such as a list or an array.
- Repeat procedure until you have explored all the links on the page.

Now you have a collection of links grouped by their accessible names. In other wordsWithin each group item, all links have the same accessible name. We know we have at least one group item, since we got past [[Step 2]]. In the remaining steps we need to check for other factors that may explain why link texts are the same, and determine whether other factors exist that distinguish link texts.

- If all links in a group item point to same resource, they can have the same link text (this step).
- All links within a group item have same accessible name, but their accessible description (created by use of aria-describedby attribute or the title attribute) makes the link text unique (next step).
- All links within a group item have identical accessible names and descriptions, but their programmatic context is sufficient to distinguish them (step 5).
- Links are ambiguous to all users (step 6).

If a group item of links fails all checks, the test fails.

Check if links with identical accessible name go to the same destination.

If all links in a group item go to same destination, return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-pass2

else go to [[Step 4]]

### Step 4 - Add Accessible Description
Test method: [semi-automatic]
For each link in a group of links with identical accessible name:
Compute the link´s accessible description (see html to platform guide, section 6.10 as referenced above).
- Look for an aria-describedby attribute on a link. If present add the text of the target note to the link's accessible description node.
- If link has a non-empty title attribute that was not used as its accessible name, add value of the title attribute to the link's accessible description.

Compare links with their accessible names combined with their accessible descriptions.
If the combination of accessible name and accessible description uniquely identifies all links in a group item:
Return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-pass3

else go to [[Step 5]]

### Step 5 - Calculate Context
Test method: [semi-automatic]

Explore links together with their [programmatically determined link context](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html#pdlinkcontextdef)

This includes textual content of:

- Same paragraph as link
- Same list item as link
- Same table cell as link (if table role is not marked with presentation)
- Header cell for link's current table cell (if table is not marked withrole ="presentation")

For each link, construct a variable which contains the link's accessible name, description and context. Repeat the uniqueness check.

If all links in a group item, considered together with their computed accessible description and programatically determinable context are unique: Return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-pass4

else go to [[Step 6]]

### Step 6 - Links are ambiguous to All Users
Test method: [manual]

(links may be ambiguous to users in general, need interactive testing).

For all remaining links in a given group item, present them to human testers.

Ask the testers if they can uniquely identify the purpose of each link within a group from its on-screen location or visible context.

**User Input Question:**
| Property             | Value
|----------------------|---------
| Presented item       | A set of links with identical name/accessible description and context as well as their location on the webpage highlighted visually.
| Requires context     | Yes links on screen (links in visual context)
| Requires Interaction | No (unless we recommend user activates and follows each link, which we might want to do)
| Question             | "The text description of these x links is the same. By looking at the screen, can you visually identify the purpose of these links better than the text can?
| Help                 | The link text presented to you should uniquely identify the purpose of each link on the page. For these links that is not the case. Can you, by looking at the links on your screen, identify the different destinations or context of these links better than by just looking at the accessible link text?
|repair = What would you propose as a good text description of the link, e.g. for those who can't see  it on the screen?

If yes return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-fail2
| Error    | Link text, together with description and context, is not sufficient to identify the link purpose.

else (link text meant to be ambiguous to all users), return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-link-text
| ID       | SC2-4-4-link-text-pass5
