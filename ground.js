class ground{
    //constructor,  this.
    constructor(x,y,w,h){        
        var ground_options = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x,y,w,h, ground_options)
          World.add(myWorld,this.body)
          this.width = w
          this.height = h
          
    }

    display(){
        push()
        rectMode (CENTER)
        fill("brown")
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop()
    }

}