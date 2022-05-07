let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// ===============================================================================================================
// =================== SOUNDS AND MUSIC ======================================
// ===============================================================================================================

let musics = [];
musics.push(document.getElementById("mainTheme"));
musics.push(document.getElementById("gameMusic"));

let volumes = [];
volumes.push(document.getElementById("fly-up-sound"));
volumes.push(document.getElementById("knock-sound"));
volumes.push(document.getElementById("click-sound"));
volumes.push(document.getElementById("clink-sound"));
// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== IMAGES AND IMAGE FIELDS INITIALIZATION ===================
// ===============================================================================================================

// Hoops and player
let hoopImageBack = document.getElementById("hoop");
let hoopImageFront = document.getElementById("hoop-front");
let harryPotterImage = document.getElementById("Harry-Potter-wizard");

let harryPotter = new Player(harryPotterImage, 200, 100);
harryPotter.setWidth = 72;
harryPotter.setHeight = 128;

let hoopFront = new Hoop(hoopImageFront, canvas.width);
let hoopBack = new Hoop(hoopImageBack, canvas.width);
let fullHoopOne = new FullHoop(hoopFront, hoopBack, 0, canvas.height - 400);
let fullHoopTwo = new FullHoop(hoopFront, hoopBack, 0, canvas.height - 400);
let fullHoopThree = new FullHoop(hoopFront, hoopBack, 0, canvas.height - 400);
fullHoopOne.setPositionX = 0;
fullHoopTwo.setPositionX = canvas.width / 2 + canvas.width / 3;
fullHoopThree.setPositionX = canvas.width + canvas.width / 3;

// Images for level EASY
let imagesLevelEasy = [];
let easyLevelImageLayerOne = document.getElementById("background-easy-layer-1");
let easyLevelImageLayerTwo = document.getElementById("background-easy-layer-2");
let easyLevelImageLayerThree = document.getElementById("background-easy-layer-3");

let extendedBackgroundEasyLayerOne = new ExtendedBackground(easyLevelImageLayerOne, 0, 0, canvas.width);
let extendedBackgroundEasyLayerTwo = new ExtendedBackground(easyLevelImageLayerTwo, 0, 0, canvas.width);
let extendedBackgroundEasyLayerThree = new ExtendedBackground(easyLevelImageLayerThree, 0, 0, canvas.width);

imagesLevelEasy.push(extendedBackgroundEasyLayerOne.getBackgroundOne);
imagesLevelEasy.push(extendedBackgroundEasyLayerOne.getBackgroundTwo);
imagesLevelEasy.push(extendedBackgroundEasyLayerTwo.getBackgroundOne);
imagesLevelEasy.push(extendedBackgroundEasyLayerTwo.getBackgroundTwo);
imagesLevelEasy.push(fullHoopOne.getHoopBack);
imagesLevelEasy.push(fullHoopTwo.getHoopBack);
imagesLevelEasy.push(fullHoopThree.getHoopBack);
imagesLevelEasy.push(extendedBackgroundEasyLayerThree.getBackgroundOne);
imagesLevelEasy.push(extendedBackgroundEasyLayerThree.getBackgroundTwo);
imagesLevelEasy.push(harryPotter);
imagesLevelEasy.push(fullHoopOne.getHoopFront);
imagesLevelEasy.push(fullHoopTwo.getHoopFront);
imagesLevelEasy.push(fullHoopThree.getHoopFront);


// Images for level MEDIUM
let imagesLevelMedium = [];

let mediumLevelImageLayerOne = document.getElementById("background-medium-layer-1");
let mediumLevelImageLayerTwo = document.getElementById("background-medium-layer-2");
let mediumLevelImageLayerThree = document.getElementById("background-medium-layer-3");

