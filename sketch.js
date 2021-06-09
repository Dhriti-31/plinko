var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  // division
  for (var a = 0; a <=width; a = a + 80) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }

  // 1st row of plinko 
  for (var b = 75; b <=width; b=b+50) { 
    plinkos.push(new Plinko(b,75));
  }

  // 2nd row of plinko 
  for (var c = 50; c <=width-10; c=c+50) 
  {
    plinkos.push(new Plinko(c,175));
  }

  // 3rd row of plinko 

  for (var d = 25; d <=width-20; d=d+50) 
  {
    plinkos.push(new Plinko(d,275));
  }

  //4th row of plinko 

  for (var e = 0; e <=width-10; e=e+50) 
  {
    plinkos.push(new Plinko(e,375));
  }

  // particle objects

  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}