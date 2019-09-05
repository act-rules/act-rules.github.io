---
title: Disabled
key: disabled
---

An element that is normally [perceivable][] and [operable][], but has been rendered [inoperable][operable] either temporarily or permanently using one of the following techniques, is considered disabled:

1. The [`disabled`][disabled] attribute. The presence of this attribute, regardless of its value, either

    - on a [`button`][button], [`input`][input], [`select`][select], [`textarea`][textarea], or [form-associated custom element][]; or
    - on a [`fieldset`][fieldset] element
    
    will disable the element itself if it is not a [`fieldset`][fieldset] or, if it is, will disable any [descendants][descendant] of the element, excluding those that are [descendants][descendant] of the first [`legend`][legend] [child][] of the element.
    
    **Note:** When the [`disabled`][disabled] attribute is specified on a [`fieldset`][fieldset] element, [shadow-including descendants][shadow-including descendant] are **not** disabled by default. Such behavior may however be explicitly implemented by [form-associated custom elements][form-associated custom element].

2. The [`aria-disabled`][aria-disabled] attribute. The presence of this attribute with a value that is an [ASCII case-insensitive][] match for `true` will semantically disable an element and its [focusable][] [shadow-including descendants][shadow-including descendant]. 

    **Note:** When authors disable elements using the [`aria-disabled`][aria-disabled] attribute, it is assumed that appropriate measures have been taken to also functionally disable the element. This can be done by disabling pointer events using the [`pointer-events`][pointer-events] property and by disabling keyboard interactions using the [`tabindex`][tabindex] attribute.

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
[ascii case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive
[pointer-events]: https://www.w3.org/TR/SVG2/interact.html#PointerEventsProperty
[tabindex]: https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
