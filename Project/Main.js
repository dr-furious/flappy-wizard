function mainLoop() {
    if (flag === 0) {
        drawScene(imagesLevelEasy, context, harryPotter);
    } else if (flag === 1) {
        drawScene(imagesLevelMedium, context, harryPotter);
    } else if (flag === 2) {
        drawScene(imagesLevelHard, context, harryPotter);
    } else if (flag === 3) {
        drawScene(imagesLevelInsane, context, harryPotter);
    } else {
        console.log("Error");
    }
}
