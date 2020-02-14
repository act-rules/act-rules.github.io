---
title: Clipped by Overflow
key: clipped-by-overflow
unambiguous: true
objective: true
---

A [node][] with an [ancestor][] with a [computed][] [overflow][] of `none` or `clipped`, where the any of the [client rects][] of the [node][] is not fully contained by the [bounding box][] of this [ancestor][], or in case of a [computed][] [overflow][] of `clipped` by the [content box][] of this [ancestor][].

[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2019/02/14'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, as of 2019/02/14'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow]: https://www.w3.org/TR/CSS22/visufx.html#overflow
[client rects]: https://drafts.csswg.org/cssom-view/#dom-element-getclientrects 'CSS working draft, node.getClientRects, 2020/02/14'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[content box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-content-box
