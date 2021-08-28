---
title: Assigned cell
key: assigned-cell
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - DOM tree
---

This definition of assigning header cells to data cells is different from the [internal algorithm for scanning and assigning header cells](https://html.spec.whatwg.org/multipage/tables.html#internal-algorithm-for-scanning-and-assigning-header-cells) in the [HTML specification](https://html.spec.whatwg.org/). The algorithm provides guidance on how those elements should be mapped to accessibility APIs whereas this definition focuses solely on the outcome of the mapping. It takes into consideration the structure of the [table][] and [grid][] elements as they appear in the accessibility tree.

In order for an [accessible object][] with the [semantic role][] of [rowheader][] to be assigned to an [accessible object][] with the [semantic role][] of either [cell][], or inheriting from [cell][], at least one of the following is true:

- there is at least one non-empty [accessible object][] with a [semantic role][] of either [cell][], or inheriting from [cell][], that has the `headers` attribute with the value that matches the `id` [attribute value][] of the [rowheader][] that is being evaluated, and it is an [owned element][] of the same [table][] or [grid][] as the [rowheader][]; or
- there is at least one non-empty [accessible object][] with a [semantic role][] of either [cell][], or inheriting from [cell][], that is a child of an [accessible object][] with the [semantic role][] of [row][] that is also the parent of the evaluated [rowheader][], or
- there is at least one non-empty [accessible object][] with a [semantic role][] of either [cell][], or inheriting from [cell][], that has a `rowspan` attribute that spans over the [position in the set][] of the [rowheader][]'s parent [row][].

An [accessible object][] with the [semantic role][] of [columnheader][] is assigned to an element with a [semantic role][] of either [cell][], or inheriting from [cell][], if at least one of the following is true:

- there is at least one non-empty [accessible object][] with a [semantic role][] of either [cell][], or inheriting from [cell][], that has the `headers` attribute with the value that matches the `id` [attribute value][] of the [columnheader][] that is being evaluated, and it is an [owned element][] of the same [table][] or [grid][] but it is not a child of the same [accessible object][] with the [semantic role][] of [row][] as the [columnheader][]; or
- there is at least one non-empty [accessible object][] with a [semantic role][] of either [cell][], or inheriting from [cell][], that is a child of an [accessible object][] with the [semantic role][] of [row][], that is not the parent element of the [columnheader][] for which the assignment is evaluated; the [cell][]'s [row][] is an [owned element][] of the same [table][] or [grid][] to which the [columnheader][] belongs and has the same [index][] as the [columnheader][], or it has a `colspan` attribute which together with the [cell][]'s [index][] value spans over the [index][] value of the [columnheader][].

Whenever there is a [cell][] that spans the width of more than one column or a [cell][] that spans the height of more than one row, that [cell][]'s [index][] is the same for all spanned rows and columns. It means that the [indexes][index] of [cells][cell] that are owned by a [row][] that receives such spanned [cells][cell] are incremented by the value of either the `rowspan` or the `colspan` attribute.

In the following example, the index of the `td` element inside the last `tr` element is 2. It is because it's original value is incremented by the value of the `colspan` attribute of the `td` element inside the second `tr` that also spans the [position in the set][] value of the last `tr` element.

```html
<table>
	<tr>
		<th>H1</th>
		<th>H2</th>
		<th>H3</th>
	</tr>
	<tr>
		<td rowspan="2" colspan="2">Foo</td>
	</tr>
	<tr>
		<td>Bar</td>
	</tr>
</table>
```

[accessible object]: https://www.w3.org/TR/core-aam-1.1/#dfn-accessible-object
[attribute value]: #attribute-value 'Definition of attribute value'
[cell]: https://www.w3.org/TR/wai-aria-1.1/#cell 'ARIA cell role'
[table]: https://www.w3.org/TR/wai-aria-1.1/#table 'ARIA table role'
[grid]: https://www.w3.org/TR/wai-aria-1.1/#grid 'ARIA grid role'
[columnheader]: https://www.w3.org/TR/wai-aria-1.1/#columnheader 'ARIA columnheader role'
[rowheader]: https://www.w3.org/TR/wai-aria-1.1/#rowheader 'ARIA rowheader role'
[row]: https://www.w3.org/TR/wai-aria-1.1/#row 'ARIA row role'
[index]: https://dom.spec.whatwg.org/#concept-tree-index 'Definition of index'
[position in the set]: https://www.w3.org/TR/wai-aria-1.1/#aria-posinset 'Definition of aria-posinset'
[semantic role]: #semantic-role 'Definition of semantic role'
[owned element]: https://www.w3.org/TR/core-aam-1.1/#dfn-owned-element 'Definition of owned element'
