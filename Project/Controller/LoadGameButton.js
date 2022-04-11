class LoadGameButton extends SwitchMenusButton {
    constructor(button, clickSound, menuShow, theme, gameMusic, player, animations, mainMenuButtons) {
        super(button, clickSound, menuShow, gameMusic);
        this.theme = theme;
        this.gameMusic = gameMusic;
        this.player = player;
        this.sections = null;
        this.animations = animations;
        this.mainMenuButtons = mainMenuButtons;
        this.animationDuration = 30_000;
        this.timeoutForTheme = null;
        this.timeoutName = "timeoutForTheme";
    }

    onclick(sections) {
        super.onclick(sections);
    }

    onclickEvent() {
        /*
         * let playerName = textField.getText
         * if (playerName !isInLeaderBoard) AND !playerName.isEmpty, then:
         * player.setName(playerName);
         * else:
         * displayErrorMessage();
         *
         * */
        super.onclickEvent();
        this.theme.play();
        this.theme.onended = () => {
            setTimeout(() => {
                this.gameMusic.play();
            }, 2000);

            this.enableButtons();
        }

        let animationDuration = 30_000;

        this.timeoutForTheme = setTimeout(() => {
            for (let i = 0; i < this.animations.length; i++) {
                this.animations[i].classList.remove("animated");
            }
        }, animationDuration)
    }

    skipAnimation() {
        this.theme.pause();
        this.gameMusic.play();
        if (this.timeoutForTheme === null) {
            console.log(12345)
            return;
        }
        clearTimeout(this.timeoutForTheme);
        this.enableButtons();
    }

    enableButtons() {
        for (let i = 0; i < this.mainMenuButtons.length; i++) {
            if (this.mainMenuButtons[i].hasAttribute("disabled")) {
                this.mainMenuButtons[i].removeAttribute("disabled");
            }
        }
    }

    set setAnimationDuration(animationDuration) {
        this.animationDuration = animationDuration;
    }
}