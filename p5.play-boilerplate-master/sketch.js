var bg;
var player, playerImage
var enemy, enemyImage
var wallsArray = []
var backgroundSprite

function preload(){
  randomBackground()
  playerImage = loadAnimation("lol/openmouth.png", "lol/closemouth.png")
  enemyImage = loadAnimation("lol2/1.png","lol2/2.png","lol2/3.png")
}

function setup(){
  createCanvas(displayWidth, displayHeight-120);

  backgroundSprite = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  backgroundSprite.x = backgroundSprite.width/2
  backgroundSprite.addImage(bg)
  backgroundSprite.velocityX = -2
  backgroundSprite.scale = 3

  player = createSprite(70, 640, 100, 100)
  player.addAnimation("player", playerImage)
  player.scale = 0.2  
  player.debug = true
  player.setCollider("circle", 0, 0, 80)
  enemy = createSprite(1525,40,100,100)
  enemy.velocityY = -3
  enemy.addAnimation("enemy", enemyImage)
  enemy.scale = 0.2

  
  for(var x = 150;x<displayWidth;x = x+200){
    var wall = createSprite(x, displayHeight/2-125, 10, displayHeight-100)
    wall.shapeColor = "red"
    wallsArray.push(wall)

    var wall1 = createSprite(x+100, displayHeight/2, 10, displayHeight-100)
    wall1.shapeColor = "blue"
    wallsArray.push(wall1)
  }
}

function draw() {
  background("green"); 
  if (backgroundSprite.x<300){
    backgroundSprite.x = backgroundSprite.width/2
  }

  for(i = 0;i<wallsArray.length;i++){
    if(player.isTouching(wallsArray[i])){
      player.x = 70
      player.y = 640
      player.velocityX = 0
      player.velocityY = 0
    }
  }

    var edges = createEdgeSprites()
    player.bounceOff(edges)
    enemy.bounceOff(edges)

  if (keyWentDown(UP_ARROW)){
    player.velocityY = -2
    player.velocityX = 0
  }

  if (keyWentDown(DOWN_ARROW)){
    player.velocityY = 2
    player.velocityX = 0
  }

  if (keyWentDown(LEFT_ARROW)){
    player.velocityY = 0
    player.velocityX = -2
  }

  if (keyWentDown(RIGHT_ARROW)){
    player.velocityY = 0
    player.velocityX = 2
  }

  text(mouseX+" "+mouseY,100,100)

  drawSprites(  );
}

function randomBackground(){
   var rand = Math.round(random(1,3))
   console.log(rand)
   switch(rand){
    case 1:bg = loadImage("lol/1.jpg");
     break;
     case 2:bg = loadImage("lol/2.jpg");
     break;
     case 3:bg = loadImage("lol/3.jpg");
     break;
     default:break; } }