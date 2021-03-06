class Player { 
    constructor() {
        this.gravity = 0.3
        this.velocity = 0
        this.x = 100
        this.y = height - 300
        this.width = 170
        this.height = 230
        this.isHeJumping = false
        this.alive = true
        this.gameOver = false
        this.cryingIsPlaying = false
        this.something = true
        this.nuggets = 0
        this.boxes =4
        this.shoots = []
        this.points = 0
        this.shooting =0
    }
    draw() {
        //in every draw I check if Eric cartman is alive or dead. If he is dead then we will add the explosion gif
        if(this.alive){
            this.velocity += this.gravity
            this.y += this.velocity
            if(this.y >= height - 300){
                this.y = height - 300
            }
            if(this.y === height - 300){
                image(game.playerImage[0], this.x, this.y, this.width, this.height)
                this.isHeJumping = false
            }
            if(this.velocity !==0 && this.isHeJumping){
                image(game.playerImage[1], this.x, this.y, this.width, this.height)
            }
           game.checkIfAlive()
        }
        else {
            if(!this.gameOver){
                image(game.playerImage[2], this.x, this.y - 200, this.width + 200 , this.height + 200)
                setInterval(() => {
                    this.gameOver = game.giveAgameOver()
                }, 1350);
            }
            if(this.gameOver===true && this.something){
                image(game.playerImage[3], this.x+70, this.y -40, this.width+20, this.height)
                this.y-= 3
                setInterval(() => {
                    this.something=false
                }, 11640);     
            }
        }
    }
    jump() {
        this.velocity = -12.5
        this.isHeJumping = true
    }
    shoot() {
        if(game.obstacle.length>this.shooting && game.player.alive){
        game.player.boxes--
        this.shooting++
        this.shoots.push(new Shoots(game.coins[1].image)) 
        }
    }
}