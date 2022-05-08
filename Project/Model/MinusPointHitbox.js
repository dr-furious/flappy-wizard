class MinusPointHitbox extends Hitbox {
    constructor(positionX, positionY, width, height, sound) {
        super(positionX, positionY, width, height);
        this.sound = sound;
    }

    loosePoint(player) {
        player.loosePoint();
        this.sound.play();
    }

    playSound() {
        this.sound.play();
    }
}