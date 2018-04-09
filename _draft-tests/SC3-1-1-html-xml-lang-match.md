---
rule_id: SC3-1-1-html-xml-lang-match
test_case_template: default
success_criterion:
- 3.1.1
---

### Passed

```html
<html lang="en" xml:lang="en">
```

```html
<html lang="en" xml:lang="En">
```

```html
<html lang="en" xml:lang="en-GB">
```

### Failed

```html
<html lang="fr" xml:lang="en">
```

### Inapplicable

```html
<svg lang="en" xml:lang="en">
```