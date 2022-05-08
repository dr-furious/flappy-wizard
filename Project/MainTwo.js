function mainLoop() {
    if (flag === 0) {
        drawScene(imagesLevelEasy, context);
    } else if (flag === 1) {
        drawScene(imagesLevelMedium, context);
    } else if (flag === 2) {
        drawScene(imagesLevelHard, context);
    } else if (flag === 3) {
        drawScene(imagesLevelInsane, context);
    } else {
        console.log("Error");
    }
}
