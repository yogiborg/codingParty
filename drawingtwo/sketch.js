function setup() { 
  createCanvas(800, 800);
  //background(0);
  
} 

function draw() { 

 
  fill(mouseY,210,mouseX, 210);
  noStroke();
  ellipse(mouseX,mouseY,100, 100);
  rect(mouseX,mouseY,50, 100);
  
}

function mouseDragged(){
fill(255,140,0,20);
rect(mouseX, 2, 30, mouseY, 30, 2);
}

function mousePressed(){
  background(0, 0, 0);
  background(250, 50, 50);
  background(179, 255, 199);
}

function keyPressed() {
  if (keyCode === SHIFT) {
    fill(255);
    rect(0,0,800,800);
    ellipse(0,0, 500, 500);
    
  
  } 
  
  
}
