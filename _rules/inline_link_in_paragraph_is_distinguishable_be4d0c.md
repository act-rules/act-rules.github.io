---
id: be4d0c
name: Inline link in paragraph is distinguishable 
rule_type: atomic

description: |
  This rule checks that links that are embedded in a paragraph have a way to distinguish them as links compared to the rest of the text

accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.4.1: # Use of Color (A)
   forConformance: true
   failed: not satisfied
   passed: further testing needed
   inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling

acknowledgments:
  authors:
    - Brian Bors
    - Carlos Duarte
---

## Applicability

This rule applies to any HTML element which:

- has the [semantic role][] of ['link'][link] or a [semantic role][] that inherits from the ['link'][link] role; and
- is a [descendant][] of a `p` element; and
- has [descendant][] [text nodes][text node] that are [visible][]; and
- the `p` element has other [descendant][] [visible][] [text nodes][text node].

## Expectation

Each target element has either:
- An icon immediately before, after or in the link denoting it as a link
- Text immediately before, after or in the link denoting it as a link
- a [distinguishing style][] compared to the other text not based on colour alone
- a different colour compared to the rest of the text in the paragraph that has at least a 3:1 [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) difference with the rest of the text and a [distinguishing style][] both when the target element's [focus state is triggered](#focus-state-is-triggered) and the target element's [hover state is triggered](#hover-state-is-triggered)

## Assumptions

This rule assumes that the link is distinguishable from the rest of the text with colour, which means it fails SC 1.4.1 when there is not another way to distinguish it.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.1: Use of Color] (https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](http://www.w3.org/TR/WCAG20-TECHS/G183.html) 
- [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F73.html)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/TR/WCAG20-TECHS/C15.html) 

## Test Cases

### Passed

#### Passed Example 1

This is a link that is a descendant of a paragraph element and it uses the default styling of links which makes it underlined in most browsers which is a distinguish style. 

```html
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### TODO Passed Example 2

This is a link that is a descendant of a paragraph element and the underline is removed but an icon is added to denote it as a link. 

```html
<html>
<head>
<style>
a.test {
  text-decoration: none;
}
</style>
</head>
<body>

<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>

</body>
</html>
```

#### Passed Example 3

This is a link that is a descendant of a paragraph element and the underline is removed but a text is added to denote it as a link. 

```html
<html>
<head>
<style>
a.test {
  text-decoration: none;
}
</style>
</head>
<body>

<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage by following this link</a>.</p>

</body>
</html>
```

#### Passed Example 4

This is a link that is a descendant of a paragraph element and the underline is removed but the link has a distinguishing box-shadow whish is a distinguishing style. 

```html
<html>
<head>
<style>
a.test {
  text-decoration: none;
  box-shadow: 4px 4px;
}
</style>
</head>
<body>

<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>

</body>
</html>
```

#### Passed Example 5

This is a link that is a descendant of a paragraph element and the underline is removed but the link has a text contrast of more than 3:1 compared to the other text in the paragraph and when it receives focus or hover an underline appears. 

```html
<html>
<head>
<style>
a {
  text-decoration: none;
  color:#D14826;
}
a:hover {
  text-decoration: underline;
}
a:focus {
  text-decoration: underline;
}
</style>
</head>
<body>

<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>

</body>
</html>
```


### Failed

#### Failed Example 1

This is a link that is a descendant of a paragraph element and the underline is removed but the link has no other way of being recognized as a link. 

```html
<html>
<head>
<style>
a.test {
  text-decoration: none;
}
</style>
</head>
<body>

<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>

</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This is no semantic role of link within this example. 

```html
<p>Read about WAI on the <u>underlined text</u>.</p>
```

#### Inapplicable Example 2

This is a link that is not a descendant of a paragraph element. 

```html
Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.
```

#### Inapplicable Example 3

This link has no descendant text nodes. 

```html
<p>Read about WAI on the <a href="http://w3.org/WAI"></a>.</p>
```

#### Inapplicable Example 4

This link has no visible descendant text nodes. 

```html
<p>Read about WAI on the <a href="http://w3.org/WAI" style="visibility:hidden">WAI webpage</a>.</p>
```

#### Inapplicable Example 5

This paragraph has no descendant text nodes apart from those in the link. 

```html
<p><a href="http://w3.org/WAI">WAI webpage</a></p>
```

#### Inapplicable Example 6

This paragraph has no visible descendant text nodes apart from those in the link. 

```html
<p><span style="visibility:hidden">Invisible text</span><a href="http://w3.org/WAI">WAI webpage</a></p>
```
