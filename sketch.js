var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(1, 1, 100, 50)
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
movingRect.x = mouseX;
movingRect.y = mouseY;


if (fixedRect.x-movingRect.x < fixedRect.width/2+ movingRect.width/2 && 
  movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
  fixedRect.y-movingRect.y < fixedRect.height/2+ movingRect.height/2 && 
  movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2) 
  {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";

  }
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }



  drawSprites();
}