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

function handleOrientationCanBeDisabled(event) {
    const disableMotion = document.getElementById('disableMotion');
    const gamma = disableMotion.checked ? 0 : event.gamma;

    if (gamma > 20) {
        increaseSlider();
    } else if (gamma < -20) {
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

function handleMotionCanBeDisabled(event) {
    if (event.rotationRate.gamma > 5) {
        increaseSlider();
    } else if (event.rotationRate.gamma < -5) {
        decreaseSlider();
    }
}
