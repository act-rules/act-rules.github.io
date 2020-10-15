const defaultParams = {
	target: 'target',
	focusOnly: false,
	shortcutKey: '',
	ctrlKey: false,
	disabled: false,
}

const shortcutDefinitions = new Array()

function activateShortcuts() {
	document.body.addEventListener('keydown', function(event) {
		for (const settings of shortcutDefinitions) {
			if (!settings.disabled) {
				const target = document.getElementById(settings.target)

				if (
					event.key === settings.shortcutKey &&
					(!settings.ctrlKey || event.getModifierState('Control')) &&
					(!settings.focusOnly || document.activeElement === target)
				) {
					document.getElementById('list').innerHTML += '<li>' + target.value + '</li>'
					target.value = ''
					event.preventDefault()
				}
			}
		}
	})
}

function registerShortcut(params = {}) {
	shortcutDefinitions.push({ ...defaultParams, ...params })
}

function changeShortcutParameter(id, param, value) {
	shortcutDefinitions.find(shortcut => shortcut.id === id)[param] = value
}

function toggleDisabled(id, value) {
	changeShortcutParameter(id, 'disabled', value)
}

function toggleModifier(id, value) {
	changeShortcutParameter(id, 'ctrlKey', value)
}

function openModal() {
	document.getElementById('overlay').style.display = 'block'
}
function closeModal() {
	document.getElementById('overlay').style.display = 'none'
}
