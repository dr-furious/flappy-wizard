class SoundButton extends GameButton {
    constructor(button, clickSound, sounds, soundOffIcon) {
        super(button, clickSound);
        this.sounds = sounds;
        this.clickCounter = 0;
        this.soundOffIcon = soundOffIcon;

        if (this.areMuted()) {
            this.enableSound();
        }
    }

    onclick() {
        super.onclick();
    }

    onclickEvent() {
        if (this.clickCounter % 2 === 1) {
            this.enableSound();
        } else {
            this.disableSound();
        }

        this.clickCounter++;
    }

    enableSound() {
        for (let i = 0; i < this.sounds.length; i++) {
            this.sounds[i].muted = false;
        }
        if (!this.soundOffIcon.hasAttribute("hidden")) {
            this.soundOffIcon.setAttribute("hidden", "");
        }
    }

    disableSound() {
        for (let i = 0; i < this.sounds.length; i++) {
            this.sounds[i].muted = true;
            if (this.soundOffIcon.hasAttribute("hidden")) {
                this.soundOffIcon.removeAttribute("hidden", "");
            }
        }
    }

    areMuted() {
        for (let i = 0; i < this.sounds.length; i++) {
            if (this.sounds[i].muted === false) {
                return false;
            }
        }
        return true;
    }

}