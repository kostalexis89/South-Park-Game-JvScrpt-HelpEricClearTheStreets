let game = new Game();

function preload() {
    game.preload()
}
function setup() {
    //1. create Canvas
    createCanvas(width,height)
    game.setup()
}
function draw() {
    game.draw()
}
function keyPressed() {
    if(keyCode===32 && game.player.y === height - 300){
       game.player.jump()
    }
    if(keyCode===81){
        game.backgroundMusic.play()
        
     }
     if((keyCode===13) && game.player.boxes>0){
         game.player.shoot()
     }
     if(keyCode===32 && game.player.gameOver){
         window.location.reload()
     }
}