const defaultParams = {
  target: 'target',
  focusOnly: false, 
  shortcutKey: '+', 
  ctrlKey: false,
  disabled: false
};

let allSettings = new Array();

function shortcut(...params) {
  allSettings = [...allSettings, ...params.map(p => { return { ...defaultParams, ...p } })];
  document.body.addEventListener("keydown", function(event) {
    for (const settings of allSettings || []) {
      if (!settings.disabled) {
        const target = document.getElementById(settings.target);

        if (
          event.key === settings.shortcutKey &&
          (!settings.ctrlKey || event.ctrlKey) &&
          (!settings.focusOnly || document.activeElement === target)
        ) {
          document.getElementById("list").innerHTML += "<li>" + target.value + "</li>";
          target.value = "";
          event.preventDefault();
        }
      }
    }
  });
}

function changeSetting(reference, setting, value) {
  allSettings.find(set => set.reference === reference)[setting] = value;
}