---
id: 54621b
name: aria-invalid identifies input error
rule_type: atomic

description: |
  This rule checks that the `aria-invalid` attributed is used to identify input errors

accessibility_requirements: # Remove whatever is not applicable
  wcag-technique:ARIA21: # Using Aria-Invalid to Indicate An Error Field
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling
  - Language

authors:
  - Carlos Duarte
  - João Vicente
---

## Applicability

The rule applies to each HTML or SVG element that has one of the following [semantic roles][semantic role]: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`, that may or may not belong to a [form element](https://www.w3.org/TR/html52/sec-forms.html#the-form-element)

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

## Expectation 1

After [user completion](#completed-input-field) of the target element or triggering the submission of the form, if the target element belongs to one, each target element that meets the instructions provided for it does not have the `aria-invalid` attribute set to `true`.

Note: Instructions for an [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) include information that is required by the Web page, the data format and possible values. The instructions can be presented to the user in several ways, including:

- Text content placed visually in the vicinity of the [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element)
- The accessible description of the [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element)
- A tooltip displayed when the [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) is [focused](#focusable)
- Text content accessible through an help button or similar

## Expectation 2

After [user completion](#completed-input-field) of the target element or triggering the submission of the form, if the target element belongs to one, each target element that does not meet the instructions provided for it has the `aria-invalid` attribute set to `true`.

## Expectation 3

Each target element with the `aria-invalid` attribute set to `true` has a [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) label or text instruction which provides enough information to understand the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)

## Test Cases

### Passed

#### Passed Example 1

`aria-invalid` attribute set on target elements on form submission.

```html
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function (e) {
            $('#signup').submit(function () {
                $('#errText').html('');
                $('input').removeAttr("aria-invalid");
                $('label').removeAttr("class");
                var eFlag = 0;
                if ($('#first').val() === '') {
                    $('#first').attr("aria-invalid", "true");
                    $("label[for='first']").addClass('failed');
                    eFlag++;
                }
                if ($('#last').val() === '') {
                    $('#last').attr("aria-invalid", "true");
                    $("label[for='last']").addClass('failed');
                    eFlag++;
                }
                if ($('#email').val() === '') {
                    $('#email').attr("aria-invalid", "true");
                    $("label[for='email']").addClass('failed');
                    eFlag++;
                }
                if (eFlag > 0) {
                    $('#errText').html("Please complete all required fields (" + eFlag + ") and retry").focus();
                }
                return false;
            });
        });
    </script>
    <style type="text/css">
        label.failed {
            border: red thin solid;
        }
    </style>

</head>

<body>
    <h2 tabindex="-1" id="errText" aria-live="assertive"></h2>
    <form name="signup" id="signup" method="post" action="#">
        <p>
            <label for="first">First Name (required)</label><br>
            <input type="text" name="first" id="first">
        </p>
        <p>
            <label for="last">Last Name (required)</label><br>
            <input type="text" name="last" id="last">
        </p>
        <p>
            <label for="email">Email (required)</label><br>
            <input type="text" name="email" id="email">
        </p>
        <p>
            <input type="submit" name="button" id="button" value="Submit">
        </p>
    </form>
</body>

</html>
```

#### Passed Example 2

`aria-invalid` attribute set on target elements on user completion.

```html
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function (e) {
            function updateMessage() {
                $('#errText').html('');
                var count = $('label[class="failed"]').length;

                if (count > 0) {
                    $('#errText').html("Please complete all required fields (" + count + ") and retry");
                }
            }
            $('#signup').submit(function () {
                updateMessage();
                return false;
            });

            $('#first').focusout(function () {
                $('#first').removeAttr("aria-invalid");
                $('label[for="first"]').removeAttr("class");
                if ($('#first').val() === '') {
                    $('#first').attr("aria-invalid", "true");
                    $("label[for='first']").addClass('failed');
                }
                updateMessage();
            });

            $('#last').focusout(function () {
                $('#last').removeAttr("aria-invalid");
                $('label[for="last"]').removeAttr("class");
                if ($('#last').val() === '') {
                    $('#last').attr("aria-invalid", "true");
                    $("label[for='last']").addClass('failed');
                }
                updateMessage();
            });

            $('#email').focusout(function () {
                $('#email').removeAttr("aria-invalid");
                $('label[for="email"]').removeAttr("class");
                if ($('#email').val() === '') {
                    $('#email').attr("aria-invalid", "true");
                    $("label[for='email']").addClass('failed');
                }
                updateMessage();
            });

        });
    </script>
    <style type="text/css">
        label.failed {
            border: red thin solid;
        }
    </style>

</head>

<body>
    <h2 tabindex="-1" id="errText" aria-live="assertive"></h2>
    <form name="signup" id="signup" method="post" action="#">
        <p>
            <label for="first">First Name (required)</label><br>
            <input type="text" name="first" id="first">
        </p>
        <p>
            <label for="last">Last Name (required)</label><br>
            <input type="text" name="last" id="last">
        </p>
        <p>
            <label for="email">Email (required)</label><br>
            <input type="text" name="email" id="email">
        </p>
        <p>
            <input type="submit" name="button" id="button" value="Submit">
        </p>
    </form>
