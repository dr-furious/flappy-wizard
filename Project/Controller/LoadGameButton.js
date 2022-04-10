class LoadGameButton extends SwitchMenusButton {
    constructor(button, clickSound, menuHide, menuShow, theme, gameMusic, player) {
        super(button, clickSound, menuHide, menuShow, gameMusic);
        this.theme = theme;
        this.gameMusic = gameMusic;
        this.player = player;
    }

    onclick() {
        super.onclick();
    }

    onclickEvent() {
        /*
         * if (textField.getText !isInLeaderBoard), then:
         * player.setName();
         * else:
         * displayErrorMessage();
         * */
        super.onclickEvent();
        this.theme.play();
        this.theme.onended = () => {
            setTimeout(() => {
                this.gameMusic.play();
            }, 2000);
        }
    }

}