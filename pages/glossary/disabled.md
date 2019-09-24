---
title: Disabled
key: disabled
---

An element that is normally [perceivable][] and [operable][], but has been rendered [inoperable][operable] either temporarily or permanently using one of the following techniques, is considered disabled:

1. The [`disabled`][disabled] attribute. The presence of this attribute, regardless of its value, on a 
    - [`button`][button], 
    - [`input`][input], 
    - [`select`][select], 
    - [`textarea`][textarea], 
    - [form-associated custom element][],
    - or [`fieldset`][fieldset] element
    
    will disable the element itself if it is not a [`fieldset`][fieldset] or, if it is, will disable any [descendants][descendant] of the element, excluding those that are [descendants][descendant] of the first [`legend`][legend] [child][] of the element.
    
    **Note:** When the [`disabled`][disabled] attribute is specified on a [`fieldset`][fieldset] element, [shadow-including descendants][shadow-including descendant] are **not** disabled by default. Such behavior may however be explicitly implemented by [form-associated custom elements][form-associated custom element].

2. The [`aria-disabled`][aria-disabled] attribute. The presence of this attribute with a value that is an [ASCII case-insensitive][] match for `true` will semantically disable an element and its [focusable][] [shadow-including descendants][shadow-including descendant]. 

    **Note:** When the [`aria-disabled`][aria-disabled] attribute is specified on an element, it is assumed that appropriate measures have been taken to also functionally disable the element. This can be done by disabling pointer events using the [`pointer-events`][pointer-events] property and by disabling keyboard interactions using the [`tabindex`][tabindex] attribute.

[aria-disabled]: https://www.w3.org/TR/wai-aria/#aria-disabled
[ascii case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive
[button]: https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[disabled]: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
[fieldset]: https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
[focusable]: https://html.spec.whatwg.org/multipage/interaction.html#focusable-area
[form-associated custom element]: https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element
[input]: https://html.spec.whatwg.org/multipage/input.html#the-input-element
[legend]: https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element
[operable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[perceivable]: https://www.w3.org/TR/wai-aria/#dfn-perceivable
[pointer-events]: https://www.w3.org/TR/SVG2/interact.html#PointerEventsProperty
[select]: https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
[shadow-including descendant]: https://dom.spec.whatwg.org/#concept-shadow-including-descendant
[tabindex]: https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
[textarea]: https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
