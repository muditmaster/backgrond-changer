
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("yellow");
  rect (200,200,40,40);
  if (keyIsDown(DOWN_ARROW))
  background("red")
  rect (200,200,40,40);
  if (keyIsDown(UP_ARROW))
  background("blue");
  rect (200,200,40,40);
  if (keyIsDown(RIGHT_ARROW))
  background("purple")
  rect (200,200,40,40);
  if (keyIsDown(LEFT_ARROW))
  background("green")
  rect (200,200,40,40)

}




