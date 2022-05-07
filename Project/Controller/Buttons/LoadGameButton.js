class LoadGameButton extends SwitchMenusButton {
    constructor(clickSound, menuShow, sections, theme, gameMusic, animations, mainMenuButtons) {
        super(clickSound, menuShow, sections);
        this.theme = theme;
        this.gameMusic = gameMusic;
        this.animations = animations;
        this.mainMenuButtons = mainMenuButtons;
        this.animationDuration = 30_000;
        this.timeoutForTheme = null;
    }

    initializeMainMenu() {
        this.theme.play();
        this.theme.onended = () => {
            setTimeout(() => {
                this.gameMusic.play();
            }, 2000);

            this.enableButtons();
        }

        this.timeoutForTheme = setTimeout(() => {
            for (let i = 0; i < this.animations.length; i++) {
                this.animations[i].classList.remove("animated");
            }
        }, this.animationDuration)

        this.switchMenus();
    }

    skipAnimation() {
        this.theme.pause();
        this.gameMusic.play();
        for (let i = 0; i < this.animations.length; i++) {
            this.animations[i].classList.remove("animated");
        }
        if (this.timeoutForTheme === null) {
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

    writePlayerName(inputFormId, player) {
        let textField = document.getElementById(inputFormId);
        let playerName = textField.value;
        if (playerName.length === 0) {
            player.setName = this.generateRandomName();
        } else {
            player.setName = playerName;
        }
    }

    generateRandomName() {
        let name = "Guest";
        let id = Math.round(Math.random() * (1000000 - 1) + 1);
        return name + id;
    }

}