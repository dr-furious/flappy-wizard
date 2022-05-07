class QuitButton extends SwitchMenusButton {
    constructor(clickSound, menuShow, sections, gameMusic) {
        super(clickSound, menuShow, sections);
        this.gameMusic = gameMusic;
    }

    replayMusic() {
        if (this.gameMusic.duration > 0) {
            this.gameMusic.currentTime = 0;
        }
    }

}