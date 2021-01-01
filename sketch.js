
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustb1,dustb2,dustb3;
var g;
var Paper;

function setup() {
	createCanvas(1000,300);

	engine = Engine.create();
	world = engine.world;

	dustb1 = new Db(750,255,10,50);
	dustb2 = new Db(800,275,100,10);
	dustb3 = new Db(850,255,10,50);

	g = new Ground(500,290,1000,20);

	Paper = new Pa(120,100,10,10);

	Engine.run(engine);
}

function draw() {
  background("lightblue");
  rectMode(CENTER);
  Engine.update(engine);
  dustb2.display();
  dustb1.display();
  dustb3.display();
  g.display();
  Paper.display();
}
  

function keyPressed(){
  if (keyCode === UP_ARROW) {
    console.log("shubham");
    Matter.Body.applyForce(Paper.body, Paper.body.position, {
      x: 20.5,
      y: -12
    });
}
}

