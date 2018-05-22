---
name: Links have an accessible name
description: |
  Each link has an accessible name

success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element with the [semantic role][] of `link` that is [visible on the page][] or [exposed to assistive technologies][].

### Expectation

Each target element has an [accessible name][] that is [non-empty][].

## Assumptions

- The rule assumes that all links are user interface components as defined by WCAG 2. When the link role is used incorrectly, this assumption may not be true.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA7.html)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html)
- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/WCAG20-TECHS/F89.html)

## Test Cases

### Passed
```html
<a href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

```html
<button role="link">Click me!</button>
```

### Failed

```html
<div>
  <p>
    Some detailed article, but the link to read more is placed with no relevance to the text, thereby the link has lost context.
  </p>
  <p>
    <a href="readmore.html">Read More...</a>
  </p>
</div>
```

```html
<table>
   <tr> 
       <td>Song: Ed Sheeran - Galway Girl.</td>
   </tr>
   <tr>
       <td>
        <a href="assets/download.html">
          Download Now
        </a>
       </td>
   </tr>
 </table>
```

### Inapplicable

```html
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

------

[non-empty]: ../pages/algorithms/non-empty.html
[accessible name]: ../pages/algorithms/accessible-name.html 
[semantic role]: ../pages/algorithms/semantic-role.html 
[exposed to assistive technologies]: ../pages/algorithms/exposed-to-assistive-technologies.html
[visible on the page]: ../pages/algorithms/visible-on-the-page.html
