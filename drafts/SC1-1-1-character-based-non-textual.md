
## Status
{{draft}}

## Description
This test checks that no non-textual information is conveyed by a sequence character.

## Background

- [http://www.w3.org/TR/WCAG20-TECHS/H86 H86: Providing text alternatives for ASCII art, emoticons, and leetspeak]
- [http://www.w3.org/TR/WCAG20-TECHS/F72.html F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative]
- [http://www.w3.org/WAI/ER/IG/ert/AsciiArt.htm WAI: ASCII art detection algorithms ]

## Assumptions

- ASCII art can be assembled using every printable character
- ASCII art can be multiline
- The charset is specified in the `head` section
- The font used can be either a system font or a font retrieved from the web
- Some characters are adjacently repeated  more than 4 times
- Most ASCII art uses non-letter characters
- Most ASCII art is inside `pre` or `xmp` elements (could also be a CSS `white-spaaaaaace: pre` styled element)
- Most ASCII art uses MonoSpace-fonts

- Text used to form shapes conveying information is also considered to be ASCII art

- Leetspeak is built following a set fixed rules and can be translated and also detected.
- Emoticons are built following a set fixed rules and can be translated and also detected.

- Single unicode characters in private use area `U+E000` to `U+F8FF` can be used to display graphics. Even those can convey information, e.g. be an icon for a filetype

## Test properties


## Test procedure

### Selector
All text nodes with exception of those contained in `script` and `style` elements <br/>
//*[not(self::script or self::style)]/text()

### Step 1
