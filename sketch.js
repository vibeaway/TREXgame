var ground, groundimage
var invisibleground
var trex ,trex_running;
function preload(){
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage = loadImage("ground2.png")
}

function setup(){
    createCanvas(600,200)
    
    //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

  ground = createSprite(200,175,400,10)
  ground.velocityX = -4
  ground.addImage(groundimage)
invisibleground = createSprite(200, 180, 400, 10)
invisibleground.visible = false
  
}

function draw(){
    background(220)
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5
  if(ground.x<30){
    ground.x = 200   
  }


  trex.collide(invisibleground);
    drawSprites()
  

}
