let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let game = new Background(document.getElementById("background-easy-layer-1"), 0, 0);
let game2 = new Background(document.getElementById("background-easy-layer-2"), 0, 0);
let player = new Player(document.getElementById("Harry-Potter-wizard"), 200, 100);
let itemsToDraw = [];
itemsToDraw.push(game);
itemsToDraw.push(player);
let goMenu = document.getElementById("game-over-menu");
let igMenu = document.getElementById("in-game-menu-top");

let playerGameName = document.getElementById("in-game-player-name");

//let painter = new Painter(game, player, context, canvas, goMenu, igMenu);
let interval;

function drawXScene() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(game.getImage, game.getPositionX, game.getPositionY, canvas.width, canvas.height);
    context.drawImage(game2.getImage, game2.getPositionX, game2.getPositionY, canvas.width, canvas.height);
    context.drawImage(player.getImage, player.getPositionX, player.getPositionY, 80, 140);
}

function mainLoop() {
    interval = setInterval(() => {
        playerGameName.innerText = player.getName;
        if (player.isDead()) {
            //stop(interval);
            console.log("Hello");
            igMenu.setAttribute("hidden", "");
            goMenu.removeAttribute("hidden");
        } else {
            if (!igMenu.hasAttribute("hidden")) {
                if (keys[32] === true) {
                    player.jump(15);
                } else {
                    player.fall(10);
                }
                if (keys[39] === true) {
                    player.goForward(2);
                    console.log("hello");
                } else if (keys[37] === true) {
                    player.goBackward(2);
                }
                drawScene();
            }
        }
        //requestAnimationFrame(mainLoop);
    }, 1000 / 60);
}

function stop(interval) {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
}

function startNewGame() {
    // Set player's starting position
    // Buttons: startGame, restart, tryAgain
    mainLoop();
}

drawScene();
mainLoop();

