var movingrect , fixedrect ; 


function setup() {
  createCanvas(800,400);

  movingrect = createSprite(300,200,40,60);
movingrect.shapeColor = "green"
movingrect.debug = true;

fixedrect = createSprite(200,200,40,60);
fixedrect.shapeColor = "green"
fixedrect.debug = true;
}

function draw() {
  background(0);  

movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if (fixedrect.width/2 + movingrect.width/2 > movingrect.x - fixedrect.x
  && fixedrect.width/2 + movingrect.width/2 > fixedrect.x - movingrect.x
  && fixedrect.width/2 + movingrect.width/2 > fixedrect.y - movingrect.y
  && fixedrect.width/2 + movingrect.width/2 > movingrect.y - fixedrect.y) { 
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
  

}
else {
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}
  drawSprites();
}