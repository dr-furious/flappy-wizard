let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// ===============================================================================================================
// =================== SOUNDS AND MUSIC ======================================
// ===============================================================================================================

let musics = [];
let mainTheme = document.getElementById("mainTheme");
let gameMusic = document.getElementById("gameMusic");
musics.push(mainTheme);
musics.push(gameMusic);

let volumes = [];
let flyUpSound = document.getElementById("fly-up-sound");
let knockSound = document.getElementById("knock-sound");
let clickSound = document.getElementById("click-sound");
let clinkSound = document.getElementById("clink-sound");
volumes.push(flyUpSound);
volumes.push(knockSound);
volumes.push(clickSound);
volumes.push(clinkSound);
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
let gameMenus = document.querySelectorAll("section");                    // All menus

let startMenu = document.getElementById("start-it");                    // 1. Load game menu
let mainMenu = document.getElementById("main-menu");                    // 2. Main menu
let inGameMenu = document.getElementById("in-game-menu-top");           // 3. In game menu
let pausedGameMenu = document.getElementById("game-menu");              // 4. Paused game menu
let helpMenu = document.getElementById("info");                         // 5. Help menu
let changeCharacterMenu = document.getElementById("change-character");  // 6. Change character menu
let leaderboardMenu = document.getElementById("leaderboard");           // 7. Leaderboard
let gameOverMenu = document.getElementById("game-over-menu");           // 8. Game over menu

// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== OTHER HTML ELEMENTS (texts, headings, animations, spans) ================
// ===============================================================================================================
let nameTitle = document.getElementById("in-game-player-name");
let timeInGame = document.getElementById("time-in-game");                      // Time representing how long is current game played
let pointsInGame = document.getElementById("points-in-game");                  // Points in current game
let pointsStat = document.querySelectorAll(".points-stat");                    // Paused game and Game Over points
let missedHoopsStat = document.querySelectorAll(".missed-hoops-stat");         // Paused game and Game Over missed hoops
let timeStat = document.querySelectorAll(".time-stat");                        // Paused game and Game Over time in game
let animations = document.querySelectorAll(".animated");                       // CSS animation classes
let spanMusicMuted = document.querySelectorAll(".music-off");                  // Spans displayed when musics are muted
let spanVolumeMuted = document.querySelectorAll(".volume-off");                // Spans displayed when sounds are muted
// ===============================================================================================================
// ===============================================================================================================


// ===============================================================================================================
// =================== BUTTONS AND BUTTON EVENTS ===================
// ===============================================================================================================

// Button arrays initialization
let buttons = document.querySelectorAll("button");                                 // All buttons
let radiobuttons = document.querySelectorAll('input[type="radio"]');               // All radiobuttons
let chooseDifficultyRadioButtons = document.querySelectorAll(".game-difficulty-option");
let soundButtons = document.querySelectorAll(".button-sound");              // All sound buttons
let musicButtons = document.querySelectorAll(".button-music");              // All music buttons
let helpButtons = document.querySelectorAll(".button-help");              // All help buttons
let goHomeButtons = document.querySelectorAll(".button-home");              // All help buttons
let mainMenuButtons = document.querySelectorAll("section#main-menu button");       // All buttons in main menu

// Buttons initialization: [HTML button element] + [custom-created button object with associated functions]
let loadGameButton = document.getElementById("button-do-it");
let pauseButton = document.getElementById("button-paused");
let resumeButton = document.getElementById("button-resume");
let restartButtons = document.querySelectorAll(".button-restart");
let quitButtons = document.querySelectorAll(".button-quit");
let playButton = document.getElementById("button-play");
let changeCharacterButton = document.getElementById("button-change-character");
let showLeaderBoardButton = document.getElementById("button-leaderboard");
let returnButton = document.getElementById("button-return");


// Virtual buttons
let soundButtonVirtual = new SoundButton(clickSound, volumes, spanVolumeMuted);
let musicButtonVirtual = new SoundButton(clickSound, musics, spanMusicMuted);
let helpButtonVirtual = new HelpButton(clickSound, helpMenu);
let goHomeButtonVirtual = new SwitchMenusButton(clickSound, mainMenu, gameMenus);
let loadGameButtonVirtual = new LoadGameButton(clickSound, mainMenu, gameMenus, mainTheme, gameMusic, animations, mainMenuButtons);
let pauseButtonVirtual = new PauseButton(clickSound, pausedGameMenu, gameMenus);
let resumeRestartButtonVirtual = new SwitchMenusButton(clickSound, inGameMenu, gameMenus);
let quitButtonVirtual = new QuitButton(clickSound, mainMenu, gameMenus, gameMusic);
let playButtonVirtual = new PlayButton(clickSound, inGameMenu, gameMenus, gameMusic);
let changeCharacterButtonVirtual = new SwitchMenusButton(clickSound, changeCharacterMenu, gameMenus);
let showLeaderBoardButtonVirtual = new SwitchMenusButton(clickSound, leaderboardMenu, gameMenus);
let returnButtonVirtual = new ReturnButton(clickSound, gameMenus);
let switchToGameOverMenuButton = new SwitchMenusButton(clickSound, gameOverMenu, gameMenus);


// Onclick events - others

mainMenu.onclick = () => {
    loadGameButtonVirtual.skipAnimation();
}


// Onclick events - buttons

