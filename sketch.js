var r,g,b;


function setup(){
  createCanvas(1200,400);
}

function draw(){
  r = map(mouseX,0,1200,0,255);
  g = map(mouseX,0,1200,10,200);
  b = map(mouseX,0,1200,60,250);
  background(r,g,b);
  fill(255);
  ellipse(mouseX,100,50,50);
}