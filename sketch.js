const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
var engine, world;

var s1, s2, snowman;
var pic, snowmanimg;
var border1, border2, border3, border4;
function preload() {
  pic = loadImage("snow2.jpg");
  snowmanimg = loadImage("snowman.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;
  snowman = createSprite(150, 350, 50, 50);
  snowman.addImage(snowmanimg);
  snowman.scale = 0.1;
  border1 = createSprite(798,200,5,400);
  border1.visibility = false;
  border1.shapeColor = "black";
  border2 = createSprite(2,200,5,400);
  border2.visibility = false;
  border1.shapeColor = "black";
  border1 = createSprite(798,200,5,400);
  border1.visibility = true;
  border1.shapeColor = "black";
  s1 = new Snow(100, 150, 100, 100);
  s2 = new Snow(300, 220, 100, 100);
}

function draw() {
  background(pic);
  Engine.update(engine);
  if(keyDown(UP_ARROW)){
    snowman.y -= 2;
  }  
  else if(keyDown(LEFT_ARROW)){
    snowman.x -= 2;
  }  
  else if(keyDown(RIGHT_ARROW)){
    snowman.x += 2;
  }  
  else if(keyDown(DOWN_ARROW)){
    snowman.y += 2;
  }  
  createEdgeSprites();
  snowman.bounceOff(border1);
  s1.display();
  s2.display();
  drawSprites();
}