class ExtendedBackground {

    constructor(image, positionX, positionY, canvasWidth) {
        this.canvasWidth = canvasWidth;
        this.positionY = positionY;
        this.backgroundLayerOne = new Background(image, positionX, positionY);
        this.backgroundLayerTwo = new Background(image, canvasWidth, positionY);
    }

    moveLeft(speed) {
        this.backgroundLayerOne.positionX -= speed;
        this.backgroundLayerTwo.positionX -= speed;
        if ((this.backgroundLayerOne.positionX + this.canvasWidth) <= 0) {
            this.backgroundLayerOne.positionX += 2 * this.canvasWidth;
        }
        if ((this.backgroundLayerTwo.positionX + this.canvasWidth) <= 0) {
            this.backgroundLayerTwo.positionX += 2 * this.canvasWidth;
        }
    }

    setInitialPosition() {
        this.backgroundLayerOne.setInitialPosition();
        this.backgroundLayerTwo.setPositionX = this.canvasWidth;
        this.backgroundLayerTwo.setPositionY = this.positionY;
    }

    get getBackgroundOne() {
        return this.backgroundLayerOne;
    }

    get getBackgroundTwo() {
        return this.backgroundLayerTwo;
    }
}