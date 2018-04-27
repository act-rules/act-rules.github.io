---
rule_id: SC2-4-2-title
test_case_template: default
success_criterion:
- 2.4.2
---

### Passed

```html
<html>
  <title>This page has a title</title>
</html>
```

```html
<html>
  <title>This page gives a title to an iframe</title>
  <iframe src="page-without-title.html"></iframe>
</html>
```

### Failed

```html
<html>
  <h1>this page has no title</h1>
</html>
```

```html
<html>
  <title> <!-- this page has an empty title --> </title>
</html>
```

```html
<html>
  <iframe src="page-with-title.html"></iframe>
</html>
```
### Inapplicable

```html
<svg>
  <title>This is an SVG</title>
</svg>
```

[non-empty text]: ../pages/algorithms/non-empty.md