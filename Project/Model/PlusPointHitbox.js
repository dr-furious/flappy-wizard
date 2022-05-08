class PlusPointHitbox extends Hitbox {
    constructor(positionX, positionY, width, height, sound) {
        super(positionX, positionY, width, height);
        this.sound = sound;
    }

    gainPoint(player) {
        player.gainPoint();
        this.sound.play();
    }
}