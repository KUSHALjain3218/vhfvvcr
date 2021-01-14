const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,canvas,backgroundImg;
var score=0;

function preload() {
  //backgroundImg = loadImage("Image0121.png");
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(800,300,400,10);
b1=new Box(800,280,40,80);
b2=new Box(800,280-40,40,80);
b3=new Box(800-80,280,40,80);
b4=new Box(800,280-40,40,80);
b5=new Box(800,280-40,40,80);
b6=new Box(800,280-40,40,80);
b7=new Box(800,280,40,80);
b8=new Box(800,280-40,40,80);
b9=new Box(800-80,280,40,80);
shooter=new Shooter(10,10,50);
Sling = new sling(shooter.body,{x:200,y:100});
    
}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
}
    
  
Engine.update(engine);

    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    shooter.display();

    Sling.display();

  drawSprites();  
  stroke("White");
  strokeWeight(1);
  textSize(30);
  
  text("Score:"+score,1000,50);  
}

function mouseDragged() {
  console.log("hello");
  Matter.Body.setPosition(shooter.body,{x: mouseX , y: mouseY})

}
function mouseReleased() {

  Sling.fly();


}
function keyPressed(){
  if(keyCode===32){
    console.log("event");
 Sling.attach(shooter.body);
 
 
 
  }
 
 
 
 }
 
 async function getBackgroundImg(){

  var response = await fetch(" https://worldtimeapi.org/api/timezone/Asia/Kolkata "); 
  var responseJSON = await response.json();
  var responseDatetime = responseJSON.datetime;
  var responsehour=responseDatetime.slice(11,13);
  console.log(responsehour);
  
  if(responsehour >= 05 &&  responsehour<= 20){
      bg = "Image0120.png";
  }
  else{
      bg = "Image0121.png";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  
  }