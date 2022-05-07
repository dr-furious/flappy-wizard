function mainLoop() {
    let flag = 3;
    let backBackgroundSpeed = 0.5;
    let frontBackgroundSpeed = 4;
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
    } else {
        drawScene(imagesLevelInsane, context);
        extendedBackgroundInsaneLayerOne.moveLeft(backBackgroundSpeed);
        extendedBackgroundInsaneLayerTwo.moveLeft(frontBackgroundSpeed);
        extendedBackgroundInsaneLayerThree.moveLeft(frontBackgroundSpeed);
    }
    setTime(timeInGame);
    setPlayerStat(harryPotter.getPoints, pointsInGame);
    fullHoopOne.moveLeft(4);
    fullHoopTwo.moveLeft(4);
    fullHoopThree.moveLeft(4);
    if (!inGameMenu.hasAttribute("hidden")) {
        if (keys[32] === true) {
            harryPotter.jump(5);
        } else {
            harryPotter.fall(6);
        }
    }
}
