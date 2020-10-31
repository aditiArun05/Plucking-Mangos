
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground1,tree1,boy1,mango1,chain1,mango2,mango3,mango4
var chain2,chain3,chain4,stone1
function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1=new ground(400,650,800,20)
tree1= new tree(650,505,100,190)
boy1=new boy(300,610,80,120)
mango1=new mango(650,480,30,30)
chain1=new chain (mango1.body,{x:650,y:480})  
mango2=new mango (655,480,30,30)
mango3=new mango (650,484,30,30)
mango4=new mango (656,482,30,30)
chain2=new chain (mango2.body,{x:655,y:480})
chain3=new chain (mango3.body,{x:650,y:484})
chain4=new chain (mango4.body,{x:656,y:482})
stone1=new stone (299,620,50,50)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  tree1.display()
  boy1.display()
  mango1.display()
  chain1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  chain2.display()
  chain3.display()
  chain4.display()
  stone1.display()
  drawSprites();
 
}



