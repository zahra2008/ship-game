var ship, sea_running, edges;
var groundImage;
var ground;



function preload(){
loadImage(sea.png);
loadAnimation(ship1.png, ship2.png, ship3.png, ship4.png);





}

function setup(){
  createCanvas(400,400);function draw(){
    //set background color 
  
    
    //logging the y position of the sea
    console.log(sea.y)
    
    //jump when space key is pressed
    if(keyDown("space")){
      sea.velocityY = -10;
    }
    
    sea.velocityY = sea.velocityY + 0.5;
    
    //stop ship from falling down
    ship1, ship2, ship3, ship4.collide(ground);
  
  if(ground.x<0){
   ground.x=300;
  
  }
  
  
  
  
  
    drawSprites();
  
  
  
  
  
  
}

function draw() {
if(sea.x<0){
sea.x=sea.width/2;

}
 
}