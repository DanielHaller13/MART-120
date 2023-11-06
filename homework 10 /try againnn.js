let headX = 200;
let headDirectionX = 1;
let headY = 100;
let headDirectionY = 1;

let bodyX = 175;
let bodyDirectionX = 2;

let shape1X = 150;
let shape1DirectionX = 2;

let shape2Y = 200;
let shape2DirectionY = 2;

let shape3Y = 275;
let shape3DirectionY = 3;

let titleSize = 20;
let titleSizeDirection = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Head
  fill(255, 204, 0);
  circle(headX, headY, 75);
  headX += headDirectionX;
  headY += headDirectionY;

  if (headX >= 325 || headX <= 75) {
    headDirectionX *= -1;
  }
  if (headY >= 250 || headY <= 50) {
    headDirectionY *= -1;
  }

  // Body
  fill(10, 24, 120);
  rect(bodyX, 175, 50, 100);
  bodyX += bodyDirectionX;

  if (bodyX >= 250 || bodyX <= 100) {
    bodyDirectionX *= -1;
  }

  // Shape 1 (Moving along the X-axis)
  fill(0, 255, 0);
  ellipse(shape1X, 175, 30, 30);
  shape1X += shape1DirectionX;

  if (shape1X >= 250 || shape1X <= 150) {
    shape1DirectionX *= -1;
  }

  // Shape 2 (Moving along the Y-axis)
  fill(0, 0, 255);
  rect(250, shape2Y, 30, 30);
  shape2Y += shape2DirectionY;

  if (shape2Y >= 250 || shape2Y <= 100) {
    shape2DirectionY *= -1;
  }

  // Shape 3 (Moving up and down along the Y-axis)
  fill(255, 0, 0);
  triangle(200, shape3Y, 175, 275, 225, 275);
  shape3Y += shape3DirectionY;

  if (shape3Y >= 325 || shape3Y <= 175) {
    shape3DirectionY *= -1;
  }

  // Title Animation
  fill(0);
  textSize(titleSize);
  textAlign(CENTER);
  text("My Self Portrait", 200, 30);
  titleSize += titleSizeDirection;

  if (titleSize >= 26 || titleSize <= 20) {
    titleSizeDirection *= -1;
  }

  textSize(14);
  text("Daniel Haller", 200, 390);
}
