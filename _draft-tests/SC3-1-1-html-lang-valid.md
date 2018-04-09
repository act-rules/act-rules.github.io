---
rule_id: SC3-1-1-html-lang-valid
test_case_template: default
success_criterion:
- 3.1.1
---

## Passed

<<EMBED_START>>
```html
<html lang="fr">
```
<<EMBED_END>>

```html
<html xml:lang="fr">
```

<<EMBED_START>>
```html
<button>Test</button>      
```
<<EMBED_END>>

```html
<html xml:lang="fr" lang="fr">
```

## Failed

<<EMBED_START>>
```html
<html lang="xyz">
```
<<EMBED_END>>

```html
<html xml:lang="xyz">
```

```html
<html lang="fr" xml:lang="xyz">
```

## Inapplicable

```html
<svg lang="fr">
```

```html
<svg xml:lang="fr">
```
