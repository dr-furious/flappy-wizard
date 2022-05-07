class Actor {
    constructor(image, positionX, positionY) {
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
        this.defaultPositionX = positionX;
        this.defaultPositionY = positionY;
        this.width = 1280;
        this.height = 720;
    }

    setInitialPosition() {
        this.positionX = this.defaultPositionX;
        this.positionY = this.defaultPositionY;
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

    set setWidth(width) {
        this.width = width;
    }

    set setHeight(height) {
        this.height = height;
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

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }


}