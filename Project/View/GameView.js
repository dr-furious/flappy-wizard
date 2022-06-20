function setTime(timeInGame) {
    let hours = "" + Math.floor(Game.time / 3600);
    let minutes = "" + Math.floor((Game.time % 3600) / 60);
    let seconds = "" + Math.ceil((Game.time % 3600) % 60);
    timeInGame.innerText = hours.padStart(2, "0") + ":" + minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");

}

function setPlayerStat(playerStat, destination) {
    destination.innerText = playerStat;
}

function drawAnimation() {
    //context.drawImage(harryPotter.getStars.getImage, harryPotter.getStars.getPositionX, harryPotter.getStars.getPositionY);
    context.drawImage(harryPotter.getStars.getImage, harryPotter.getStars.getStarsSX, 0, 64,
        64, harryPotter.getPositionX - 20, harryPotter.getPositionY + 80, 32, 32);
}

function drawScene(items, context, player) {
    /**
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.drawImage(backgroundLayer1.getBackgroundOne.getImage, backgroundLayer1.getBackgroundOne.getPositionX, backgroundLayer1.getBackgroundOne.getPositionY);
     context.drawImage(backgroundLayer1.getBackgroundTwo.getImage, backgroundLayer1.getBackgroundTwo.getPositionX, backgroundLayer1.getBackgroundTwo.getPositionY);
     context.drawImage(backgroundLayer2.getBackgroundOne.getImage, backgroundLayer2.getBackgroundOne.getPositionX, backgroundLayer2.getBackgroundOne.getPositionY);
     context.drawImage(backgroundLayer2.getBackgroundTwo.getImage, backgroundLayer2.getBackgroundTwo.getPositionX, backgroundLayer2.getBackgroundTwo.getPositionY);
     context.drawImage(harryPotter.getImage, harryPotter.getPositionX, harryPotter.getPositionY, 80, 140);
     */
    context.clearRect(0, 0, canvas.width, canvas.height);
    items.forEach(item => {
        context.drawImage(item.getImage, item.getPositionX, item.getPositionY, item.getWidth, item.getHeight);
        if (item === player) {
            drawAnimation();
        }
    })
}

function drawHitbox(hitbox, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.rect(hitbox.getPositionX, hitbox.getPositionY, hitbox.getWidth, hitbox.getHeight);
    context.stroke();
    context.closePath();
}


function drawTitleImage(imageActor) {
    context.drawImage(imageActor.getImage, imageActor.getPositionX, imageActor.getPositionY);
}