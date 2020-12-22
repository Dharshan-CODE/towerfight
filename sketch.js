const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var s1,s2,s3;
var r1,r2,r3,r4,r5;
var g1,g2,g3,g4;
var b1,b2,b3,b4,b5;
var y1,y2,y3,y4,y5;
var back;
var rubber1,polygon1;
var score = 0;

function preload()
{

 
  
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	s1 = new Stand(600,580,1200,10);
	s2 = new Stand(500,380,200,10);
  s3 = new Stand(1000,220,200,10);
 
  //front
  r1 = new red(450,350);
  r2 = new red(480,350);
  r3 = new red(510,350);
  r4 = new red(540,350);
  g1 = new green(470,320);
  g2 = new green(500,320);
  g3 = new green(530,320);
  y1 = new yellow(490,290);
  y2 = new yellow(520,290);
  b1 = new blue(505,260);

//last
  b2 = new blue(960,190);
  b3 = new blue(990,190);
  b4 = new blue(1020,190);
  b5 = new blue(1050,190);
  y3 = new yellow(980,160);
  y4 = new yellow(1010,160);
  y5 = new yellow(1040,160);
  g4 = new green(1000,130);
  g5 = new green(1030,130);
  r5 = new red(1015,100);

  polygon1 = new Hit(50,300,50,50);
  rubber1 = new Sling(polygon1.body,{x:200,y:250});

  Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
 
  s1.display();
  s2.display();
  s3.display();
 
 
//front
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  g1.display();
  g2.display();
  g3.display();
  y1.display();
  y2.display();
  b1.display();

  //last  
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  y3.display();
  y4.display();
  y5.display();
  g4.display();
  g5.display();
  r5.display();
  rubber1.display();
  polygon1.display();

  r1.Score();
  r2.Score();
  r3.Score();
  r4.Score();
  r5.Score();
  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  g1.Score();
  g2.Score();
  g3.Score();
  g4.Score();
  g5.Score();
  y1.Score();
  y2.Score();
  y3.Score();
  y4.Score();
  y5.Score();
  
   drawSprites();

   stroke("black");
   strokeWeight(10);
   textSize(24);
   fill("white");
   text("Drag the Polygon to destroy the Blocks", 290,50.);
   text("Press space to get one extra chance !!!!",670,450);
   text("Score : " + score, 1050, 40);
 
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber1.fly();
}
function keyPressed(){
  if(keyCode === 32){
     rubber1.attach(polygon1.body);
  }
 
 }
 

  







