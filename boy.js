class boy{
    //constructor,  this.
    constructor(x,y,w,h){        
        var boy_options = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x,y,w,h, boy_options)
          World.add(myWorld,this.body)
          this.width = w
          this.height = h
          this.image=loadImage("images/boy.png")
    }

    display(){
        push()
        imageMode (CENTER)
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height)
        pop()
    }

}