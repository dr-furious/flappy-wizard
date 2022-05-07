class SoundButton extends GameButton {
    constructor(clickSound, sounds, soundOffIcons) {
        super(clickSound);
        this.sounds = sounds;
        this.clickCounter = 0;
        this.soundOffIcons = soundOffIcons;

        if (this.areMuted()) {
            this.enableSound();
        }
    }

    manageSounds() {
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
        for (let i = 0; i < this.soundOffIcons.length; i++) {
            if (!this.soundOffIcons[i].hasAttribute("hidden")) {
                this.soundOffIcons[i].setAttribute("hidden", "");
            }
        }
    }

    disableSound() {
        for (let i = 0; i < this.sounds.length; i++) {
            this.sounds[i].muted = true;
        }
        for (let i = 0; i < this.soundOffIcons.length; i++) {
            if (this.soundOffIcons[i].hasAttribute("hidden")) {
                this.soundOffIcons[i].removeAttribute("hidden");
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