---
title: Embedded Image
key: embedded-image
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element presents an _embedded image_ when any of the following is true:

- the element is an `img` element with a non-empty [source set][]; or
- the element is an `input` element with a `type` [attribute value][] of `image` and its `src` [attribute value][] is not empty; or
- the element is an `object` element with a `data` [attribute value][] referencing a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type); or
- the element is an `svg` element having one or more `image` [descendants][] with a non-empty `href` [attribute value][]; or
- the element has a [computed][] [`background-image`][background-image] CSS property with at least one [`image`][css-image] that is a [url reference][url-reference].


[attribute value]: #attribute-value 'Definition of Attribute Value'
[background-image]: https://drafts.csswg.org/css-backgrounds-3/#background-image
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[css-image]: https://www.w3.org/TR/css-images-3/#typedef-image
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set
[url-reference]: https://www.w3.org/TR/css-images-3/#url-notation
