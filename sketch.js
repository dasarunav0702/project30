const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){

}

function setup() {
  createCanvas(800,700);

  engine= Engine.create();
  world= engine.world;
 
  ground= new Ground(400,700,800,20); 

  base1= new Base(330,500,280,20);
  base2= new Base(600,350,240,20);

  block1= new Block(520,315,40,50);
  block2= new Block(560,315,40,50);
  block3= new Block(600,315,40,50);
  block4= new Block(640,315,40,50);
  block5= new Block(680,315,40,50);

  block6= new Block1(540,265,40,50);
  block7= new Block1(580,265,40,50);
  block8= new Block1(620,265,40,50);
  block9= new Block1(660,265,40,50);

  block10= new Block2(560,215,40,50);
  block11= new Block2(600,215,40,50);
  block12= new Block2(640,215,40,50);
 
  block13= new Block2(600,165,40,50);

  block14= new Block(230,465,40,50);
  block15= new Block(270,465,40,50);
  block16= new Block(310,465,40,50);
  block17= new Block(350,465,40,50);
  block18= new Block(390,465,40,50);
  block19= new Block(430,465,40,50);

  block20= new Block1(270,415,40,50);
  block21= new Block1(310,415,40,50);
  block22= new Block1(350,415,40,50);
  block23= new Block1(390,415,40,50);

  block24= new Block2(290,365,40,50);
  block25= new Block2(330,365,40,50);
  block26= new Block2(370,365,40,50);
 
  block27= new Block2(330,315,40,50);

  object1= new Polygon(150,300,50);
  chain= new Chain(object1.body,{x:100,y:300});

  Engine.run(engine);
}

function draw() {
  background("white");  
  drawSprites();
  ground.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  object1.display();
  chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(object1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}
function keyPressed(){
    if (keyCode===32){
    
      chain.attach(object1.body);
    }
}
