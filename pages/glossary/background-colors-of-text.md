---
title: Background Colors Of Text Nodes
key: background-colors-of-text
---

All colors of the pixels not part of the [foreground colors](#foreground-colors-of-text) pixels, in an bounding box around each [visible](#visible) character in a [text node](https://dom.spec.whatwg.org/#text), where the width is the [advance width](https://www.w3.org/TR/css-values/#length-advance-measure), plus one pixel on the left and right, and the height is the [advance height](https://www.w3.org/TR/css-values/#length-advance-measure).

**Note**: The advance height is the [computed](https://www.w3.org/TR/css-cascade-3/#computed) [font-size](https://www.w3.org/TR/css-fonts-3/#font-size-prop), with a [specified](https://www.w3.org/TR/css-cascade-3/#specified) font-size property of [1 ch](https://www.w3.org/TR/css-values/#ch) adjusted according to the [font-size-adjust](https://www.w3.org/TR/css-fonts-3/#font-size-adjust-prop) property.
