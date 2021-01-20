
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var ground;
var paper;
var dustbin;


function preload()
{

	
}

function setup() {
	createCanvas(1600, 700);

	


	engine = Engine.create();
	world = engine.world;

	
	rect1 = new Dustbin(870,400,30,300);
	rect2 = new Dustbin(1015,550,300,30);
	rect3 = new Dustbin(1150,400,30,300);

	ground = new Ground(750,580,1500,20);

	dustbin =  new Gdustbin(1015,400);
	

	paper = new Ball(10,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
	background("white");
	
	console.log(paper.y);

	

  rect1.display();
  rect2.display();
  rect3.display();

 

  ground.display();

  paper.display();

  dustbin.display();

  

  }

  function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:610,y:-610})
	}
  }

	


