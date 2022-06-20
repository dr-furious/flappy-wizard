class Stars extends Actor {
    constructor(image, positionX, positionY) {
        super(image, positionX, positionY);
        this.animationStart = true;
        this.starsInterval = null;
        this.starsSX = 0;
        this.starsSY = 64;
    }

    animateStars() {
        setInterval(() => {
            if (this.animationStart === true) {
                this.starsSX = 0;
                this.animationStart = false;
            } else {
                this.starsSX = 64;
                this.animationStart = true;
            }
        }, 200);
    }

    cancelAnimation() {
        clearInterval(this.starsInterval);
    }

    get getStarsSX() {
        return this.starsSX;
    }

    get getStarsSY() {
        return this.starsSY;
    }
}