// Loads the game
loadGameButton.onclick = () => {
    loadGameButtonVirtual.playClick();
    loadGameButtonVirtual.writePlayerName("hero-name", harryPotter);
    loadGameButtonVirtual.initializeMainMenu();
    loadGameButtonVirtual.switchMenus();
    // Update leaderboard
};


// Game difficulty setup
let flag = 1;
chooseDifficultyRadioButtons.forEach(radiobutton => {
    radiobutton.addEventListener("click", () => {
        soundButtonVirtual.playClick();
        if (radiobutton.checked) {
            switch (radiobutton.value) {
                case "Easy":
                    flag = 0;
                    break;
                case "Medium":
                    flag = 1;
                    break;
                case "Hard":
                    flag = 2;
                    break;
                case "Insane":
                    flag = 3;
                    break;
                default:
                    flag = -1;
                    break;
            }
        }
    });
})


// Starts the game
playButton.onclick = () => {
    playButtonVirtual.playClick();
    playButtonVirtual.replayMusic();
    harryPotter.resetStats();
    resetDefaultPositions();
    Game.start(runAndCheck);
    let byFactor = speedUpAccordingly();
    Game.speedUp(byFactor);
    playButtonVirtual.switchMenus();
    setPlayerStat(harryPotter.getName, nameTitle);
}

// Pauses the game
pauseButton.onclick = () => {
    Game.pause();
    pauseButtonVirtual.playClick();
    pauseButtonVirtual.switchMenus();
    pointsStat.forEach(item => {
        setPlayerStat(harryPotter.getPoints, item);
        console.log(harryPotter.getPoints);
    });
    console.log(harryPotter.getPoints);
    missedHoopsStat.forEach(item => {
        setPlayerStat(harryPotter.getMissedHoops, item);
    });
    timeStat.forEach(item => {
        setTime(item);
    });
}

// Restarts the game
restartButtons.forEach(restartButton => {
    restartButton.addEventListener("click", () => {
        resumeRestartButtonVirtual.playClick();
        resetDefaultPositions();
        playButtonVirtual.replayMusic();
        fullHoopOne.setPositionX = 0;
        fullHoopTwo.setPositionX = canvas.width / 2 + canvas.width / 3;
        fullHoopThree.setPositionX = canvas.width + canvas.width / 3;
        resumeRestartButtonVirtual.switchMenus();
        harryPotter.resetStats();
        Game.restart(runAndCheck);
        let byFactor = speedUpAccordingly();
        Game.speedUp(byFactor);
    });
});

// Resumes the game
resumeButton.onclick = () => {
    resumeRestartButtonVirtual.playClick();
    pausedGameMenu.setAttribute("hidden", "");
    inGameMenu.removeAttribute("hidden");
    Game.resume(runAndCheck);
}

// Quits the game
quitButtons.forEach(quitButton => {
    quitButton.addEventListener("click", () => {
        quitButtonVirtual.playClick();
        quitButtonVirtual.replayMusic();
        // Store data
        harryPotter.resetStats();
        quitButtonVirtual.switchMenus();
        resetDefaultPositions();
        // Update leaderboard
    });
});


// Disables or enables sounds and musics
soundButtons.forEach(soundButton => {
    soundButton.addEventListener("click", () => {
        soundButtonVirtual.manageSounds();
    });
});

musicButtons.forEach(musicButton => {
    musicButton.addEventListener("click", () => {
        musicButtonVirtual.manageSounds();
    });
});


// Switching between menus
helpButtons.forEach(helpButton => {
    helpButton.addEventListener("click", () => {
        helpButtonVirtual.playClick()
        helpButtonVirtual.showHelpMenu();
    });
});

goHomeButtons.forEach(goHomeButton => {
    goHomeButton.addEventListener("click", () => {
        goHomeButtonVirtual.playClick()
        goHomeButtonVirtual.switchMenus();
    });
});

returnButton.onclick = () => {
    returnButtonVirtual.playClick();
    console.log(1)
    returnButtonVirtual.hideLastDisplayedMenu();
}

changeCharacterButton.onclick = () => {
    changeCharacterButtonVirtual.playClick();
    changeCharacterButtonVirtual.switchMenus();
}

showLeaderBoardButton.onclick = () => {
    showLeaderBoardButtonVirtual.playClick();
    showLeaderBoardButtonVirtual.switchMenus();
}

// ===============================================================================================================
// ===============================================================================================================


function runAndCheck() {
    if (harryPotter.isDead()) {
        Game.pause();
        switchToGameOverMenuButton.switchMenus();
    }
    mainLoop();
}

function speedUpAccordingly() {
    switch (flag) {
        case 0:
            return 1.025;
        case 1:
            return 1.05;
        case 2:
            return 1.075;
        case 3:
            return 1.1;
    }
}


function resetDefaultPositions() {
    imagesLevelEasy.forEach(item => {
        item.setInitialPosition();
    });
    imagesLevelMedium.forEach(item => {
        item.setInitialPosition();
    });
    imagesLevelHard.forEach(item => {
        item.setInitialPosition();
    });
    imagesLevelInsane.forEach(item => {
        item.setInitialPosition();
    });
    fullHoopOne.setPositionX = 0;
    fullHoopTwo.setPositionX = canvas.width / 2 + canvas.width / 3;
    fullHoopThree.setPositionX = canvas.width + canvas.width / 3;
}