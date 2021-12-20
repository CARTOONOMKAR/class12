var trex ,trex_running;

function preload()
{
  trex_running=loadAmimation('trex1.png','trex3.png','trex4.png');


}
function setup(){
  createCanvas(600,200)
  
  //creat a trex sprite
  trex = creatsprite(50,160,20,50);
  trex.addAnimation("running", trex_running);


 //adding scale and position to trex
 trex.scale = 0.5;
 trex.x = 50;

 //creat ground sprite
 ground = creatsprite(200,180,400,20);
}

function draw(){
  background("white");

  //jump when space ket is pressed
   if(keyDown("space"));
   {
     trex.velocity = trex.velocity + 0.5;
   }
   trex.velocity = trex.velocity + 0,5;

   //stop trex from falling down
   trex.collide(edges[3]);
  drawSprites();

}
