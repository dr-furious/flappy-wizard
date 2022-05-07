class PlayButton extends SwitchMenusButton {
    constructor(clickSound, menuShow, gameMusic) {
        super(clickSound, menuShow);
        this.gameMusic = gameMusic;
    }

    onclickEvent() {
        if (this.gameMusic.duration > 0) {
            this.gameMusic.currentTime = 0;
        }
    }

}