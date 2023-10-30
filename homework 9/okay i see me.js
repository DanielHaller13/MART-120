function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);

    fill(255, 204, 0);
    circle(200, 100, 75);

    rect(175, 175, 50, 100);

    line(150, 175, 175, 200);
    line(250, 175, 225, 200);

    triangle(175, 275, 200, 225, 225, 275);
    triangle(175, 275, 200, 225, 225, 275);

    point(150, 175);
    point(250, 175);

    textSize(20);
    textAlign(CENTER);
    text("My Self Portrait", 200, 30);

    textSize(14);
    text("Daniel Haller", 200, 390);
  }
  