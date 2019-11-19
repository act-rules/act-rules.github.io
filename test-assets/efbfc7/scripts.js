function change() {
    var target = document.getElementById('target')
    var number = Math.floor(Math.random() * 1000)
    target.innerText = number
}

var updates
var updating = false

function startUpdates() {
    updating = true
    updates = setInterval(change, 1000)
}

function stopUpdates() {
    updating = false
    clearInterval(updates)
}

function toggle() {
    var control = document.getElementById('control')
    if (updating) {
        control.value = 'Resume updates'
        updating = false
        clearInterval(updates)
    } else {
        control.value = 'Pause updates'
        updating = true
        updates = setInterval(change, 1000)
    }
}

function hide() {
    var target = document.getElementById('target')
    target.style.visibility = 'hidden'
}