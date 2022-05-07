class Hoop extends Actor {
    constructor(image, canvasWidth) {
        super(image, canvasWidth, 0);
        this.image = image;
        this.positionY = 0;
        this.canvasWidth = canvasWidth;
    }

    setInitialPosition() {
        
    }

    get getCanvasWidth() {
        return this.canvasWidth;
    }


}