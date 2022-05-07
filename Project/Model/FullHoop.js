class FullHoop {

    constructor(hoopFront, hoopBack, min, max) {
        this.min = min;
        this.max = max;
        this.hoopFront = new Hoop(hoopFront.getImage, hoopFront.getCanvasWidth);
        this.hoopBack = new Hoop(hoopBack.getImage, hoopBack.getCanvasWidth);
        this.hoopFront.setPositionY = this.generateRandomNumberInRange(min, max);
        this.hoopBack.setPositionY = this.hoopFront.getPositionY;
    }

    moveLeft(speed) {
        this.hoopFront.positionX -= speed;
        this.hoopBack.positionX -= speed;
        if (this.hoopFront.getPositionX + this.hoopFront.getImage.width + 50 < 0) {
            this.hoopFront.positionX += 2 * this.hoopFront.getCanvasWidth;
            this.hoopBack.positionX += 2 * this.hoopFront.getCanvasWidth;
            this.hoopBack.setPositionY = this.generateRandomNumberInRange(this.min, this.max);
            this.hoopFront.setPositionY = this.hoopBack.getPositionY;
        }
    }

    generateRandomNumberInRange(min, max) {
        if (min < max) {
            this.generateRandomNumberInRange(max, min);
        }

        return Math.random() * (max - min) + min;
    }

    get getHoopBack() {
        return this.hoopBack;
    }

    get getHoopFront() {
        return this.hoopFront;
    }

    set setPositionX(positionX) {
        this.hoopBack.setPositionX = positionX;
        this.hoopFront.setPositionX = positionX;
    }

    set setPositionY(positionY) {
        this.hoopBack.setPositionY = positionY;
        this.hoopFront.setPositionY = positionY;
    }
}