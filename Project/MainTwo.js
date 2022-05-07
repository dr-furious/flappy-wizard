function mainLoop() {
    let backBackgroundSpeed = Game.backBackgroundSpeed;
    let frontBackgroundSpeed = Game.frontBackgroundSpeed;
    if (flag === 0) {
        drawScene(imagesLevelEasy, context);
        extendedBackgroundEasyLayerOne.moveLeft(backBackgroundSpeed);
        extendedBackgroundEasyLayerTwo.moveLeft(frontBackgroundSpeed);
        extendedBackgroundEasyLayerThree.moveLeft(frontBackgroundSpeed);
    } else if (flag === 1) {
        drawScene(imagesLevelMedium, context);
        extendedBackgroundMediumLayerOne.moveLeft(backBackgroundSpeed);
        extendedBackgroundMediumLayerTwo.moveLeft(frontBackgroundSpeed);
        extendedBackgroundMediumLayerThree.moveLeft(frontBackgroundSpeed);
    } else if (flag === 2) {
        drawScene(imagesLevelHard, context);
        extendedBackgroundHardLayerOne.moveLeft(backBackgroundSpeed);
        extendedBackgroundHardLayerTwo.moveLeft(frontBackgroundSpeed);
        extendedBackgroundHardLayerThree.moveLeft(frontBackgroundSpeed);
    } else if (flag === 3) {
        drawScene(imagesLevelInsane, context);
        extendedBackgroundInsaneLayerOne.moveLeft(backBackgroundSpeed);
        extendedBackgroundInsaneLayerTwo.moveLeft(frontBackgroundSpeed);
        extendedBackgroundInsaneLayerThree.moveLeft(frontBackgroundSpeed);
    } else {
        console.log("Error");
        return;
    }
    setTime(timeInGame);
    setPlayerStat(harryPotter.getPoints, pointsInGame);
    fullHoopOne.moveLeft(frontBackgroundSpeed);
    fullHoopTwo.moveLeft(frontBackgroundSpeed);
    fullHoopThree.moveLeft(frontBackgroundSpeed);
    if (!inGameMenu.hasAttribute("hidden")) {
        if (keys[32] === true) {
            harryPotter.jump(5);
        } else {
            harryPotter.fall(5);
        }
    }
}
