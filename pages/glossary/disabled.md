---
title: Disabled
key: disabled
---

An element that is normally [perceivable][] and [operable][], but has been rendered [inoperable][operable] either temporarily or permanently, is considered disabled. While there exists several techniques through which elements can be disabled, the most typical are:

1. The [`disabled`][disabled] attribute. The presence of this attribute, regardless of its value, either

    - on a [`button`][button], [`input`][input], [`select`][select], [`textarea`][textarea], or [form-associated custom element][]; or
    - on a [`fieldset`][fieldset] element
    
    will disable the element itself if it is not a [`fieldset`][fieldset] or, if it is, will disable any [descendants][descendant] of the element, excluding those that are [descendants][descendant] of the first [`legend`][legend] [child][] of the element.
    
    **Note:** When the [`disabled`][disabled] attribute is specified on a [`fieldset`][fieldset] element, [shadow-including descendants][shadow-including descendant] are **not** disabled.

2. The [`aria-disabled`][aria-disabled] attribute. The presence of this attribute with a value of `true` will semantically disable an element and its [focusable][] [shadow-including descendants][shadow-including descendant].

[operable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[perceivable]: https://www.w3.org/TR/wai-aria/#dfn-perceivable
[aria-disabled]: https://www.w3.org/TR/wai-aria/#aria-disabled
[disabled]: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
[form-associated custom element]: https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element
[button]: https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
[input]: https://html.spec.whatwg.org/multipage/input.html#the-input-element
[select]: https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
[textarea]: https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
[fieldset]: https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[legend]: https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[shadow-including descendant]: https://dom.spec.whatwg.org/#concept-shadow-including-descendant
[focusable]: https://html.spec.whatwg.org/multipage/interaction.html#focusable-area
