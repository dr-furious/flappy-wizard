class QuitButton extends SwitchMenusButton {
    constructor(button, clickSound, menuShow, game, gameMusic) {
        super(button, clickSound, menuShow);
        this.game = game;
        this.gameMusic = gameMusic;
    }

    onclick(sections) {
        super.onclick(sections);
    }

    onclickEvent() {
        //this.game.stop();
        super.onclickEvent();
        if (this.gameMusic.duration > 0) {
            this.gameMusic.currentTime = 0;
        }
    }

}