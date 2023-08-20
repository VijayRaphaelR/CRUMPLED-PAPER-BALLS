
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftW, rightW;

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
    }

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball);
    
	groundObj = new ground(width/2,670,width,20);
	leftW = new ground(1100,670,20,120);
	rightW = new ground(1100,670,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftW.display();
  rightW.display();
  
  drawSprites();
 
}

function keyPressed(){

If(keycode === UP_ARROW)
{
   Matter.body.applyForce(ball, {x:0,y:0},{x:0,y:0.5})
}

}

