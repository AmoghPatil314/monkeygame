
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(100,400,1,1)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;

   
  ground=createSprite(600,450,1200,10);
  ground.velocityX=-10;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;
}


function draw() {
background("white");
  

if (keyDown("space")&& monkey.y>381) {
      monkey.velocityY = -20;
    }
  monkey.velocityY = monkey.velocityY+0.8
  
  
  
  bananaFood();
  Obstacle();
  
  score=Math.ceil(frameCount/frameRate())

  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
}
  monkey.collide(ground);
   stroke("black");
  textSize(20);
  fill("black")
  text("Survival Time:"+score,100,50)
  
drawSprites();
}

function bananaFood() {
if (World.frameCount % 80 === 0) {
  banana=createSprite(600,Math.round(random(120,200)),1,1)
  banana.addImage(bananaImage);
  banana.scale=0.2;
  banana.velocityX=-6;
  banana.lifeTime=100;
  FoodGroup.add(banana);
 }
}

function Obstacle(){
 if (World.frameCount % 200===0){
   obstacle=createSprite(600,400,1,1)
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-10;
   obstacle.scale=0.3
   obstacle.lifeTime=100;
   obstacleGroup.add(obstacle)
 }
  
}
