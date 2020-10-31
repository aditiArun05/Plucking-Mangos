class mango{
    constructor(x,y,radius){
var options={
restitution:0.5
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(world,this.body)
this.image=loadImage("Plucking mangoes/mango.png")
    }
display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,30,30)
}
}