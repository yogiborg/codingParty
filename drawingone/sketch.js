let value=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(value);
  noStroke();
  ellipse(mouseX, mouseY, 20, 60);
}

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function keyTyped() {
  if (key === 'a') {
    fill(0,0,255);
    rect(mouseX, mouseY, 100,100);
  }
}

function mousePressed() {
  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 100, 80);
}

function mouseDragged(){
fill(0,255,0,180);
textSize(24);
textFont('Arial');
text('+', mouseX, mouseY+40);

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    fill(0);
    rect(0,0,windowWidth, windowHeight);
  } 
}