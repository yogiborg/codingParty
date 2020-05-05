function preload() {
  rubber= loadImage("rubber.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  frameRate(35);
}

function draw() {
  blendMode(BLEND);
  background(15, 126, 102);
  //noStroke();
  //blendMode(MULTIPLY);
  noStroke();
  translate(100, 150);
  fill(200, 88, 40);
  //fill(0,150,240);
  drawLiq(18, 50, 20, 100);
  translate(500, 10);
  //fill(240,240,0);
  drawLiqq(15, 60, 25, 120);
  translate(50, 450);
  //fill(240,0,240);
  drawLiqqq(15, 40,30 , 150);
  translate(-150, 10);
  //  fill(240,0,240);
  drawLiqqqq(11, 40, 18, 200);
  translate(-500, 100);
  //fill(240,0,240);
  drawLiqqqqq(10, 35, 20, 140);
}


function drawLiq(vNnum, nm, sm, fcm) {
  push();
  rotate(frameCount / fcm);
  let dr = TWO_PI / vNnum;
  beginShape();
  for (let i = 0; i < vNnum + 3; i++) {
    let ind = i % vNnum;
    let rad = dr * ind;
    let r = height * 0.20 + noise(frameCount / nm + ind) * height * 0.1 + sin(frameCount / sm + ind) * height * 0.03;
    curveVertex(cos(rad) * r, sin(rad) * r);
  }
  endShape();
  pop();
}

function drawLiqq(vNnum, nm, sm, fcm) {
  push();
  rotate(frameCount / fcm);
  let dr = TWO_PI / vNnum;
  beginShape();
  for (let i = 0; i < vNnum + 3; i++) {
    let ind = i % vNnum;
    let rad = dr * ind;
    let r = 700 * 0.25 + noise(frameCount / nm + ind) * height * 0.12 + sin(frameCount / sm + ind) * height * 0.10;
    curveVertex(cos(rad) * r, sin(rad) * r);
  }
  endShape();
  pop();
} 

function drawLiqqq(vNnum, nm, sm, fcm) {
  push();
  rotate(frameCount / fcm);
  let dr = TWO_PI / vNnum;
  beginShape();
  for (let i = 0; i < vNnum + 3; i++) {
    let ind = i % vNnum;
    let rad = dr * ind;
    let r = height * 0.15 + noise(frameCount / nm + ind) * height * 0.10 + cos(frameCount / sm + ind) * height * 0.05;
    curveVertex(cos(rad) * r, sin(rad) * r);
  }
  endShape();
  pop();
} 

function drawLiqqqq(vNnum, nm, sm, fcm) {
  push();
  rotate(frameCount / fcm);
  let dr = TWO_PI / vNnum;
  beginShape();
  for (let i = 0; i < vNnum + 3; i++) {
    let ind = i % vNnum;
    let rad = dr * ind;
    let r = height * 0.28 + noise(frameCount / nm + ind) * 400 * 0.12 + sin(frameCount / sm + ind) * height * 0.10;
    curveVertex(cos(rad) * r, sin(rad) * r);
  }
  endShape();
  pop();
} 

function drawLiqqqqq(vNnum, nm, sm, fcm) {
  push();
  rotate(frameCount / fcm);
  let dr = TWO_PI / vNnum;
  beginShape();
  for (let i = 0; i < vNnum + 3; i++) {
    let ind = i % vNnum;
    let rad = dr * ind;
    let r = height * 0.27 + noise(frameCount / nm + ind) * 400* 0.14 + sin(frameCount / sm + ind) * height * 0.09;
    curveVertex(cos(rad) * r, sin(rad) * r);
  }
  endShape();
  pop();
  
   image(rubber, 400, -300);
} 

//(193, 88, 40)
//(15, 126, 102)