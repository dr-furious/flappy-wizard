let keys = []

window.onkeydown = (e) => {
    keys[e.keyCode] = true;
}

window.onkeyup = (e) => {
    keys[e.keyCode] = false;
}