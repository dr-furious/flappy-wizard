class Player extends Actor {
    constructor(image, positionX, positionY) {
        super(image, positionX, positionY);
        this.name = null;
        this.points = 0;
        this.missedHooks = 0;
    }

    fall(minusHigh) {
        this.positionY += minusHigh;
    }

    isDead() {
        return this.positionY >= 720 || this.positionY <= -128 || this.positionX === 0 || this.positionX >= 1280;
    }

    jump(speed) {
        this.positionY -= speed;
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
}