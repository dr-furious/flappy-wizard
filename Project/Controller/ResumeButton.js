class ResumeButton extends SwitchMenusButton {
    constructor(button, clickSound, menuShow, game) {
        super(button, clickSound, menuShow);
        this.game = game;
    }

    onclick(sections) {
        super.onclick(sections);
    }

    onclickEvent() {
        //this.game.stop();
        super.onclickEvent();
    }

}