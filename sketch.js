const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var drops; 
var maxDrops = 100;
var BoyWithUmbrella;

function preload()
{
	
}

function setup() {
    createCanvas(600,600);
    
	engine = Engine.create();
	world = engine.world;

	BoyWithUmbrella=new Umbrella(0,300,10,10);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(180);

  for(var i=0;i<maxDrops;i++){
      drops = new Drop(random(0,400), random(0,400),10);
  }

  BoyWithUmbrella.display();
  drops.display();
  drops.update();

}