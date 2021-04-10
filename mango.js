class mango{
    //constructor,  this.
    constructor(x,y,r){        
        var mango_options = {
            isStatic:true
          }
          this.body = Bodies.circle(x,y,r, mango_options)
          Matter.Body.setDensity(this.body, 2)
          World.add(myWorld,this.body)
          this.radius = r
          this.image=loadImage("images/mango.png")
    }

    display(){
        push()
        imageMode (CENTER)
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius)
    
        pop()
    }

}