let musics = [];
musics.push(document.getElementById("mainTheme"));
musics.push(document.getElementById("gameMusic"));
let volumes = [];
volumes.push(document.getElementById("fly-up-sound"));
volumes.push(document.getElementById("knock-sound"));
volumes.push(document.getElementById("click-sound"));
volumes.push(document.getElementById("cink-sound"));

let animations = document.querySelectorAll(".animated");

let spanMusicMuted = document.getElementsByClassName("music-off");
let spanVolumeMuted = document.getElementsByClassName("volume-off");

let gameMenus = document.querySelectorAll("section");
let startMenu = document.getElementById("button-do-it");
let mainMenu = document.getElementById("main-menu");
let inGameMenu = document.getElementById("in-game-menu-top");
let pausedMenu = document.getElementById("game-menu");
let menuHelp = document.getElementById("info");
let changeCharacterMenu = document.getElementById("change-character");
let leaderboard = document.getElementById("leaderboard");
let gameOverMenu = document.getElementById("game-over-menu");

let mainMenuButtons = document.querySelectorAll("section#main-menu button");

let buttonStart = new LoadGameButton(startMenu, volumes[2], mainMenu,
    musics[0], musics[1], null, animations, mainMenuButtons);
let buttonsMusic = document.getElementsByClassName("button-music");
let buttonsSound = document.getElementsByClassName("button-sound");
let buttonsPlay = Array.from(document.querySelectorAll(".button-restart"));
buttonsPlay.push(document.getElementById("button-play"));
let pauseButton = new PauseButton(document.getElementById("button-paused"), volumes[2], pausedMenu, null);
let buttonsQuit = document.getElementsByClassName("button-quit");
let resumeButton = new ResumeButton(document.getElementById("button-resume"), volumes[2], inGameMenu, null);
let helpButtons = document.getElementsByClassName("button-help");
let returnButton = new ReturnButton(document.getElementById("button-return"), volumes[2]);
let homeButtons = document.getElementsByClassName("button-home");
let changeCharacterButton = new SwitchMenusButton(document.getElementById("button-change-character"), volumes[2], changeCharacterMenu);
let leaderboardButton = new SwitchMenusButton(document.getElementById("button-leaderboard"), volumes[2], leaderboard);

returnButton.onclick(gameMenus);
resumeButton.onclick(gameMenus);
buttonStart.onclick(gameMenus);
pauseButton.onclick(gameMenus);
changeCharacterButton.onclick(gameMenus);
leaderboardButton.onclick(gameMenus);

for (let i = 0; i < homeButtons.length; i++) {
    let homeButton = new SwitchMenusButton(homeButtons[i], volumes[2], mainMenu);
    homeButton.onclick(gameMenus);
}

for (let i = 0; i < buttonsMusic.length; i++) {
    let buttonMusic = new SoundButton(buttonsMusic[i], volumes[2], musics, spanMusicMuted);
    let buttonSound = new SoundButton(buttonsSound[i], volumes[2], volumes, spanVolumeMuted);
    buttonMusic.onclick();
    buttonSound.onclick();
}

for (let i = 0; i < buttonsPlay.length; i++) {
    let buttonPlay = new PlayButton(buttonsPlay[i], volumes[2], inGameMenu, null, musics[1]);
    buttonPlay.onclick(gameMenus);
}

for (let i = 0; i < buttonsQuit.length; i++) {
    let buttonQuit = new QuitButton(buttonsQuit[i], volumes[2], mainMenu, null, musics[1]);
    buttonQuit.onclick(gameMenus);
}

for (let i = 0; i < helpButtons.length; i++) {
    let buttonHelp = new HelpButton(helpButtons[i], volumes[2], menuHelp);
    buttonHelp.onclick(gameMenus);
}

mainMenu.onclick = () => {
    for (let i = 0; i < animations.length; i++) {
        animations[i].classList.remove("animated");
    }
    console.log(0)
    buttonStart.skipAnimation();
}