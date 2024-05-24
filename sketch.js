function setup() {
  createCanvas(1500, 800);
  background("black");
}

function draw() {
fill("white");
stroke("black");
  if (mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
