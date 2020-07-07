
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var drops; 
var maxDrops = 100;
var BoyWithUmbrella, BoyWithUmbrella_img;

function preload()
{
	// BoyWithUmbrella_img = loadImage("BMU.png");
}

function setup() {
  createCanvas(600,600);
    
	engine = Engine.create();
  world = engine.world;

  BoyWithUmbrella=new Umbrella(500,300,10,10);
  // BoyWithUmbrella.addImage(BoyWithUmbrella_img);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(180);
  
  BoyWithUmbrella.display();
}

function mousePressed(){
  if(mouseIsDown){
    for(var i=0;i<maxDrops;i++){
      drops=new Drop();  
      drops.fall();
      drops.display();
      console.log("neev");
  }
  }
}
