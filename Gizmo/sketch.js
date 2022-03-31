let r = 1;
let g = 1;
let b = 1;

let vp = 1;
let hp = 1;

function setup() {
  createCanvas(400, 400)
  background(0);
  frameRate(100);
  noStroke();
  rectMode(CENTER)
}

function draw() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  fill(r, g, b);

  rect(40 * hp, 40 * vp, 80, 80);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);

  rect(40 * hp, 40 * vp, 70, 70);

  r = random(150, 255);
  g = random(150, 255);
  b = random(150, 255);
  fill(r, g, b);

  rect(40 * hp, 40 * vp, 60, 60);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);

  rect(40 * hp, 40 * vp, 40, 40);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);

  circle(40 * hp, 40 * vp, 20);

  hp = hp + 2;
  if(hp > 30) {
    vp = vp + 2;
    hp = 1;
  };
}
