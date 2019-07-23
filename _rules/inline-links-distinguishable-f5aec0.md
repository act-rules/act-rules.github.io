--
id: f5aec0
name: Inline link is distinguishable
rule_type: atomic
description: |
This rule checks that links that are embedded in a block of text and where color alone is used to identify them, have a sufficient color contrast ratio with the surrounding text, and additional cues are given when the link receives focus or hover. 
accessibility_requirements:
   wcag20:1.4.1: # Use of Color (A)
   forConformance: true
   failed: not satisfied
   passed: further testing needed
   inapplicable: further testing needed
input_aspects:
- Dom Tree 
- CSS Styling
authors:
- Wilco Fiers
- Jennifer Chadwick
- Anne Thyme Nørregaard

## Applicability

The rule applies to any HTML or SVG element with the [semantic role](#semantic-role) of `link` that lives up to the following criteria:
* is [focusable](#focusable),
* contains text nodes that are [visible](#visible) that doesn't have a [distinguishing style](), a [distinguishing border](), a [distinguishing box-shadow]() or a `background-image`,
* is in a [block of text]() that has [visible](#visible) text nodes, which 
** are NOT contained in any element with the [semantic role](#semantic-role) of link,
** do not exclusively consist of [whitespace](#whitespace), 
** have a different [foreground color](#foreground-color) or [background color]() than the `link`.

**Note:** This rule only applies to links that have a different color than the surrounding text, since the rule maps to Success Criterion 1.4.1 Use of Color. Links that do not have any distinguishing features and are also the same color as the surrounding text might pose an accessibility issue as well, but not related to this success criterion.

## Expectation 1

Within the same [block of text]() the [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) is 3:1 or greater between either 
- the [foreground color](#foreground-color) of the [visible](#) text nodes of the target element and [adjacent]() [visible]() text nodes, or 
- the [background color]() of the target element and the background color of any [adjacent]() [visible]() text nodes.

## Expectation 2

When the target element's [focus state is triggered](), the target element has a [distinguishing style](), a [distinguishing border](), a [distinguishing box-shadow]() or a `background-image`.

## Expectation 3

When the target element's [hover state is triggered](), the target element has a [distinguishing style](), a [distinguishing border](), a [distinguishing box-shadow]() or a `background-image`.

## Assumptions

- This tests assumes that [distinguishing style](), [distinguishing border]() or one of the CSS properties `color`, `background-color` or `background-image` is used to make the link visually evident. 
- This test assumes that the 3:1 [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) between link text and surrounding text is sufficient to meet WCAG 2.0. This value is part of technique G183, but is not specified in the 1.4.1 success criterion.
- The methods described in [distinguishing style]() is assumed to be sufficiently distinguishable.
- The methods described in [distinguishing border]() is assumed to be sufficiently distinguishable.
- The methods described in [distinguishing box-shadow]() is assumed to be sufficiently distinguishable.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](http://www.w3.org/TR/WCAG20-TECHS/G183.html) 
- [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F73.html)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/TR/WCAG20-TECHS/C15.html) 

## Test Cases ## NOT UPDATED

@@@ **Editor's note:** Test cases: breaks, margins, content in lots of spans etc. 

### Passed

#### Passed Example 1

Link uses the browser's default link styling

```html
<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>
```
#### Passed Example 2

Blue link in block of black text with text-decoration none has underline on hover and focus

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```
#### Passed Example 3 

Block of text only consist of one letter that is not contained within a link

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>A<a href="http://w3.org/WAI"> link text</a></p>

</body>
```

#### Passed Example 4

TBD

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 5

Additional cues on hover/focus is change in font-family

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
    font-family: "Times New Roman", Times, serif;
}

a:hover, a:focus {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 6

Additional cues on hover/focus is change in font-weight

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
    font-weight: normal;
}

a:hover, a:focus {
    font-weight: bold;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 7

Additional cues on hover/focus is italics

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
    font-style: normal;
}

a:hover, a:focus {
    font-style: italic;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 8

Additional cues on hover/focus is change of background-color

```html
<head>
<style>
p {
    color: black;
    background-color: white;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    background-color: red;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 9

Additional cues on hover/focus is background-image

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    background-image: url("arrow.gif");
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Passed Example 10

`button`element that is styled to look like a link and has role of `link`

```html
<head>
<style>
p {
    color: black;
}

button {
     background:none;
     color:blue;
     border:none; 
     padding:0;
     font: inherit;
     cursor: pointer;
}

button:hover, button:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <button role="link">button that acts like a link</button>.</p>

</body>
```

#### Passed Example 11

Box-shadow

´´´html

´´´

#### Passed Example 12

Border

´´´html

´´´

### Failed

#### Failed Example 1

Too low contrast between link text and surrounding text

@@@ **Editorial note:** split out <a> and a: link underlined

```html
<head>
<style>
p {
    color: red;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Failed Example 2

No additional cues on hover

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:focus {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Failed Example 3

Additional cues on focus

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Failed Example 4

Transparent border

´´´html

´´´

### Inapplicable 

#### Inapplicable Example 1

`a` element doesn't have `href` attribute, so it doesn't have role of link

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a>a element without href attribute</a>.</p>

</body>
```

#### Inapplicable Example 2

```html
<!-- <a> element has had it's role changed -->
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI" role="button">link that has had its role changed</a>.</p>

</body>
```

#### Inapplicable Example 3

No visible text in the block of text the link is contained within

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}
</style>
</head>

<body>

<p><a href="http://w3.org/WAI">Read more</a><span style="display:none">about our latest organisational changes.</span></p>

</body>
```

#### Inapplicable Example 4

Breadcrumb with only links and separator characters

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}

</style>
</head>

<body>

<p>... / <a>About us</a> / <a>CSR</a> / <a>Accessibility</a></p>

</body>
```

#### Inapplicable Example 5

TBD 

```html
<head>
<style>
p {
    color: black;
}

a:link {
    color: blue;
    text-decoration: none;
}
</style>
</head>

<body>

<p>This is a block of text<a href="http://w3.org/WAI"></a>.</p>

</body>
```

#### Inapplicable Example 6

Link is underlined, therefore this rule is not applicable

```html
<head>
<style>
p {
    color: black;
}

a:link {
    text-decoration: underline;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```

#### Inapplicable Example 7

TBD

```html
<head>
<style>
a:link {
    text-decoration: none;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <span style="text-decoration: underline;"><a href="http://w3.org/WAI">link text that is underlined</a><span>.</p>

</body>
```

#### Inapplicable Example 8

TBD

```html
<head>
<style>
a:link {
    text-decoration: none;
}
</style>
</head>

<body>

<p><a href="http://w3.org/WAI">link 1</a> | <a href="http://w3.org/WAI">link 2</a>.</p>

</body>
```

#### Inapplicable Example 9

TBD

```html
<head>
<style>
a:link {
    text-decoration: none;
}
</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI"><span style="text-decoration: underline;">link text that is underlined<span></a>.</p>

</body>
```

#### Inapplicable Example 10

Button that looks like a link but has the role of `button`

```html
<head>
<style>
p {
    color: black;
}

button {
     background:none;
     color:blue;
     border:none; 
     padding:0;
     font: inherit;
     cursor: pointer;
}

button:hover {
    text-decoration: underline;
}

button:focus {
    text-decoration: underline;
}

</style>
</head>

<body>

<p>This is a block of text with an embedded <button>button that acts like a link</button>.</p>

</body>
```

#### Inapplicable Example 11

Link text color has too low contrast with background, but this is a violation of success criteria 1.4.3 Contrast (Minimum) and 1.4.6 Contrast (Enhanced), not 1.4.1 Use of Color

```html
<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>
```

#### Inapplicable Example 12

Blue link in block of black text with text-decoration none has underline on hover and focus

```html
<head>
<style>
p {
    color: black;
    background-color: white;
}

a:link {
    color: yellow;
    text-decoration: none;
}

</style>
</head>

<body>

<p>This is a block of text with an embedded <a href="http://w3.org/WAI">link text</a>.</p>

</body>
```
