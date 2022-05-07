class Game {
    static interval;
    static timeInterval;
    static time;

    static FPS = 1000 / 60;

    /**
     * Main Game manipulation functions
     */
    static start(player, intervalBody) {
        player.setInitialPosition();
        player.setInitialPoints();
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
    }

    static restart(player, intervalBody) {
        player.setInitialPosition();
        player.setInitialPoints();
        this.setInitialTime();
        this.interval = setInterval(intervalBody, this.FPS);
        this.startTimeCounter();
    }

    static quit() {
        clearInterval(this.timeInterval);
        clearInterval(this.interval);
    }

    /**===============================================================*/

    static setInitialTime() {
        this.time = 0;
    }

    static startTimeCounter() {
        this.timeInterval = setInterval(() => {
            this.time++;
        }, 1000)
    }

    static getTime() {
        return Game.time;
    }
}