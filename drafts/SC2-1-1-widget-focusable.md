This rule checks that each element that has an aria role that is has widget as a superclass can receive focus.

# selector

Select each elements that meet the following properties
- It has a role attribute
- The role is one of the following:
  `checkbox`, `dialog`, `link`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch`, `textbox`, `tab`, `menuitem`, `menuitemcheckbox`, `menuitemradio`
- It does not have an `aria-disabled` attribute with the value of `true`


# Test Procedure

## Step 1
Check if the element matches the following CSS selector: `[tabindex], a[href], button, input, select, textarea`

If yes, return:

{{passed}}

If no, continue to step 2.


## Step 2
Check if the role value is one of the following: `tab`, `menuitem`, `menuitemcheckbox`, `menuitemradio`

If yes, continue to step 3.

If no, return:

{{failed}}


## Step 3

Check if the current element has an id, and if so if that ID is referenced in another element as part of the aria-owns property, this is/are the owner(s)

If there are multiple owner elements, return:

{{cantTell}}
**Note**: This is a WCAG violation, but not for this rule. We just can't proceed here.

If there is one, set it as the `$owner_element` variable

If there is none, set the parentElement of the currentElement as the `$owner_element` variable

Check if the `$owner_element` matches the following CSS selector: `[tabindex], a[href], button, input, select, textarea`

If yes, continue to step 5.

If no, continue to step 4.


## Step 4

Locate all siblings of the current element. If `$owner_element` has the aria-owns attribute, make `$siblings` a list of all elements with an id matching the ID values in aria-owns. If there is no aria-owns attribute, take all child elements of `$owner_element` as the `$siblings` list.

Check that any of the elements in `$siblings` matches the following CSS selector:  `[tabindex], a[href], button, input, select, textarea`

If yes, continue to step 5.

If no, return:

{{fail}}


## Step 5

| key           | value
|---------------| ---
| User Question | By using the `tab` key, can you move the focus through the page to the selected element


If yes, return:

{{passed}}

else return:

{{failed}}


