function setup() {
  createCanvas(1000, 1000);
  background("black");
}

function draw() {
fill("white");
stroke("black");
  if (mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
