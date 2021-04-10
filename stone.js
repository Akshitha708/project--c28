class stone{
    //constructor,  this.
    constructor(x,y,r){        
        var stone_options = {
            isStatic:false
          }
          this.body = Bodies.circle(x,y,r, stone_options)
         // Matter.Body.setDensity(this.body, 2)
          World.add(myWorld,this.body)
          this.radius = r
          this.image = loadImage("images/stone.png")
    }

    display(){
        push()
        imageMode (CENTER)
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius)
        pop()
    }

}