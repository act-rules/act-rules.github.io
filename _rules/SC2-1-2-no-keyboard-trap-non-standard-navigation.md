---
name: No keyboard trap non-standard navigation
rule_type: atomic

description: |
  This rule checks if it is possible to use non-standard keyboard navigation to navigate through content where focus is trapped when using standard ways of keyboard navigation.

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
- Malin Øvrebø
- Shadi Abou-Zahra
- Carlos Duarte
- Anne Thyme Nørregaard
- Stein Erik Skotkjerra
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element that is [focusable](#focusable) where focus cannot cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

**Note**: This rule only applies to HTML and SVG. Thus, it is a partial check for WCAG 2.0 success criterion 2.1.2, which applies to all content.

### Expectation 1

For each target element help information is [visible on the page](#visible-on-the-page) and [included in the accessibility tree](#included-in-the-accessibility-tree) or can be accessed from within the keyboard trap.

**Note**: As per WCAG 2.0 Success Criterion 2.1.1 Keyboard the help information should be accessible through a keyboard interface.

### Expectation 2

The help information explains how to cycle to the browser UI, or on how to get to a point from where it is possible to cycle to the browser UI, using [standard keyboard navigation](#standard-keyboard-navigation).

### Expectation 3

For each target element focus can cycle to the browser UI by using the method advised in the help information.

**Note**: Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfil this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- It is not possible to use unmodified arrow or tab keys, or other standard exit methods to move focus away.
- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed example 1

Keyboard trap with help information in a paragraph before, and where the method advised works.

```html
<script>
var trapOn = false ;
</script>

<p>Press the M-key to Exit</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">Button 1</button>
<button id="btn2" class="target" onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed example 2

Keyboard trap with help information within the trap, and where the method advised works.

```html
<script>
var trapOn = false ;
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">Button 1</button>
<p>Press the M-key to Exit</p>
<button id="btn2" class="target" onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
<a id="link2" href="#">Link 2</a>
````

#### Passed example 3

Keyboard trap with "help" link that once clicked exposes the instructions.

```html
<script>
var trapOn = false ;

function showHelpText(){
document.getElementById("helptext").innerHTML = "<p>Press the M-key to Exit</p>";
}
</script>

<div onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)">
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('helpLink').focus();})(event)">Button 1</button>
<a id="helpLink" href="#" onclick="showHelpText()">How to go the next element</a>
<div id="helptext"></div>
<button id="btn2" class="target" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
</div>
<a id="link2" href="#">Link 2</a>
```

### Failed

#### Failed example 1

Keyboard trap with no instructions.

```html
<script>
var trapOn = false ;
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">Button 1</button>
<button id="btn2" class="target" onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
<a id="link2" href="#">Link 2</a>
````

#### Failed example 2

Keyboard trap with instructions that doesn't give advise on the method for proceeding.

```html
<script>
var trapOn = false ;
</script>

<p>Go to the next element</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">Button 1</button>
<button id="btn2" class="target" onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
<a id="link2" href="#">Link 2</a>
````

#### Failed example 3

Keyboard trap with help text, where the method advised doesn't work.

```html
<script>
var trapOn = false ;
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">Button 1</button>
<p>Press the M-key to Exit</p>
<button id="btn2" class="target"  onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">Button 2</button>
<a id="link2" href="#">Link 2</a>
```

### Inapplicable

#### Inapplicable example 1

Not a keyboard trap (interactive element).

```html
<a id="link1" href="#">Link 1</a>
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>
<a id="link2" href="#">Link 2</a>
```
