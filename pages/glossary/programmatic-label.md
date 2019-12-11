---
name: programmatic label
key: programmatic-label
---

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the [`aria-labelledby`][aria-labelledby] attribute of T.

**Note**: a given element may have more than one programmatic label.

#### Examples

The [`input`][input] element is a [labeled control][] of the [`label`][label element] element (implicit label). Therefore the [`label`][label element] element is a programmatic label of the [`input`][input] element.

```html
<label>Full name: <input type="text" name="full_name" /> </label>
```

The [`input`][input] element is a [labeled control][] of the [`label`][label element] element (explicit label). Therefore the [`label`][label element] element is a programmatic label of the [`input`][input] element.

```html
<label for="fname">Full name:</label> <input type="text" id="fname" name="full_name" />
```

The [`span`][span] element is referenced by the [`aria-labelledby`][aria-labelledby] attribute on the [`input`][input] element. Therefore, the [`span`][span] element is a programmatic label of the [`input`][input] element.

```html
<span id="label_fname">Full name:</span> <input type="text" name="full_name" aria-labelledby="label_fname" />
```

Both [`span`][span] elements are referenced by the [`aria-labelledby`][aria-labelledby] attribute on the [`input`][input] element. Therefore, each [`span`][span] element is a programmatic label of the [`input`][input] element.

```html
<span id="billing">Billing</span>
<span id="address">address</span>
<input type="text" name="billing_address" aria-labelledby="billing address" />
```

The [`span`][span] element is referenced by the [`aria-labelledby`][aria-labelledby] attribute on the [`input`][input] element and the [`input`][input] element is a [labeled control][] of the [`label`][label element]. Therefore, the [`span`][span] element and the [`label`][label element] are each a programmatic label of the [`input`][input] element.

```html
<span id="label_fname">Full name:</span>
<label>Full name: <input type="text" name="full_name" aria-labelledby="label_fname"/></label>
```

The [`div`][div] element is not [labelable][]. Therefore, it is not a [labeled control][] for the [`label`][label element] element and the [`label`][label element] element is **not** a programmatic label for the [`div`][div] element.

```html
<label for="bond">Full name</label>
<div id="bond">My name is Bond. James Bond.</div>
```

The [`span`][span] element is referenced by the [`aria-labelledby`][aria-labelledby] attribute on the [`div`][div] element. Therefore, the [`span`][span] element is a programmatic label of the [`div`][div] element. Note that the [`aria-labelledby`][aria-labelledby] attribute works on any element, not just on the [labelable][] elements.

```html
<span id="label_fname">Full name:</span>
<div aria-labelledby="label_fname">My name is Bond. James Bond.</div>
```

[aria-labelledby]: https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby 'The `aria-labelledby attribute and property'
[div]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element 'The `div` element'
[input]: https://html.spec.whatwg.org/multipage/input.html#the-input-element 'The `input` element'
[label element]: https://html.spec.whatwg.org/multipage/forms.html#the-label-element 'The `label` element'
[labelable]: https://html.spec.whatwg.org/multipage/forms.html#category-label 'Definition of labelable elements'
[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
[span]: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element 'The `span` element'
