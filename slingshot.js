class slingShot{
    constructor(body,point){
        var  options = {
            bodyA: body,
            pointB: point,
            length: 10,
            stiffness: 0.01
          }
        this.slingShot = Constraint.create(options)
        World.add(myWorld, this.slingShot)

    }
    display(){
       
        if(this.slingShot.bodyA !== null){
            var pos1 = this.slingShot.bodyA.position
            var pos2 =  this.slingShot.pointB
            push()
            strokeWeight(7)
            line(pos1.x, pos1.y, pos2.x, pos2.y)
            pop()
        }      

    }

    fly(){
        this.slingShot.bodyA = null
    }
    
}