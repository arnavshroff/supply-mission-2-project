var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2,690, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 690, width, 20 , {isStatic:true} );
	World.add(world, ground);

	box1 = new Box (275,635,20,100,"red");
	box2 = new Box (480,635,20,100,"red");
	box3 = new Box (385,675,200,20,"red");
	

	 box1 = new Box(500,635,20,100,"red");
	 box2 = new Box(295,635,20,100,"red");
	 box3 = new Box(400,675,200,20,"red");

	Engine.run(engine);
  
}


function draw() {
background("black")

  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	drawSprites();

  if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
	}
	box1.display();
	box2.display();
	box3.display();
	
	Engine.update(engine);
 
}





