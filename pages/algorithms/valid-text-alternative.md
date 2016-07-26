{{status|0: For review|1186}}
[[Category:Review]]

Algorithm to check validity of textual alternative. It must be [[non-empty]], not a filename, an URL or a placeholder.

__TOC__


Check following for the result of the [[Text Alternative Computation]] algorithm:


==Step 1.	Alternative is non-empty==

If the regular-expression "/([a-zA-Z0-9])+/ig" has less than three matches, return invalid.

==Step 2.	Alternative is not a filename==

If the regular-expression "/.+\.(bmp|jpg|jpeg|jfif|gif|png|tif|tiff)/" matches, return invalid. (List of formats may be extended).

==Step 3.	Alternative is not a URI==

Matching URIs by a regular expression is quite complex, but could be done. On match, return invalid.

==Step 4.	Alternative is not a placeholder==

To identify placeholders, a blacklist (possibly of regular expressions) should be maintained to compare the textual alternative. On match, return invalid.

Example: {nbsp, spacer, bullet, image, photo, picture, placeholder, alt, …}


If none of the above issues is found, return valid.


''Note: For 2 and 3 it may be simpler to check, if the textual alternative is contained in the value of the <code>href</code> or respectively in the value of the <code>src</code> attribute, because in most cases these invalid texts are inserted automatically by content management or portal systems.''

[[Category:Algorithm]]
