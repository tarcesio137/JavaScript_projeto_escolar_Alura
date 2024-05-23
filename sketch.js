function setup() {
  createCanvas(600, 450);
  background("black");
}

function draw() {
fill("white");
stroke("black");
  if (mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
