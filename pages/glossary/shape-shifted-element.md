---
title: Shape-Shifted Element
key: shape-shifted-element
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element is _shape-shifted_ is the [computed value][] of it has an [inclusive ancestor][] in the [flat tree][] with any of its [shape-shifting properties][] different from the [initial value][] of that property.

The <dfn id="shape-shifted-element:properties">Shape-Shifting Properties</dfn> are the following CSS properties:

- `border-radius` and the associated longhands;
- `transform`;
- `rotate`;
- `clip`;
- `clip-path`;

#### Background

Shape-shifted elements have an actual area on screen that can be very different from a rectangle aligned with the screen edges, and therefore hard to precisely compute. Rules looking at this area ignore shape-shifted elements for the sake of simplicity.

Not all shape-shifting properties significantly change the shape of an element. For example, a rotation of 180°, a `transform` property defining only the `translate` function, or a `clip-path` along a rectangular shape would not really alter the shape. This definition ignores these for the sake of simplicity.

Other CSS properties may alter the area covered by an element, for examples `height` or `width`. These properties, however, do not alter the _shape_ (rectangle aligned with the edges) and tend to keep the covered area and the CSS box model in harmony. Therefore, this definition doesn't include them.

[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[computed value]: https://www.w3.org/TR/css-cascade-5/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of flat tree'
[initial value]: https://www.w3.org/TR/css-cascade-5/#initial-value 'CSS definition of initial value'
[shape-shifting properties]: #shape-shifted-element:properties
