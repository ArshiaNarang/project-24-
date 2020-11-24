const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustibin;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new Paper(200,200,20);

	dustbinbody1 = createSprite(250,580,30,150);
	dustbinbody1.shapeColor="red";

	dustbinbody2 = createSprite(400,640,300,30);
	dustbinbody2.shapeColor="red";

	dustbinbody3 = createSprite(550,580,30,150);
	dustbinbody3.shapeColor="red";


	ground = new Ground(400,680,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
 paper1.display()
 ground.display

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


