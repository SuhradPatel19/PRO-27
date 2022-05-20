
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;
var boxes = [];
var circle = [];
var gamestate = "start"
var r, g, b

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic: true
  };
  ground = Bodies.rectangle(100, 300, 400, 20, option);
  World.add(world, ground);
  //box1 = new Box(200,100,50,50);



}
function mousePressed() {
  var number = Math.round(random(1, 2))
  switch (number) {
    case 1: circle.push(
      new Circle(mouseX, mouseY, 20)
    )
      break;

    case 2: boxes.push(
      new Box(mouseX, mouseY, 50, 50)
    )

  }
  colour()

  gamestate = "play"
}



function draw() {

  background(51);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  for (var i = 0; i < circle.length; i++) {
    circle[i].show();
  }

  if (gamestate === "start") {
    fill("white")
    text("Mark went to the construction site with his dad where he saw a \n crane being used to arrange blocks one above the other.\n Being inspired, he decides to build a project to create building blocks.\n He has used a mouse pressed event rather than a crane and added an\n Object-Oriented Programming concept to create the number of blocks.", 10, 200)
  }

}


function colour() {

  r = random(0, 255)
  g = random(0, 255)
  b = random(0, 255)

}

