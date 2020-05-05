//let roundy
//function preload() {
//  roundy = loadFont('Comfortaa-Regular.ttf');
//}
var prevSec;
var millisRolloverTime;

function setup() {
  createCanvas(400, 400);
  millisRolloverTime = 0;
}

function draw() {
  background(40);
  var h = hour();
  var min = minute();
  var s = second();
  var d = day();
  var m = month();
  var y = year();
  if (prevSec != s) {
    millisRolloverTime = millis();
  }
  prevSec = s;
  var mils = floor(millis() - millisRolloverTime);


  var mh = map(h % 12, 0, 12, 0, height);
  var mm = map(min, 0, 60, 0, height);
  var ms = map(s, 0, 60, 0, height);
  var days = map(d, 0, 31, 0, 300);
  var months = map(m, 0, 12, 0, 300);
  var years = map(y, 0, 2020, 0, 300);

  var secondsWithFraction = s + (mils / 1000.0);
  var secondsWithNoFraction = s;
  var secondChunky = map(secondsWithNoFraction, 0, 60, 5, 395);
  var secondSmooth = map(secondsWithFraction, 0, 60, 5, 395);
  //strokeWeight(16);
  //stroke(250);
  //line(0,392, 100, 392);

  strokeWeight(14);
  //stroke(80);
  stroke(170);
  push()
  line(335, 0, 335, days);

  strokeWeight(14);
  //stroke(80);
  stroke(170);
  push()
  line(355, 0, 355, months);

  strokeWeight(14);
  // stroke(80);
  stroke(170);
  push()
  line(376, 0, 376, years);

  stroke(0, 174, 239, 170);
  //stroke(200, 170);
  strokeWeight(28);
  line(0, mh, width, mh);

  stroke(255, 242, 0, 170);
  //stroke(150, 170);
  strokeWeight(20);
  line(0, mm, width, mm);

  stroke(236, 0, 140, 180);
  // stroke(255, 170);
  strokeWeight(16)
  line(0, secondChunky, 150, secondChunky);

  stroke(255);
  strokeWeight(2);
  line(0, secondSmooth, 50, secondSmooth);

  noStroke();
  fill(150);
  textSize(15);
  //  textFont('roundy');
  //translate(width / 2, height / 2)
  rotate(PI / 2.0);
  text("day: " + d, 318, -331);
  text("month: " + m, 318, -351)
  text("year: " + y, 318, -372);
  // text("day: " + d, 327, 350);
  //text("month: " + m, 327, 365);
  //text("year: " + y, 327, 380);

  //noStroke();
  // fill(250);
  // textSize(12); 
  // translate(239, 200);
  // rotate(-90);
  // text(+ m, 100, 100);

  // noStroke();
  // fill(250);
  // textSize(12); 
  // translate(309,200)
  // rotate(-90)
  // text(+ d, 50, 50);

  // translate(331,200);
  // rotate(-90);
  // text(+ y, 50, 50);

}