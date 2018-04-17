---
rule_id: SC3-1-1-html-xml-lang-match
test_case_template: default
success_criterion:
- 3.1.1
---

### Passed

<<EMBED_START>>
```html
<html lang="en" xml:lang="en">
```
<<EMBED_END>>

<<EMBED_START>>
```html
<html lang="en" xml:lang="En">
```
<<EMBED_END>>


<<EMBED_START>>
```html
<html lang="en" xml:lang="en-GB">
```
<<EMBED_END>>

### Failed

<<EMBED_START>>
```html
<html lang="fr" xml:lang="en">
```
<<EMBED_END>>

### Inapplicable

<<EMBED_START>>
```html
<svg lang="en" xml:lang="en">
```
<<EMBED_END>>