class tree{
    //constructor,  this.
    constructor(x,y,w,h){        
        var tree_options = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x,y,w,h, tree_options)
          World.add(myWorld,this.body)
          this.width = w
          this.height = h
          this.image = loadImage("images/tree.png")
          
    }

    display(){
        push()
        imageMode (CENTER)
        image(this.image,this.body.position.x, this.body.position.y, this.width+200, this.height+150)
        pop()
    }

}