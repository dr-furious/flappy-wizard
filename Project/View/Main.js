let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let game = new Game(document.getElementById("background-lvl-1"), 0, 0);
let player = new Player(document.getElementById("Harry-Potter-wizard"), 200, 100);
let itemsToDraw = [];
itemsToDraw.push(game);
itemsToDraw.push(player);
let goMenu = document.getElementById("game-over-menu");
let igMenu = document.getElementById("in-game-menu-top");

//let painter = new Painter(game, player, context, canvas, goMenu, igMenu);
let interval;

function initialImage() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(game.getImage, game.getPositionX, game.getPositionY, canvas.width, canvas.height);
    context.drawImage(player.getImage, player.getPositionX, player.getPositionY, 80, 140);
}

function mainLoop() {
    interval = setTimeout(() => {
        if (player.isDead()) {
            stop();
            igMenu.setAttribute("hidden", "");
            goMenu.removeAttribute("hidden");
        } else {
            if (!igMenu.hasAttribute("hidden")) {
                if (keys[32] === true) {
                    player.jump(5);
                } else {
                    player.fall(5);
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(game.getImage, game.getPositionX, game.getPositionY, canvas.width, canvas.height);
                context.drawImage(player.getImage, player.getPositionX, player.getPositionY, 80, 140);
            }
            requestAnimationFrame(mainLoop);
        }
    }, 1000 / 120);
}

function stop() {
    if (interval !== null) {
        clearTimeout(interval);
        interval = null;
    }
}

initialImage();
mainLoop();

