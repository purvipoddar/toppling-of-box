const Engine  = Matter.Engine;
const World  = Matter.World;
const Bodies  = Matter.Bodies;

var myEngine,myWorld;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

box1 = new Box(200,100,50,50);
box2 = new Box(220,20,50,80);
ground = new Ground(200,380,400,20);
}

function draw() {
  background(220);  
  Engine.update(myEngine);
  box1.display();
  box2.display();
  ground.display();
}