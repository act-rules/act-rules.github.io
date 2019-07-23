--
title: Distinguishing box-Shadow 
key: distinguishing-box-shadow
--

Look at the style property `box-shadow`

For the element to have a distinguishing box-shadow, all of the following must be true:

- Value must not be set `none`,
- Value must contain both a h-offset and a v-offset value that is different from 0, and
- Value must not have a color value set to `transparent`, or the color value specified must be different than the [background-color]() of the element, or if no color is specified, the [background-color]() of  the element is not the same as the default color of the box-shadow.
