
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	S= new stone(120,300,20,20)
	B= new boy(100,440,110,180)
	T= new tree(600,300,320,390)
	M1= new mango(600,275,20,30)
	M2= new mango(500,300,20,30)
	M3= new mango(525,250,20,30)
	M4= new mango(520,220,20,30)
	M5= new mango(600,275,20,30)
	M6= new mango(500,260,20,30)
	M7= new mango(525,250,20,30)
	M8= new mango(610,200,20,30)
	M9= new mango(625,250,20,30)
	M10= new mango(690,200,20,30)
	C=new Sling(S.body,{x:80,y:420})
	detectCollision(M2,S);
	detectCollision(M3,S);
	detectCollision(M4,S);
	detectCollision(M5,S);
	detectCollision(M6,S);
	detectCollision(M7,S);
	detectCollision(M8,S);
	detectCollision(M9,S);
	detectCollision(M10,S);
	detectCollision(M1,S)
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  T.display();
  B.display();
  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  M7.display();
  M8.display();
  M9.display();
  M10.display();
  C.display();
  S.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(S.body,{x:mouseX,y:mouseY}) 
	}
	function mouseReleased(){
		C.Fly()
	}
function detectCollision(lS,lM){
	mangoBody=lM.body.position
	stoneBody=lS.body.position
	var distance=dist(mangoBody.x,mangoBody.y,stoneBody.x,stoneBody.y)
	if(distance<=mangoBody.r+stoneBody.r){
	matter.body.setStatic(mangoBody.body,false);
	}
}