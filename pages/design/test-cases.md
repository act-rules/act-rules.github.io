# ACT Rules Test Case Design

The goal of test cases in ACT rules is to allow implementers to verify that their implementation is consistent with the ACT rule. It requires that a rule has test cases for all of the "important" aspects of it. Beyond that, it is up to the rule authors to determine how extensive to make the list of test cases. The decision of what the edge cases to test will be, should be based on issues in **real-world** examples.

To strike a good balance in test cases, the following principles should be considered:

1. Test every "condition" in the rule
1. Test one thing at a time
1. Ensure consistency with accessibility
1. Keep test cases small
1. Test definitions superficially
1. Avoid tests cases contested by (accessibility) support

Keep in mind, there are exceptions to all of these.

## Test Every Condition

At a minimum, every "condition" in the applicability and expectation has to have both positive and negative test cases for it. For example the phrase "`img` and `svg` elements" has two conditions in it; "`img` elements" and "`svg` elements". A rule with such a phrase in the applicability would require the following test cases:

- `img` that passes the rule
- `svg` that passes the rule
- `img` that fails the rule
- `svg` that fails the rule
- some other element that is inapplicable

Providing these test cases ensures that an implementer that correctly tests `img` elements, but passes every `svg` element can be identified as a partial implementation, and one where it fails all `svg` elements is identified as an inconsistent implementation.

## One Thing At A Time

A test case should only test one "condition" at a time. This keeps them focused and easy to reason about. It may be tempting to combine multiple cases in one example, but then if that example does not get the expected outcome, it is difficult to identify the cause of the issue.

When writing test cases, it is important to look at conditional logic. For example if the applicability says an element is applicable if it is "_visible_ and _included in the accessibility tree_", in addition to a passed and failed example, there are three ways for this to not be true, all of which have to be tested:

- inapplicable: visible, but **not** included in the accessibility tree
- inapplicable: **not** visible, but included in the accessibility tree
- inapplicable: **not** visible, and **not** included in the accessibility tree

## Consistency With Accessibility Requirements

In order for the mapping of implementations to the rules to work, test cases need to be consistent with the accessibility requirement. This requires that **passed and inapplicable test cases should satisfy the accessibility requirements** of the rule, as well as the accessibility requirement of any composite rule this rule is designed for. Inapplicable conditions that do not satisfy the accessibility requirements should not be included. For example when testing [2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled), a rule that tests that titles are descriptive can not have an inapplicable example of a page that should have a title but does not.

Related to this, failed test cases should only fail the accessibility requirements for one reason. A failed test case for 4.1.2 Name, Role, Value should not have issues with both the accessible name, and the role. If the rule is about accessible names, the role and value must be correct.

Because mapping of implementations makes little difference between inapplicable and passed results, it is often better to have an inapplicable test case that "looks bad" but is actually satisfying the accessibility requirements. That way, tools that don't implement the Applicability correctly would fail this test case. For example, when testing [1.4.3 Contrast (minimum)](https://www.w3.org/TR/WCAG21/#contrast-minimum), a rule may be inapplicable to disabled buttons (since this matches the second exception in the Success Criterion); an inapplicable test case for this condition is better if it includes a disabled button whose text has a 2.0:1 contrast ratio with its background, than if it includes a disabled button with a 5.0:1 contrast ratio (in this second case, a tool that doesn't ignore disabled buttons would pass the test case and can still claim a correct implementation of the rule). Depending on the part of Applicability which a case tests, it is not always possible to have an inapplicable example that "looks bad".

## Small Test Cases

A general principle in test design is to keep test cases small. Avoid any unnecessary content, as it may cause unexpected side effects in the outcome. For example, a rule about buttons does not require that all test cases have an HTML element with a `lang` attribute and a `title` element. Those elements do not affect the accessibility of a button. All code in the test case should be relevant to the rule or its accessibility requirements.

An exception to that, is that ACT Rules should strive to show good accessibility practices. A rule about valid `autocomplete` attributes should still provide labels for the form controls with the `autocomplete` attribute. Those labels both provide context, showing the intended purpose of the input, and they show good practice of providing labels for form controls.

## Superficial Definition Testing

ACT rules use definitions to avoid duplication, and to "hide" away the details. Definitions such as "semantic role", "visible" and "accessible name" are used in many rules, and are fundamental building blocks of ACT. To avoid having a lot of similar test cases in every rule that uses a particular definition, it is best to keep definition testing to a minimum.

As an example, the "X has non-empty accessible name" rules all have test cases that check for the different ways that an element can have an accessible name. For `img`, that is `alt`, `title`, and `aria-label(ledby)` attributes. That creates sufficient coverage to ensure the basics are understood. But those rules do not go into the details of ensuring accessible name computation is done right. Whether an implementer considers `aria-owns` in the accessible name computation is not relevant for "non-empty accessible name" rules.

That is not to say edge cases in definitions should never have test cases. If there are **real-world examples** of a particular edge case affecting the outcome of a rule, test cases should be added to the rule to cover that edge case.

## Avoid (Accessibility) Support Issues

It is fairly common for rules to involve technologies that are not fully supported. For example, ARIA roles get added every few years, and it takes a while for new roles to get adopted by assistive technologies. In the case that a particular technology has very little or no support at all, the rules should not have test cases for this.

Once there is significant support for a particular technology, it should be considered for test cases. The best way to introduce technologies that are only partially supported is to exclusively provide failed test cases for them. This makes an implementation that does not support this technology partially consistent.

Technologies that are widely supported can be used in all test cases. In all situations, previous principles of deciding if a test case is needed or not still apply.

## Exceptions

It is important to know that there are exceptions to all of these principles. There may be technical reasons not to include a certain test case, or the number of combinations may require an unreasonable number of tests. It may sometimes not make logical sense for some passed test cases to satisfy all accessibility requirements. Some definitions may not require tests, and others can be argued to need extensive tests. Etc.

Letting **real-world** examples drive consistency forward also means rule authors should not get stuck in trying to write test cases for every conceivable situation. Rule authors should strive for a 95% consistency between implementers on first publication. This percentage does not need to be measured, it is intended to give a idea of what to aim for. As more examples are discovered, this number will go up over time.