</body>

</html>
```

### Failed

#### Failed Example 1

`aria-invalid` attribute set on target element that does not have an [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function (e) {
            $('#signup').submit(function () {
                $('#errText').html('');
                $('input').removeAttr("aria-invalid");
                $('label').removeAttr("class");
                var eFlag = 0;
                if ($('#first').val() !== '') {
                    $('#first').attr("aria-invalid", "true");
                    $("label[for='first']").addClass('failed');
                    eFlag++;
                }
                if ($('#last').val() !== '') {
                    $('#last').attr("aria-invalid", "true");
                    $("label[for='last']").addClass('failed');
                    eFlag++;
                }
                if ($('#email').val() !== '') {
                    $('#email').attr("aria-invalid", "true");
                    $("label[for='email']").addClass('failed');
                    eFlag++;
                }
                if (eFlag > 0) {
                    $('#errText').html("Please complete all required fields (" + eFlag + ") and retry").focus();
                }
                return false;
            });
        });
    </script>
    <style type="text/css">
        label.failed {
            border: red thin solid;
        }
    </style>

</head>

<body>
    <h2 tabindex="-1" id="errText" aria-live="assertive"></h2>
    <form name="signup" id="signup" method="post" action="#">
        <p>
            <label for="first">First Name (required)</label><br>
            <input type="text" name="first" id="first">
        </p>
        <p>
            <label for="last">Last Name (required)</label><br>
            <input type="text" name="last" id="last">
        </p>
        <p>
            <label for="email">Email (required)</label><br>
            <input type="text" name="email" id="email">
        </p>
        <p>
            <input type="submit" name="button" id="button" value="Submit">
        </p>
    </form>
</body>

</html>
```

#### Failed Example 2

`aria-invalid` attribute not set on target element that has an [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).


```html
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function (e) {
            $('#signup').submit(function () {
                $('#errText').html('');
                $('input').removeAttr("aria-invalid");
                $('label').removeAttr("class");
                var eFlag = 0;
                if ($('#first').val() === '') {
                    $("label[for='first']").addClass('failed');
                    eFlag++;
                }
                if ($('#last').val() === '') {
                    $("label[for='last']").addClass('failed');
                    eFlag++;
                }
                if ($('#email').val() === '') {
                    $("label[for='email']").addClass('failed');
                    eFlag++;
                }
                if (eFlag > 0) {
                    $('#errText').html("Please complete all required fields (" + eFlag + ") and retry").focus();
                }
                return false;
            });
        });
    </script>
    <style type="text/css">
        label.failed {
            border: red thin solid;
        }
    </style>

</head>

<body>
    <h2 tabindex="-1" id="errText" aria-live="assertive"></h2>
    <form name="signup" id="signup" method="post" action="#">
        <p>
            <label for="first">First Name (required)</label><br>
            <input type="text" name="first" id="first">
        </p>
        <p>
            <label for="last">Last Name (required)</label><br>
            <input type="text" name="last" id="last">
        </p>
        <p>
            <label for="email">Email (required)</label><br>
            <input type="text" name="email" id="email">
        </p>
        <p>
            <input type="submit" name="button" id="button" value="Submit">
        </p>
    </form>
</body>

</html>
```

#### Failed Example 3

[Programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) label or text instruction do not provide enough information to understand the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function (e) {
            $('#signup').submit(function () {
                $('#errText').html('');
                $('input').removeAttr("aria-invalid");
                $('label').removeAttr("class");
                var eFlag = 0;
                if ($('#first').val() === '') {
                    $('#first').attr("aria-invalid", "true");
                    $("label[for='first']").addClass('failed');
                    eFlag++;
                }
                if ($('#last').val() === '') {
                    $('#last').attr("aria-invalid", "true");
                    $("label[for='last']").addClass('failed');
                    eFlag++;
                }
                if ($('#email').val() === '') {
                    $('#email').attr("aria-invalid", "true");
                    $("label[for='email']").addClass('failed');
                    eFlag++;
                }
                if (eFlag > 0) {
                    $('#errText').html("Please complete all required fields (" + eFlag + ") and retry").focus();
                }
                return false;
            });
        });
    </script>
    <style type="text/css">
        label.failed {
            border: red thin solid;
        }
    </style>

</head>

<body>
    <h2 tabindex="-1" id="errText" aria-live="assertive"></h2>
    <form name="signup" id="signup" method="post" action="#">
        <p>
            <label for="first">First Name</label><br>
            <input type="text" name="first" id="first">
        </p>
        <p>
            <label for="last">Last Name</label><br>
            <input type="text" name="last" id="last">
        </p>
        <p>
            <label for="email">Email</label><br>
            <input type="text" name="email" id="email">
        </p>
        <p>
            <input type="submit" name="button" id="button" value="Submit">
        </p>
    </form>
</body>

</html>
```

### Inapplicable

#### Inapplicable Example 1

No input element.

```html
<div></div>
```
