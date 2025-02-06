---
title: Examples of Programmatic label
---

These are examples of the [Programmatic label][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Implicit labels

The `input` element is a [labeled control][] of the `label` element (implicit label). Therefore the `label` element is a programmatic label of the `input` element.

```html
<label>Full name: <input type="text" name="full_name" /> </label>
```

## Explicit labels

The `input` element is a [labeled control][] of the `label` element (explicit label). Therefore the `label` element is a programmatic label of the `input` element.

```html
<label for="fname">Full name:</label> <input type="text" id="fname" name="full_name" />
```

## Aria-labelledby, single reference

The `span` element is referenced by the `aria-labelledby` attribute on the `input` element. Therefore, the `span` element is a programmatic label of the `input` element.

```html
<span id="label_fname">Full name:</span> <input type="text" name="full_name" aria-labelledby="label_fname" />
```

## Aria-labelledby, multiple references

Both `span` elements are referenced by the `aria-labelledby` attribute on the `input` element. Therefore, each `span` element is a programmatic label of the `input` element.

```html
<span id="billing">Billing</span>
<span id="address">address</span>
<input type="text" name="billing_address" aria-labelledby="billing address" />
```

## Conflicting label methods

The `span` element is referenced by the `aria-labelledby` attribute on the `input` element and the `input` element is a [labeled control][] of the `label`. Therefore, the `span` element and the `label` are each a programmatic label of the `input` element.

```html
<span id="label_fname">Full name:</span>
<label>Full name: <input type="text" name="full_name" aria-labelledby="label_fname"/></label>
```

## Invalid label `for` attribute

The `div` element is not [labelable][]. Therefore, it is not a [labeled control][] for the `label` element and the `label` element is **not** a programmatic label for the `div` element.

```html
<label for="bond">Full name</label>
<div id="bond">My name is Bond. James Bond.</div>
```

## aria-labelledby on aside

The `span` element is referenced by the `aria-labelledby` attribute on the `aside` element. Therefore, the `span` element is a programmatic label of the `div` element. Note that the `aria-labelledby` attribute works on any element, not just on the [labelable][] elements.

```html
<span id="label_fname">Full name:</span>
<aside aria-labelledby="label_fname">My name is Bond. James Bond.</aside>
```

[programmatic label]: /glossary/#programmatic-label
[labelable]: https://html.spec.whatwg.org/multipage/forms.html#category-label 'Definition of labelable elements'
[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
