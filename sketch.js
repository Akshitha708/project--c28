
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	tree = new tree(600,400,50,400)
    ground = new ground(400,650,800,50)
	mango1 = new mango(650,200,20)
	mango2 = new mango(600,200,20)
    mango3 = new mango(600,300,20)
    mango4 = new mango(550,350,20)
	mango5 = new mango(500,300,20)
	mango6 = new mango(700,300,20)
	mango7 = new mango(625,250,20)
	mango8 = new mango(650,350,20)
	boy = new boy(200,570,100,300)
	stone = new stone(200,500,20)
	sling = new slingShot(stone.body,{x:180,y:500})
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  boy.display()
  stone.display()
  sling.display()
  

  detectcollison(stone,mango1)
  detectcollison(stone,mango2)
  detectcollison(stone,mango3)
  detectcollison(stone,mango4)
  detectcollison(stone,mango5)
  detectcollison(stone,mango6)
  detectcollison(stone,mango7)
  detectcollison(stone,mango8)

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly()	
}

function detectcollison(s,mango){
mangoBodyPosition= mango.body.position
stoneBodyPosition=s.body.position
//console.log(mango)
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=mango.body.r+s.body.r)
 {
   Matter.Body.setStatic(mango.body,false);
 }
}

