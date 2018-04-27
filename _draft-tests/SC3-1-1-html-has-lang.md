---
rule_id: SC3-1-1-html-has-lang
test_case_template: default
success_criterion:
- 3.1.1
---

### Passed

```html
<html lang="en">
```

```html
<html xml:lang="en">
```

```html
<html xml:lang="en" lang="en">
```

### Failed

```html
<html>
```

### Inapplicable

```html
<svg lang="en">
```