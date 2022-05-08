class Game {
    static interval;
    static timeInterval;
    static speedUpInterval;
    static time;
    static backBackgroundSpeed = 0.5;
    static frontBackgroundSpeed = 5;
    static defaultBackBackgroundSpeed = this.backBackgroundSpeed;
    static defaultFrontBackgroundSpeed = this.frontBackgroundSpeed;

    static FPS = 1000 / 120;

    /**
     * Main Game manipulation functions
     */
    static start(intervalBody) {
        this.restoreDefaultSpeeds();
        this.setInitialTime();
        this.interval = setInterval(intervalBody, this.FPS);
        this.startTimeCounter();
    }

    static resume(intervalBody) {
        setTimeout(() => {
            this.interval = setInterval(intervalBody, this.FPS);
            this.startTimeCounter();
        }, 10);
    }

    static pause() {
        clearInterval(this.timeInterval);
        clearInterval(this.interval);
        clearInterval(this.speedUpInterval);
    }

    static restart(intervalBody) {
        this.setInitialTime();
        this.interval = setInterval(intervalBody, this.FPS);
        this.startTimeCounter();
        this.restoreDefaultSpeeds();
    }

    static quit() {
        clearInterval(this.timeInterval);
        clearInterval(this.interval);
        clearInterval(this.speedUpInterval);
    }

    /**===============================================================*/

    static speedUp(byFactor) {
        this.speedUpInterval = setInterval(() => {
            this.backBackgroundSpeed += byFactor * this.defaultBackBackgroundSpeed / 100;
            this.frontBackgroundSpeed += byFactor * this.defaultFrontBackgroundSpeed / 100;
        }, 1_000);
    }

    static restoreDefaultSpeeds() {
        this.backBackgroundSpeed = this.defaultBackBackgroundSpeed;
        this.frontBackgroundSpeed = this.defaultFrontBackgroundSpeed;
    }

    static setInitialTime() {
        this.time = 0;
    }

    static startTimeCounter() {
        this.timeInterval = setInterval(() => {
            this.time++;
        }, 1_000);
    }

    static getTime() {
        return this.time;
    }
}