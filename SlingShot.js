class SlingShot{
    constructor(bodyX, pointB){
        var options = {
            bodyA: bodyX,
            pointB: pointB,
            length: 20,
            stiffness: 0.05
        }
this.pointB=pointB
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)
    }


    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA)
        {

        

push();

            
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB

        stroke("red")
        strokeWeight(10)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
 pop();       
    }
}
}

