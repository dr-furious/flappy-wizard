class DeadlyHitbox extends Hitbox {
    constructor(positionX, positionY, width, height, sound) {
        super(positionX, positionY, width, height);
        this.sound = sound;
    }

    killPlayer(player) {
        player.die();
    }
}