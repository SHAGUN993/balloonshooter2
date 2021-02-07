var knife,fuit1,alien1,knifeimage,fruit1image,fruit2image,fruit3image,fruit4image,alien1image,alien2image,a,b,fruitGroup,alienGroup,gameoverimage,knifesound,gameoversound
var GAMESTATE = 1
var PLAY =1
var END = 0
var score 

function preload(){
 knifeimage = loadImage("sword.png") 
 fruit1image = loadImage("fruit1.png")
 fruit2image = loadImage("fruit2.png")
 fruit3image = loadImage("fruit3.png")
 fruit4image = loadImage("fruit4.png")
 alien1image = loadAnimation("alien1.png")
 alien2image = loadAnimation("alien2.png")
  gameoverimage = loadImage("gameover.png")
  knifesound = loadSound("knifeSwooshSound.mp3")
  gameoversound = loadSound("gameover.mp3")
}

function setup() {
  createCanvas(600,600)
  
 knife = createSprite(200,200,20,20)
 knife.addImage(knifeimage)
 knife.scale = 0.7;
  knife.x = World.mouseX
  knife.y = World.mouseY

  
  
  fruitGroup = new Group()
  alienGroup = new Group()
  
  
  score = 0
}


function draw(){
  background("lightblue")
 
  
  
  
  if(fruitGroup.isTouching(knife)){
     
     fruitGroup.destroyEach();
     score = score+2
    knifesound.play();
     }
 
     if(alienGroup.isTouching(knife)){
     GAMESTATE = END;
       gameoversound.play();
     }
     
     if( GAMESTATE === END){
       knife.addImage(gameoverimage) 
       knife.scale = 2;
       knife.x = 300;
       knife.y = 300;
       fruitGroup.destroyEach();
       alienGroup.destroyEach();
       alienGroup.velocityX = 0;
       fruitGroup.velocityX = 0;
       
        }
  
  
  
     
  knifel();
  fruitst();
  alienGroupt();
  drawSprites();
    text("Score: "+ score, 540,30);
}


function knifel(){
 if(GAMESTATE=== PLAY){
    a=
  knife.x = World.mouseX
  b=
  knife.y = World.mouseY
  
    
    }
}


 function fruitst(){
   if(GAMESTATE=== PLAY){
   if(World.frameCount%60 === 0){
      fruit1 = createSprite(400,Math.round(random(50,550)),10,10)
      fruit1.scale = 0.2
     fruit1.velocityX = -(10 +score/10)
      r = Math.round(random(1,4))
      if(r === 1){
        fruit1.addImage(fruit1image);
      } else if(r === 2){
        fruit1.addImage(fruit2image);
      }else if (r === 3){
        fruit1.addImage(fruit3image);
      }else{
        fruit1.addImage(fruit4image)
      }
     
     fruit1.setLifetime = 100
     fruitGroup.add(fruit1)
   }
   }
 }

function alienGroupt(){
  if(GAMESTATE === PLAY){
  if(frameCount% 150 === 0){
    alien = createSprite(500,Math.round(random(50,500)),10,10)
    alien.addAnimation("moving",alien1image)
    alien.velocityX = -(8+score/10);
    alien.setLifetime = 50
    
    alienGroup.add(alien)
  }
}
}

