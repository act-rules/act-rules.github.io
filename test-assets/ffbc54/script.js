let globalParams = {
  focusOnly: false, 
  shortcutKey: '+', 
  ctrlKey: false,
  disabled: false
};

function shortcut(params) {
  globalParams = JSON.parse(JSON.stringify(params));
  document.body.addEventListener("keydown", function(event) {
    if (!globalParams.disabled) {
      const target = document.getElementById("target");

      if (
        event.key === globalParams.shortcutKey &&
        (!!!globalParams.ctrlKey || event.ctrlKey) &&
        (!!!globalParams.focusOnly || document.activeElement === target)
      ) {
        document.getElementById("list").innerHTML +=
          "<li>" + target.value + "</li>";
        target.value = "";
        event.preventDefault();
      }
    }
  });
}