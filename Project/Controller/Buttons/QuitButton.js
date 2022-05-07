class QuitButton extends SwitchMenusButton {
    constructor(clickSound, menuShow, gameMusic) {
        super(clickSound, menuShow);
        this.gameMusic = gameMusic;
    }

    onclick() {
        if (this.gameMusic.duration > 0) {
            this.gameMusic.currentTime = 0;
        }
    }

}