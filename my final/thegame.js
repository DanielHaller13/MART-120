let player;
let obstacles = [];
let finishLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  finishLine = createVector(width - 20, 20);
  createObstacles();
}

function draw() {
  background(220);

  player.update();
  player.display();
  checkCollisions();
  moveObstacles();
  displayObstacles();
  displayFinishLine();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.move(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    player.move(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    player.move(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(1, 0);
  }
}

function keyReleased() {
  // Stop the player when the key is released
  player.move(0, 0);
}

function Player() {
  this.position = createVector(20, height - 20);
  this.speed = 12; // Increased player speed

  this.move = function (xDir, yDir) {
    this.position.x += xDir * this.speed;
    this.position.y += yDir * this.speed;
    this.position.x = constrain(this.position.x, 0, width - 20);
    this.position.y = constrain(this.position.y, 0, height - 20);
  };

  this.display = function () {
    fill(0, 0, 255);
    triangle(
      this.position.x, this.position.y + 20,
      this.position.x, this.position.y,
      this.position.x + 20, this.position.y + 20
    );
  };

  this.update = function () {
    // Additional logic for player update can be added here
  };
}

function createObstacles() {
  for (let i = 0; i < 5; i++) { // Increased the number of obstacles
    obstacles.push(createObstacle());
  }
}

function createObstacle() {
  return {
    position: createVector(random(width), random(height)),
    size: random(30, 50), // Increased obstacle size
    speed: random(2, 4),
    display: function () {
      fill(255, 0, 0);
      ellipse(this.position.x, this.position.y, this.size, this.size);
    },
    move: function () {
      this.position.x += this.speed;
      if (this.position.x > width) {
        this.position.x = 0;
        this.position.y = random(height);
      }
    },
  };
}

function moveObstacles() {
  for (let obstacle of obstacles) {
    obstacle.move();
  }
}

function displayObstacles() {
  for (let obstacle of obstacles) {
    obstacle.display();
    let d = dist(
      player.position.x + 10, player.position.y + 10,
      obstacle.position.x, obstacle.position.y
    );
    if (d < obstacle.size / 2 + 10) {
      // Player collided with obstacle, reset the game
      resetGame();
    }
  }
}

function displayFinishLine() {
  fill(0, 255, 0);
  rect(width - 20, 0, 20, 20);
}

function checkCollisions() {
  if (
    player.position.x + 20 >= finishLine.x &&
    player.position.y <= finishLine.y
  ) {
    // Player reached the finish line, game is finished
    gameFinished();
  }
}

function resetGame() {
  player.position = createVector(20, height - 20);
}

function gameFinished() {
  textSize(32);
  fill(0);
  text('You Win!', width / 2 - 50, height / 2);
}