let extendedBackgroundMediumLayerOne = new ExtendedBackground(mediumLevelImageLayerOne, 0, 0, canvas.width);
let extendedBackgroundMediumLayerTwo = new ExtendedBackground(mediumLevelImageLayerTwo, 0, 0, canvas.width);
let extendedBackgroundMediumLayerThree = new ExtendedBackground(mediumLevelImageLayerThree, 0, 0, canvas.width);

imagesLevelMedium.push(extendedBackgroundMediumLayerOne.getBackgroundOne);
imagesLevelMedium.push(extendedBackgroundMediumLayerOne.getBackgroundTwo);
imagesLevelMedium.push(extendedBackgroundMediumLayerTwo.getBackgroundOne);
imagesLevelMedium.push(extendedBackgroundMediumLayerTwo.getBackgroundTwo);
imagesLevelMedium.push(fullHoopOne.getHoopBack);
imagesLevelMedium.push(fullHoopTwo.getHoopBack);
imagesLevelMedium.push(fullHoopThree.getHoopBack);
imagesLevelMedium.push(extendedBackgroundMediumLayerThree.getBackgroundOne);
imagesLevelMedium.push(extendedBackgroundMediumLayerThree.getBackgroundTwo);
imagesLevelMedium.push(harryPotter);
imagesLevelMedium.push(fullHoopOne.getHoopFront);
imagesLevelMedium.push(fullHoopTwo.getHoopFront);
imagesLevelMedium.push(fullHoopThree.getHoopFront);


// Images for level HARD
let imagesLevelHard = [];

let hardLevelImageLayerOne = document.getElementById("background-hard-layer-1");
let hardLevelImageLayerTwo = document.getElementById("background-hard-layer-2");
let hardLevelImageLayerThree = document.getElementById("background-hard-layer-3");

let extendedBackgroundHardLayerOne = new ExtendedBackground(hardLevelImageLayerOne, 0, 0, canvas.width);
let extendedBackgroundHardLayerTwo = new ExtendedBackground(hardLevelImageLayerTwo, 0, 0, canvas.width);
let extendedBackgroundHardLayerThree = new ExtendedBackground(hardLevelImageLayerThree, 0, 0, canvas.width);

imagesLevelHard.push(extendedBackgroundHardLayerOne.getBackgroundOne);
imagesLevelHard.push(extendedBackgroundHardLayerOne.getBackgroundTwo);
imagesLevelHard.push(extendedBackgroundHardLayerTwo.getBackgroundOne);
imagesLevelHard.push(extendedBackgroundHardLayerTwo.getBackgroundTwo);
imagesLevelHard.push(fullHoopOne.getHoopBack);
imagesLevelHard.push(fullHoopTwo.getHoopBack);
imagesLevelHard.push(fullHoopThree.getHoopBack);
imagesLevelHard.push(extendedBackgroundHardLayerThree.getBackgroundOne);
imagesLevelHard.push(extendedBackgroundHardLayerThree.getBackgroundTwo);
imagesLevelHard.push(harryPotter);
imagesLevelHard.push(fullHoopOne.getHoopFront);
imagesLevelHard.push(fullHoopTwo.getHoopFront);
imagesLevelHard.push(fullHoopThree.getHoopFront);


// Images for level INSANE
let imagesLevelInsane = [];

let insaneLevelImageLayerOne = document.getElementById("background-insane-layer-1");
let insaneLevelImageLayerTwo = document.getElementById("background-insane-layer-2");
let insaneLevelImageLayerThree = document.getElementById("background-insane-layer-3");

let extendedBackgroundInsaneLayerOne = new ExtendedBackground(insaneLevelImageLayerOne, 0, 0, canvas.width);
let extendedBackgroundInsaneLayerTwo = new ExtendedBackground(insaneLevelImageLayerTwo, 0, 0, canvas.width);
let extendedBackgroundInsaneLayerThree = new ExtendedBackground(insaneLevelImageLayerThree, 0, 0, canvas.width);

