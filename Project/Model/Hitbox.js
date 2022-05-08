class Hitbox extends Actor {
    constructor(positionX, positionY, width, height) {
        super(null, positionX, positionY);
        this.width = width;
        this.height = height;
    }

    areIntersecting(anotherSquareHitboxes) {
        anotherSquareHitboxes.forEach(hitbox => {
            if (this.isIntersecting(hitbox)) {
                return true;
            }
        })

        return false;
    }

    isIntersecting(hitbox) {
        let aX1 = this.getPositionX;
        let aY1 = this.getPositionY;
        let aX2 = aX1 + this.width;
        let aY2 = aY1 + this.height;

        let bX1 = hitbox.getPositionX;
        let bY1 = hitbox.getPositionY;
        let bX2 = bX1 + hitbox.getWidth;
        let bY2 = bY1 + hitbox.getHeight;

        if (aX1 >= bX2 || bX1 >= aX2) {
            return false;
        }

        if (aY1 >= bY2 || bY1 >= aY2) {
            return false;
        }

        return true;
    }


    isTouching(hitbox) {
        let aX1 = this.getPositionX;
        let aY1 = this.getPositionY;
        let aX2 = aX1 + this.width;
        let aY2 = aY1 + this.height;

        let bX1 = hitbox.getPositionX;
        let bY1 = hitbox.getPositionY;
        let bX2 = bX1 + hitbox.getWidth;
        let bY2 = bY1 + hitbox.getHeight;


        if (Math.round(aX2) === Math.round(bX1)) {
            console.log("======");
            console.log(aX2, bX1);
            console.log("======");
        }

        if (Math.ceil(aX2) === 221) {
            console.log("======");
            console.log(aX2, bX1);
            console.log("======");
        }


        return Math.round(aX2) === Math.round(bX1) && bY1 >= aY1 && bY2 <= aY2;
    }


    isOnePointBehind(hitbox) {
        let aX1 = this.getPositionX;
        let aY1 = this.getPositionY;
        let aX2 = aX1 + this.width;
        let aY2 = aY1 + this.height;

        let bX1 = hitbox.getPositionX;
        let bY1 = hitbox.getPositionY;
        let bX2 = bX1 + hitbox.getWidth;
        let bY2 = bY1 + hitbox.getHeight;

        return (Math.ceil(bX1) - Math.ceil(aX2)) >= 0 && (Math.ceil(bX1) - Math.ceil(aX2)) <= 4 && (bY1 >= aY1 && bY2 <= aY2);
    }

    updatePosition(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    updateSize(width, height) {
        this.width = width;
        this.height = height;
    }
}