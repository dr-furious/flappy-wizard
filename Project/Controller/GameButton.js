class GameButton {
    button;

    constructor(button, clickSound) {
        this.button = button;
        this.clickSound = clickSound;
    }

    onclick() {
        this.button.onclick = () => {
            this.clickSound.play();
            this.onclickEvent();
        }
    }

    onclickEvent() {

    }

}