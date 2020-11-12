---
title: Disabled Element
key: disabled-element
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element is _disabled_ when it has been rendered [inoperable][] in one of the following ways:

1. The element matches the [`:disabled` pseudo-class][disabled pseudo-class], for HTML elements, it means that the element is [actually disabled][].

2. The element has a [shadow-including ancestor][] whose `aria-disabled` [attribute value][] is "true".

   **Note:** When the `aria-disabled` attribute is specified on an element, it is assumed that the element has also been disabled for users that do not rely on [assistive technology][]. For example, this can be done by disabling pointer events using the `pointer-events` property and by disabling keyboard interactions using the `tabindex` attribute.

[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[assistive technology]: https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies
[attribute value]: #atttribute-value 'Definition of Attribute Value'
[disabled pseudo-class]: https://drafts.csswg.org/selectors/#disabled-pseudo "CSS Selectors Level 4 (Editor's Draft), definition of the :disabled pseudo-class"
[inoperable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor
