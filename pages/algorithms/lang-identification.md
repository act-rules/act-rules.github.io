A [[language identification algorithm]] is used the determine the language of a given text. 

Some languages can be determined reliably from their script alone. In these cases it is sufficient to analyse the characters and encoding of the web content.

For languages sharing the same script (such as languages using the latin alphabet), the distinction is more difficult.
State-of-the-art approaches use statistical methods. A widely used approach are supervised machine learning algorithms  based on character n-grams. These algorithms are trained on example texts in a known language. The generated model can be used to label unknown text.

This class of algorithms has the following properties:
* The algorithm needs training data in all languages that are to be classified.
* It has poor performance on single words. The recommended input size is 200-300 characters.
* Only one language is assigned to each chunk of text. Languages changes can not be detected with the basic approach.
* Problems to distinguish languages that are closely related (such as Danish and Norwegian).

=== auto-wcag recommendation ===
The auto-wcag group does not recommend the use of any particular algorithm. Instead each tool that uses automatic language identification should disclose which algorithm, implementation, or third party libraries are used.

== Background ==
* [http://en.wikipedia.org/wiki/Language_identification List of implementations (both libraries and web services)] from Wikipedia

[[Category:Algorithm]]
