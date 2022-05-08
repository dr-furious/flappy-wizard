class FullHoop {

    constructor(hoopFront, hoopBack, min, max) {
        this.min = min;
        this.max = max;
        this.hoopFront = new Hoop(hoopFront.getImage, hoopFront.getCanvasWidth);
        this.hoopBack = new Hoop(hoopBack.getImage, hoopBack.getCanvasWidth);
        this.hoopFront.setPositionY = this.generateRandomNumberInRange(min, max);
        this.hoopBack.setPositionY = this.hoopFront.getPositionY;
        this.plusPointHitbox = new PlusPointHitbox(Math.round(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5),
            this.hoopBack.getPositionY + 10, 4, this.hoopBack.getHeight / 11 * 4);
        this.minusPointHitbox = new MinusPointHitbox(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5,
            -5, 4, this.hoopBack.getPositionY);
        this.killHitboxOne = new DeadlyHitbox(Math.round(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5), this.hoopBack.getPositionY, 4, 5);
        this.killHitboxTwo = new DeadlyHitbox(Math.round(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5),
            this.plusPointHitbox.getPositionY + this.plusPointHitbox.getHeight, 4, this.max * 2);
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
        this.plusPointHitbox.updatePosition(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5, this.hoopBack.getPositionY + 10);
        this.minusPointHitbox.updatePosition(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5,
            0);
        this.minusPointHitbox.updateSize(4, this.hoopBack.getPositionY);
        this.killHitboxOne.updatePosition(Math.round(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5), this.hoopBack.getPositionY);
        this.killHitboxTwo.updatePosition(Math.round(this.hoopBack.getPositionX + this.hoopBack.getWidth / 2 - 5),
            this.plusPointHitbox.getPositionY + this.plusPointHitbox.getHeight);
    }

    isPlayerTouching(player) {
        if (this.plusPointHitbox.isIntersecting(player.getHitboxTwo)) {
            if (player.isAbleToGain) {
                player.gainPoint();
                player.setIsAbleToGainPoints = false;
            }
        }
        if (this.plusPointHitbox.isOnePointBehind(player.getHitboxTwo)) {
            if (!player.isAbleToGain) {
                player.setIsAbleToGainPoints = true;
            }
        }

        if (this.killHitboxOne.isIntersecting(player.getHitboxOne) || this.killHitboxOne.isIntersecting(player.getHitboxTwo)
            || this.killHitboxTwo.isIntersecting(player.getHitboxOne) || this.killHitboxTwo.isIntersecting(player.getHitboxTwo)) {
            player.die();
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

    get getPlusPointHitbox() {
        return this.plusPointHitbox;
    }

    get getMinusPointHitbox() {
        return this.minusPointHitbox;
    }

    get getKillHitboxOne() {
        return this.killHitboxOne;
    }

    get getKillHitboxTwo() {
        return this.killHitboxTwo;
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