class Painter {
    constructor(background, wizard, context, canvas, display, hide) {
        this.background = background;
        this.wizzard = wizard;
        this.context = context;
        this.canvas = canvas;
        this.display = display;
        this.hide = hide;
        this.interval = null;
    }


    start() {
        this.wizzard.playing();
        if (this.interval === null) {
            this.interval = setTimeout(() => {
                if (player.isDead()) {
                    this.stop();
                    this.hide.setAttribute("hidden", "");
                    this.display.removeAttribute("hidden");
                } else {
                    requestAnimationFrame(this.mainLoop(this));
                }
            }, 1000 / 20);
        }
    }

    stop() {
        if (this.interval !== null) {
            clearTimeout(this.interval);
            this.interval = null;
        }
    }

    mainLoop(item) {
        console.log(item.context);
        item.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        item.context.drawImage(this.background.getImage, this.background.getPositionX, this.background.getPositionY, this.canvas.width, this.canvas.height);
        item.context.drawImage(this.wizzard.getImage, this.wizzard.getPositionX, this.wizzard.getPositionY, 80, 140);
        return true;
    }
}