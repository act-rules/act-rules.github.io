---
rule_id: SC2-1-2-no-keyboard-trap-r1
test_case_template: default
success_criterion: 
- 2.1.2  No Keyboard Trap (level A)
---

## Passed
```
<a href ="#">Link 1</a>
<button class="target">Button1</button>
```

## Failed
```
<a href="#">Link 1</a>
<button class="target" onblur="setTimeout(() => this.focus(), 10)">Button1</button>
```
```
<button class="target" onblur="setTimeout(() => this.nextSibling.focus(), 10)">Button1</button>
<button class="target" onblur="setTimeout(() => this.previousSibling.focus(), 10)">Button2</button>
```
## Inapplicable
```
<h1>Page 1</h1>
```
