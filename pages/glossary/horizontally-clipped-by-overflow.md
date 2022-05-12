---
title: Horizontally Clipped by Overflow
key: horizontally-clipped-by-overflow
unambiguous: true
objective: true
---

A [node][] is <dfn>Horizontally Clipped by Overflow</dfn> if it has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-x][] of `hidden` or `clip`, where changing the [overflow-x][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

#### Example of Horizontally Clipped by Overflow

This `img` element has an [ancestor][] `div` element with an `overflow-x` of `hidden`. The width of the `img` is greater than that of the [ancestor][] `div`, and so is clipped by the `overflow-x` property of the `div`.

```html
<div style="width: 100px; overflow-x: hidden;">
	<img src="/test-assets/shared/w3c-logo.png" width="150" alt="Partial W3C Logo" />
</div>
```

[visible]: #visible
[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2019/02/14'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, as of 2019/02/14'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow-x]: https://drafts.csswg.org/css-overflow/#overflow-properties
