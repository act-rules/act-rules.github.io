---
title: Visible Inner Text
key: visible-inner-text
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

(The "visible inner text" defined here is similar to, but not the same as, [visible text content][] and [innerText](https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute).)

The <dfn>visible inner text of a node</dfn> depends on the kind of node. 

The <dfn id="visible-inner-text:for-text">visible inner text of a [text node][]</dfn> is:
1.   if the [text node][] is [visible][], its visible inner text is its [data][] with whitespace normalized by replacing contiguous [whitespace][] with `" "` (U+0020 SPACE);
1.   <dfn id="visible-inner-text:for-text-whitespace">if the [text node][] is not [visible][], is [rendered][], and contains only [whitespace][], its visible inner text is `" "` (U+0020 SPACE);</dfn>
1.   otherwise, the visible inner text of the [text node][] is `""` (the empty string).


The <dfn id="visible-inner-text:for-element">visible inner text of an [element][]</dfn> is:
1.   if the [element][] is not [rendered][], its visible inner text is `""` (the empty string);
1.   if the [element][] is [rendered][] and not [visible][] and has a [bounding box][] which has width greater than 0, its visible inner text is `" "` (U+0020 SPACE);
1.   if the [element][] is [rendered][] and not [visible][] and has a [bounding box][] which has width of 0, its visible inner text is `""` (the empty string);
1.   if the [element][] is a [`<br>`][<br>] element, its visible inner text is `"\n"` (U+000A END OF LINE).
1.   if the [computed][] [`display`][display] property of the [element][] has an [outer display type][] of `block`, or an [inner display type][] of `table-caption`, the visible inner text of the [element][] is the concatenation of is `"\n"` (U+000A END OF LINE) plus the visible inner text of its children (in [tree order][] in the [flat tree][]) plus another `"\n"` (U+000A END OF LINE);
1.   if the [computed][] [`display`][display] property of the [element][] has an [inner display type][] of `table-cell` or `table-row`, the visible inner text of the [element][] is the concatenation of `" "` (U+0020 SPACE) plus the visible inner text of its children (in [tree order][] in the [flat tree][]) plus another `" "` (U+0020 SPACE);
1.   otherwise, the visible inner text of the [element][] is the concatenation of the visible inner text of its children (in [tree order][] in the [flat tree][]).


The <dfn>visible inner text</dfn> of any other node is the concatenation of the visible inner text of its children (in [tree order][] in the [flat tree][]).

[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[<br>]: https://html.spec.whatwg.org/#the-br-element
[computed]: https://drafts.csswg.org/css-cascade/#computed
[data]: https://dom.spec.whatwg.org/#concept-cd-data
[display]: https://drafts.csswg.org/css2/#propdef-display
[element]: https://dom.spec.whatwg.org/#element
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[inner display type]: https://drafts.csswg.org/css-display/#inner-display-type
[outer display type]: https://drafts.csswg.org/css-display/#outer-display-type
[rendered]: https://html.spec.whatwg.org/#being-rendered
[text node]: https://dom.spec.whatwg.org/#text
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order
[visible]: #visible
[visible text content]: #visible-text-content
[whitespace]: #whitespace
