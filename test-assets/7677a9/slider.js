function increaseSlider() {
    document.getElementById('motionSlider').value++;
    document.getElementById('output').innerHTML = document.getElementById('motionSlider').value;
}

function decreaseSlider() {
    document.getElementById('motionSlider').value--;
    document.getElementById('output').innerHTML = document.getElementById('motionSlider').value;
}

function handleOrientation(event) {
    if (event.gamma > 20) {
        increaseSlider();
    } else if (event.gamma < -20) {
        decreaseSlider();
    }
}

function handleMotion(event) {
    if (event.rotationRate.gamma > 5) {
        increaseSlider();
    } else if (event.rotationRate.gamma < -5) {
        decreaseSlider();
    }
}
