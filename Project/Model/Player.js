class Player {
    constructor(image, positionX, positionY) {
        this.image = image;
        this.name = null;
        this.positionX = positionX;
        this.positionY = positionY;
        this.currentPX = this.positionX;
        this.currentPY = this.positionY;

        this.timer = null;
    }

    fall(minusHigh) {
        this.timer = setTimeout(() => {
            if (!this.isDead()) {
                this.currentPY += minusHigh;
            }
        }, 100);
    }

    isDead() {
        if (this.currentPY === 600 || this.currentPY <= 0) {
            clearTimeout(this.timer);
            this.currentPX = this.positionX;
            this.currentPY = this.positionY;
            return true;
        }
        return false;
    }

    jump(plusHigh) {
        this.timer = setTimeout(() => {
            if (!this.isDead()) {
                this.currentPY -= plusHigh;
            }
        }, 100);
    }

    set setName(name) {
        this.name = name;
    }

    set setImage(image) {
        this.image = image;
    }

    set setPositionX(positionX) {
        this.currentPX = positionX;
    }

    set setPositionY(positionY) {
        this.currentPY = positionY;
    }

    get getName() {
        return this.name;
    }

    get getImage() {
        return this.image;
    }

    get getPositionX() {
        return this.currentPX;
    }

    get getPositionY() {
        return this.currentPY;
    }

}