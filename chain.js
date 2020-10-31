class chain{
 constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.chain=Constraint.create(options)
World.add(world,this.chain)
 }

 display(){
     var bodyA=this.chain.bodyA.position
     var pointB=this.chain.pointB

     strokeWeight(4)
    line(bodyA.x,bodyA.y,pointB.x,pointB.y)

 }
}