var trex ,trex_running;
var ground, groundImage,invisibleGround;
function preload()
{
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  groundImage = loadImage("ground2.png");

}
function setup(){
  createCanvas(600,200)
  
  //creat a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
 //adding scale and position to trex
 trex.scale = 0.5;


 //creat ground sprite
 ground = createSprite(200,180,400,20);
 ground.addImage("ground", groundImage);
 ground.velocityX = -4;
 ground.x = ground.width/2
 
 invisibleGround=createSprite(200,190,400,10);
 invisibleGround.visible=false;
}

function draw(){
  background("white")
  console.log(trex.y);
  //jump when space ket is pressed
   if(keyDown("space") && trex.y>=100)
   {
     trex.y = trex.y - 5;
   }
   trex.y = trex.y + 0.5;
   if(ground.x<0){
     ground.x= ground.width/2
   }
   //stop trex from falling down
   trex.collide(invisibleGround);
  drawSprites();

}
