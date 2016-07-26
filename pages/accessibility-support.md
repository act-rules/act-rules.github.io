---
title: Accessibility Support
---

**Draft**

## Accessibility Support (document/section)

This research effort (test suite, document, application) is focused on fostering and promoting the concept of developers '''Building to Spec''' both semantically and syntactically, rather than building to a current browser or assistive technologies (user-agent/AT) limited implementation support of specifications - or some version of jury-rigging or optimizing code to favor one UA/AT over another. Specifically AUTO-WCAGs testing rules are defined by the current specifications for WCAG2, HTML4, HTML5, (CSS3 ?) and ARIA1. 

As this effort matures and new technologies reach CR, they will included/added to data that governs the AUTO-WCAG test rules. 

Note that as these new CR specs (HTML5, ARIA1) gain wider support on the web, the WCAG Working Group at the same time, regularly releases (approx. every 6 months) both the WCAG 2 Techniques/Failures and Understanding WCAG 2 documents, with new content that is relevant to those newer specs. Additionally the new content and techniques address previous poorly supported disability groups (Cognitive) as well as changing technology delivery methods (Mobile).

"Accessibility supported" relates to support by user agents (including assistive technologies) of particular ways of using Web technologies. Uses of Web technologies that are accessibility supported will work with assistive technologies and access features in mainstream user agents (browsers and players etc.).

## Failure/Warning Blurb

For the very poorly supported HTML 5 and ARIA elements/attributes/etc - thus far, components of the test suite that contain them as validating items should have a Note (in the failure or warning) that says something like "This <element, attributes, etc> does not currently have much user agent support, specifically in the <browser name or AT name>. It is recommended that you should either; 

1. switch to an element that has broader support today - or - 
2. accept this failure/warning (as a known issue) hoping/knowing that when deployed this <element, attributes, etc> is expected to have broader support and more-so, over the lifespan of the content."

In this fashion you are building, as we are, to spec - not to bugs (or as yet supported components) in UA/AT.

## Web Content and AT Interoperability

### Two Key WCAG 2 Concepts

### Working Together: Accessibility Support & Programmatically Determinabl

For content created with digital web technologies (e.g., HTML, CSS, JavaScript, PDF, Media, GIF, MPEG, Scripts, SVG, Flash, etc.) to be accessible to people with different types of disabilities, it is essential that the content created and the technologies chosen MUST work with the accessibility features of browsers, players, other UA/AT.

The two concepts work together to ensure that information can be presented to the user by user agents including assistive technologies. Developers must rely only on uses of technologies that are known to be accessibility-supported — and must use them properly in order for the information to be programmatically determinable — and hence presentable, by assistive technologies and user agents to users with disabilities.

### Plain Language version of this Requirement

There are two concepts that must work together to ensure that information can be presented to the user of AT in an Accessible manner. 

1. Authors must rely only on using technologies that are accessibility-supported - and -
2. Authors must use those technologies properly in order for the information to be programmatically determinable - and hence presentable, by AT (and user agents) to users with disabilities


#### 1. Programmatically Determinable

Content: MUST Work with AT: 

Five SC require that content must be "programmatically determinable." This means that the content is authored in such a way that user agents, including assistive technologies, can access the information.

- 1.3.1: Info and Relationships
- 1.3.2: Meaningful Sequence
- 3.1.1: Language of Page
- 3.1.2: Language of Parts (AA)
- 4.1.2: Name, Role, Value

"Programmatically determined" relates to the information in Web Content. If technologies that are accessibility supported are used properly, then assistive technologies and user agents can access the information in the content (i.e., programmatically determine the information in the content) and present it to the user.

#### 2. Accessibility Support

Technology Used: MUST Work with AT & Accessibility Features of OS and UA:

Using a technology in a way that is “accessibility supported” means choosing technologies that render and deliver content in such a way that is known to work with AT and the accessibility features of operating systems, browsers, content players, for an intended environment (internet, intranet, application, native app).

"Accessibility supported" relates to support by user agents (including assistive technologies) of particular ways of using Web technologies. Uses of Web technologies that are accessibility supported will work with assistive technologies and access features in mainstream user agents (browsers and players etc.).

**Note**: Both Section 508 and WCAG require electronic stuff to ‘Work with AT’.
