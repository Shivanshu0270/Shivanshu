var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = "orange";
}

function draw()
{
 background("red");
 drawSprites();
 fill('black');
 text("Click anywhere to move the box",100,200);
 if(mouseIsPressed){
     box.velocityY = 5;
     box.velocityX = 5;
 }
}


