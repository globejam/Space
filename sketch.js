var issImage,bgImage,spacecraft1Image,
spacecraft2Image,spacecraft3Image,
spacecraft4Image
var iss,spacecraft,hasDocked=false
var resetButton
var startSound

function preload(){
  issImage=loadImage("iss.png")
  spacecraft1Image=loadImage("spacecraft1.png")
  spacecraft2Image=loadImage("spacecraft2.png")
  spacecraft3Image=loadImage("spacecraft3.png")
  spacecraft4Image=loadImage("spacecraft4.png")
  bgImage=loadImage("spacebg.jpg")
  startSound=loadSound("My Song 3.wav")
}
function setup() {
  createCanvas(800,400);
  startSound.play();
 iss= createSprite(400, 200, 50, 50);
  iss.addImage(issImage)
  iss.scale=0.7

  spacecraft=createSprite(200,280)
  spacecraft.addImage(spacecraft1Image)
  spacecraft.scale=0.2
  resetButton=createButton("Reset")
 resetButton.class("resetButton");
 resetButton.position(660,10);
 resetButton.style('background-color', "red");
 resetButton.style('font-size', '40px');
  resetButton.mousePressed(reload);
}

function draw() {
  
  background(bgImage);
  console.log(mouseY)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+Math.round(random(-1,1))

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Image)
spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4Image)
spacecraft.x=spacecraft.x+1
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft1Image)
spacecraft.y=spacecraft.y-1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2Image)
spacecraft.y=spacecraft.y+1
    }
  }

  if(spacecraft.x<=354 && spacecraft.y<=226){
    hasDocked=true
    stroke (0)
    fill ("yellow")
    textSize(20)
    text ("DOCKING SUCCESSFUL",400,350)
    
    
  }

  drawSprites();
}

function reload(){
  location.reload();
}