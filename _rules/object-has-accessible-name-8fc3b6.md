---
id: 8fc3b6
name: Object element rendering non-text content has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each `object` element rendering non-text content has a non-empty accessible name.
accessibility_requirements:
  wcag20:1.1.1: # Non-text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility Tree
acknowledgments:
  authors:
    - António Estriga
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to any `object` element for which all the following are true:

- The `object` element is [included in the accessibility tree][]; and
- The `object` element has no [explicit role][]; and
- The `object` element embeds a resource whose MIME type is either [image](https://mimesniff.spec.whatwg.org/#image-mime-type), or [audio or video](https://mimesniff.spec.whatwg.org/#audio-or-video-mime-type).

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Some screen readers announce `object` elements even if they do not have an accessible name, while other skip the element. If an `object` is used to render decorative content, to ensure it is [marked as decorative][] and can be ignored by all major screen readers a presentational role is necessary.

The [MIME type][] of the resource embedded in the `data` attribute impacts how the [accessible name][] of the `object` is computed. For example, `object` embedding [image MIME type][] may use their `alt` attribute to compute their [accessible name][], but `object` embedding [audio or video MIME types][] may not. An `object` does not officially support the use of an `alt` so this may behave differently according to the browser used.

## Background

Testing that the [accessible name][] describes the purpose of the `object` element is not part of this rule and must be tested separately.

Non-supported media formats make screen readers render the text content of the element instead of other attributes.

`Object` elements without an accessible name are ignored by assistive technologies unless they have an [explicit role][].

When the object resource is not loaded, the fallback content is rendered as shown in the Inapplicable Example: "This `object` element does not need an accessible name because it loads no image, audio, or video."

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

## Test Cases

### Passed

#### Passed Example 1

This `object` element which embeds an audio resource has a non-empty [accessible name][] through its `aria-label` attribute.

```html
<object aria-label="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Passed Example 2

This `object` element which embeds a video resource has a non-empty [accessible name][] through its `title` attribute.

```html
<object title="Rabbit animated short" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Passed Example 3

This `object` element which embeds an image resource has a non-empty [accessible name][] through its `aria-labelledby` attribute.

```html
<span id="label">W3C logo</span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Passed Example 4

This `object` element placed off screen, which embeds an audio resource, has a non-empty [accessible name][] through its `title` attribute.

```html
<html>
	<style>
		.offScreen {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<object title="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3" class="offScreen"></object>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `object` element which embeds an audio resource has an empty [accessible name][] because it does not provide an accessible name through one of `title`, `aria-label` or `aria-labelledby` attributes.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Failed Example 2

This `object` element which embeds a video resource has an empty [accessible name][] because the `title` attribute is empty.

```html
<object title="" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Failed Example 3

This `object` element which embeds an image resource has an empty [accessible name][] because the `span` element with `id="label"` is empty.

```html
<span id="label"></span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Failed Example 4

This `object` element which embeds an audio resource has an empty [accessible name][] because the `aria-labelledby` attribute references a non-existing id.

```html
<object aria-labelledby="download" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Failed Example 5

This `object` element has an empty [accessible name][]. The `img` element inside the `object` is not used in computing the `object`'s accessible name.

```html
<object data="/test-assets/shared/w3c-logo.png">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
</object>
```

#### Failed Example 6

This `object` element has `alt` attribute, however this will not create an [accessible name][]. Because of this the accessible name is empty.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3" alt="Moon speech"></object>
```

### Inapplicable

#### Inapplicable Example 1

This `object` element has an [explicit role][] of "img".

**Note**: Object elements with other roles may still require an accessible name. This is tested through other rules.

```html
<object role="img" title="W3C" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Inapplicable Example 2

This `object` element is not [included in the accessibility tree][] due to `display:none`.

```html
<object data="/test-assets/rabbit-video/video.mp4" style="display: none;"></object>
```

#### Inapplicable Example 3

This `object` element is not [included in the accessibility tree][] due to `visibility:hidden`.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3" style="visibility: hidden;"></object>
```

#### Inapplicable Example 4

This `object` element is not [included in the accessibility tree][] due to `aria-hidden="true"`.

```html
<object data="/test-assets/shared/w3c-logo.png" aria-hidden="true"></object>
```

#### Inapplicable Example 5

This `object` element is not [included in the accessibility tree][] because it is marked as decorative through `role="presentation"`.

```html
<object type="image/png" role="presentation" data="/test-assets/contrast/example.png"></object>
```

#### Inapplicable Example 6

This `object` element embeds an HTML resource.

```html
<object title="My University" data="/test-assets/shared/index.html"></object>
```

#### Inapplicable Example 7

There is no `object` element.

```html
<audio title="Moon speech" src="/test-assets/moon-audio/moon-speech.mp3"></audio>
```

#### Inapplicable Example 8

This `object` element does not need an accessible name because it loads no image, audio, or video. Instead the `img` element inside the `object` is rendered.

```html
<object data="/invalid/url/index.html">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
</object>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
[explicit role]: #explicit-role 'Definition of Explicit role'
[mime type]: https://mimesniff.spec.whatwg.org/#mime-type-groups 'MIME Sniffing - Living Standard, 2022/01/17'
[image mime type]: https://mimesniff.spec.whatwg.org/#image-mime-type 'MIME Sniffing - Living Standard, 2022/01/17'
[audio or video mime types]: https://mimesniff.spec.whatwg.org/#audio-or-video-mime-type 'MIME Sniffing - Living Standard, 2022/01/17'
