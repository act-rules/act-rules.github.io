---
title: Text Alternative Computation
---

# Draft pseudo-code 

Source: [Text Alternative Computation Algorithm in current WAI-ARIA Recommendation](http://www.w3.org/TR/wai-aria/roles#namecalculation)

```
Node node
Text accumulatedText
Array EMBEDDED_CONTROLS = {textbox, button, combobox, option, range, spinbutton, slider}
Array ALLOWS_NAME_FROM_CONTENTS = {button, checkbox, columnheader, directory, gridcell, heading, link, listitem, 
menuitem, menuitemcheckbox, menuitemradio, option, radio, row, rowgroup, rowheader, section, sectionhead, tab, tooltip, treeitem}
	
function textAlternativeComputation(node, Boolean recursion) {
	if(not recursion) {
		accumulatedText = "";
	}
// 1	
	if(node.hidden and not node.referenced) {
		return ""; 
	} else {	
		if(node.CSS.before not empty) {
			accumulatedText += " " + node.CSS.before;
		}
// 2A.1
		else if(not recursion and node.aria-labelledby not empty) {
			// accumulatedText = ""; 
			foreach(node = node.aria-labelledby.iDREF) { 
				result = textAlternativeComputation(node, bool recursion = true); 
				accumulatedText += " " + result; 
			}
			return addCSS_AfterAndReturn(node, accumulatedText); 
		}	
// 2A.2
		else if (node.aria-label not empty){
			if(recursion and node.role contained in EMBEDDED_CONTROLS) {
				;
			} else {
				return addCSS_AfterAndReturn(node, node.aria-label.value);
			}
		}
		// added to skip to 2B as specified in 2A.2
		else if (not recursion and not node.role contained in EMBEDDED_CONTROLS)) {
// 2A.3
			if(not node.role = "presentation") {
				if(node.alt not empty) {
					return addCSS_AfterAndReturn(node, node.alt.value);
				}
				if(node referenced by label) {
					return addCSS_AfterAndReturn(node, node.referencingLabel.value);
				}
			}
		}
// 2B
		else if (node.role contained in EMBEDDED_CONTROLS) {
			if(node.role = "textbox") {
				return addCSS_AfterAndReturn(node, node.value);
			}
			if(node.role = "menu") {
				return textAlternativeComputation(node.selected, bool recursion = true);
			}
			if(node.role = "select" or node.role = "combobox") {
				return textAlternativeComputation(node.option, bool recursion = true);
			}
			if(node.role = "range" or node.role = "spinbutton" or node.role = "slider") {
				if(node.aria-valuetext not empty) {
					return addCSS_AfterAndReturn(node,node.aria-valuetext.value);
				} else if (node.aria-valuenow not empty) {
					return addCSS_AfterAndReturn(node, node.aria-valuenow.value);
				} 
			}
		}
// 2C
		else if (node.role contained in ALLOWS_NAME_FROM_CONTENTS) {
			// accumulatedText = ""; 
			foreach(childNode = node.child) {	
				result = textAlternativeComputation(childNode, bool recursion = true);
				accumulatedText += result;
			}
			return addCSS_AfterAndReturn(node, accumulatedText);
		}
// 2D
		else if (node.title not empty) {
			return node.title.value;
		}
	}
}

function addCSS_AfterAndReturn(node, Text text) {
// 3 
	if(node.CSS.after not empty) {
		text += node.CSS.after;
	}
	return text;
}
```

## Draft UML activity diagram

Based on of [Text Alternative Computation Algorithm in current WAI-ARIA Recommendation](http://www.w3.org/TR/wai-aria/roles#namecalculation) ==

![Activity diagram of Text Alternative Computation](TextAlternativeComputation.png)