const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var ball1, ball2, ball3 , ball4;
var groun;
var slings;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(400,300,30,20);
	ball2 = new ball(450,300,30,20);
	ball3 = new ball(300,300,30,20);
	ball4 = new ball(350,300,30,20);
	groun = new ground(330,100,200,20);
	slings = new Slingshot(ball1.body,{x:350 , y:100});
	slings1 = new Slingshot(ball2.body,{x:400 , y:100});
	slings2 = new Slingshot(ball3.body,{x:260 , y:100});
	slings3 = new Slingshot(ball4.body,{x:300 , y:100});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  groun.display();
  slings.display();
  slings1.display();
  slings2.display();
  slings3.display();


ball2.body.y = ball2.body.y + 7;
  keyPressed();

  
  drawSprites();
 
}
function keyPressed() { if (keyCode === UP_ARROW)
	
	{ Matter.Body.applyForce(ball2.body,ball2.body.position,{x:50,y:-50}); } }