imagesLevelInsane.push(extendedBackgroundInsaneLayerOne.getBackgroundOne);
imagesLevelInsane.push(extendedBackgroundInsaneLayerOne.getBackgroundTwo);
imagesLevelInsane.push(extendedBackgroundInsaneLayerTwo.getBackgroundOne);
imagesLevelInsane.push(extendedBackgroundInsaneLayerTwo.getBackgroundTwo);
imagesLevelInsane.push(fullHoopOne.getHoopBack);
imagesLevelInsane.push(fullHoopTwo.getHoopBack);
imagesLevelInsane.push(fullHoopThree.getHoopBack);
imagesLevelInsane.push(extendedBackgroundInsaneLayerThree.getBackgroundOne);
imagesLevelInsane.push(extendedBackgroundInsaneLayerThree.getBackgroundTwo);
imagesLevelInsane.push(harryPotter);
imagesLevelInsane.push(fullHoopOne.getHoopFront);
imagesLevelInsane.push(fullHoopTwo.getHoopFront);
imagesLevelInsane.push(fullHoopThree.getHoopFront);
// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== SECTIONS (MENUS) ===================
// ===============================================================================================================


// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== OTHER HTML ELEMENTS ===================
// ===============================================================================================================
let timeInGame = document.getElementById("time-in-game");
let pointsInGame = document.getElementById("points-in-game");

let animations = document.querySelectorAll(".animated");
let spanMusicMuted = document.getElementsByClassName("music-off");
let spanVolumeMuted = document.getElementsByClassName("volume-off");
// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== BUTTONS AND BUTTON EVENTS ===================
// ===============================================================================================================

// Button arrays initialization
let buttons = document.querySelectorAll("button");  // All buttons
let radiobuttons = document.querySelectorAll('input[type="radio"]');    // All radiobuttons
let soundButtons = document.getElementsByClassName("button-sound");   // All soundButtons
let musicButtons = document.getElementsByClassName("button-music");   // All musicButtons
let mainMenuButtons = document.querySelectorAll("section#main-menu button");    // All buttons in main menu

// Buttons initialization
let loadGameButton = document.getElementById("button-do-it");
let buttonPause = document.getElementById("button-paused");
let buttonResume = document.getElementById("button-resume");
let buttonRestart = document.getElementById("button-restart-id");

let sectionStartIt = document.getElementById("start-it");
let inGameMenu = document.getElementById("in-game-menu-top");
let pausedGameMenu = document.getElementById("game-menu");


let gameMenus = document.querySelectorAll("section");
let startMenu = document.getElementById("button-do-it");
let mainMenu = document.getElementById("main-menu");
let pausedMenu = document.getElementById("game-menu");
let menuHelp = document.getElementById("info");
let changeCharacterMenu = document.getElementById("change-character");
let leaderboard = document.getElementById("leaderboard");
let gameOverMenu = document.getElementById("game-over-menu");


loadGameButton.onclick = () => {
    Game.start(harryPotter, mainLoop);
    sectionStartIt.setAttribute("hidden", "");
    inGameMenu.removeAttribute("hidden");
};

buttonPause.onclick = () => {
    inGameMenu.setAttribute("hidden", "");
    pausedGameMenu.removeAttribute("hidden");
    Game.pause();
}

buttonRestart.onclick = () => {
    imagesLevelInsane.forEach(item => {
        item.setInitialPosition();
    });
    fullHoopOne.setPositionX = 0;
    fullHoopTwo.setPositionX = canvas.width / 2 + canvas.width / 3;
    fullHoopThree.setPositionX = canvas.width + canvas.width / 3;
    pausedGameMenu.setAttribute("hidden", "");
    inGameMenu.removeAttribute("hidden");
    Game.restart(harryPotter, mainLoop);
}

buttonResume.onclick = () => {
    pausedGameMenu.setAttribute("hidden", "");
    inGameMenu.removeAttribute("hidden");
    Game.resume(mainLoop);
}

// ===============================================================================================================
// ===============================================================================================================