var bgImg;
var cat , catImg1,catImg2,catImg3;
var mouse , mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(270,600);
    mouse.addAnimation("mousegift",mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.widht - mouse.widht)/2){
        cat.velocityX=0;
        cat.addAnimation("catstop",catImg3);
        cat.changeAnimation("catstop");
        cat.x = 300;

        mouse.addAnimation("mousesmile",mouseImg3);
        mouse.changeAnimation("mousesmile");
    }

    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
     }
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catwalking",catImg2);
     cat.changeAnimation("catwalking");
    }


}
