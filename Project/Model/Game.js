class Game {
    constructor(image, positionX, positionY) {
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    start() {

    }

    set setImage(gameImage) {
        this.image = gameImage;
    }

    set setPositionX(positionX) {
        this.positionX = positionX;
    }

    set setPositionY(positionY) {
        this.positionY = positionY;
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


}