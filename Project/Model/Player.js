class Player extends Actor {
    constructor(image, positionX, positionY) {
        super(image, positionX, positionY);
        this.name = null;
        this.points = 0;
        this.missedHooks = 0;
        this.isDead = false;
        this.width = 72;
        this.height = 128;
        this.isAbleToGainPoint = true;
        this.hitBoxOne = new Hitbox(this.getPositionX + this.getWidth / 5 * 2, this.getPositionY + this.getHeight / 4, this.getWidth / 9 * 4, this.getHeight / 4);
        this.hitBoxTwo = new Hitbox(this.getPositionX + this.getWidth / 7 * 2, this.getPositionY + this.getHeight / 5 * 2, this.getWidth / 9 * 4, this.getHeight / 4);
    }

    fall(minusHigh) {
        this.positionY += minusHigh;
        this.hitBoxOne.updatePosition(this.getPositionX + this.getWidth / 5 * 2, this.getPositionY + this.getHeight / 4);
        this.hitBoxTwo.updatePosition(this.getPositionX + this.getWidth / 7 * 2, this.getPositionY + this.getHeight / 5 * 2);
    }

    die() {
        this.isDead = true;
    }

    resurrect() {
        this.isDead = false;
    }

    jump(speed, sound) {
        this.positionY -= speed;
        this.hitBoxOne.updatePosition(this.getPositionX + this.getWidth / 5 * 2, this.getPositionY + this.getHeight / 4);
        this.hitBoxTwo.updatePosition(this.getPositionX + this.getWidth / 7 * 2, this.getPositionY + this.getHeight / 5 * 2);
        sound.play();
    }

    goForward(plusHorizontal) {
        this.positionX += plusHorizontal;
    }

    goBackward(minusHorizontal) {
        this.positionX -= minusHorizontal;
    }

    resetStats() {
        this.points = 0;
        this.missedHooks = 0;
    }

    gainPoint() {
        this.points++;
    }

    loosePoint() {
        this.points--;
        this.missedHooks++;
    }

    set setName(name) {
        this.name = name;
    }

    set setImage(image) {
        this.image = image;
    }

    set setPositionX(positionX) {
        this.positionX = positionX;
    }

    set setPositionY(positionY) {
        this.positionY = positionY;
    }

    set setIsAbleToGainPoints(value) {
        this.isAbleToGainPoint = value;
    }

    get getName() {
        return this.name;
    }

    get getImage() {
        return this.image;
    }

    get getPositionX() {
        return this.positionX;
    }

    get getPositionY() {
        return this.positionY;
    }

    get getPoints() {
        return this.points;
    }

    get getMissedHoops() {
        return this.missedHooks;
    }

    get getHitboxOne() {
        return this.hitBoxOne;
    }

    get getHitboxTwo() {
        return this.hitBoxTwo;
    }

    get isAlive() {
        return !this.isDead;
    }

    get isAbleToGain() {
        return this.isAbleToGainPoint;
    }
}