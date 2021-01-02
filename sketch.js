var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 50);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor= "green";
 movingRect.debug = "true";
 fixedRect.debug = "true";
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "green";
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor = "green";
 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  
if(isTouching(gameObject4,movingRect)){
  movingRect.shapeColor = "red";
  gameObject4.shapeColor = "red";
}else {
  movingRect.shapeColor = "green";
  gameObject4.shapeColor = "green"
}

  drawSprites();
}

