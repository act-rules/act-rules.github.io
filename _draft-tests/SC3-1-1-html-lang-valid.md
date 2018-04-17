---
rule_id: SC3-1-1-html-lang-valid
test_case_template: default
success_criterion:
- 3.1.1
---

## Passed

```html
<html lang="fr">
```

```html
<html xml:lang="fr">
```

```html
<html xml:lang="fr" lang="fr">
```

```html
<html lang="fr" xml:lang="xyz">
```

## Failed

```html
<html lang="xyz">
```

```html
<html xml:lang="xyz">
```

```html
<html xml:lang="xyz" lang="xyz">
```

## Inapplicable

```html
<svg lang="fr">
```

```html
<svg xml:lang="fr">
```
