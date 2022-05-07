class GameButton {

    constructor(clickSound) {
        this.clickSound = clickSound;
    }

    playClick() {
        this.clickSound.play();
    }

}