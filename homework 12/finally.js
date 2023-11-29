document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    document.body.appendChild(canvas);
  
    canvas.width = 800;
    canvas.height = 600;
  
    let player = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: 20,
      height: 20,
      color: 'blue',
      speed: 5
    };
  
    let obstacles = [
      { x: 100, y: 100, width: 30, height: 30, color: 'red', speedX: 2, speedY: 3 },
      { x: 400, y: 300, width: 40, height: 40, color: 'green', speedX: -3, speedY: 1 }
    ];
  
    const exit = {
      x: canvas.width - 50,
      y: canvas.height - 50,
      width: 30,
      height: 30,
      color: 'yellow'
    };
  
    let youWinMessageDisplayed = false;
  
    function drawPlayer() {
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }
  
    function movePlayer(key) {
      switch (key) {
        case 'w':
          player.y -= player.speed;
          break;
        case 'a':
          player.x -= player.speed;
          break;
        case 's':
          player.y += player.speed;
          break;
        case 'd':
          player.x += player.speed;
          break;
      }
    }
  
    function drawObstacles() {
      obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    }
  
    function moveObstacles() {
      obstacles.forEach(obstacle => {
        obstacle.x += obstacle.speedX;
        obstacle.y += obstacle.speedY;
  
        if (obstacle.x > canvas.width) {
          obstacle.x = -obstacle.width;
        } else if (obstacle.x + obstacle.width < 0) {
          obstacle.x = canvas.width;
        }
        if (obstacle.y > canvas.height) {
          obstacle.y = -obstacle.height;
        } else if (obstacle.y + obstacle.height < 0) {
          obstacle.y = canvas.height;
        }
      });
    }
  
    function drawBorders() {
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = 'yellow';
      ctx.fillRect(exit.x, exit.y, exit.width, exit.height);
    }
  
    function youWin() {
      if (
        player.x < exit.x + exit.width &&
        player.x + player.width > exit.x &&
        player.y < exit.y + exit.height &&
        player.y + player.height > exit.y
      ) {
        if (!youWinMessageDisplayed) {
          ctx.fillStyle = 'black';
          ctx.font = '30px Arial';
          ctx.fillText('You won!!!!', canvas.width / 2 - 50, canvas.height / 2);
          youWinMessageDisplayed = true;
        }
      }
    }
  
    document.addEventListener('keydown', event => {
      const keyPressed = event.key.toLowerCase();
      if (keyPressed === 'w' || keyPressed === 'a' || keyPressed === 's' || keyPressed === 'd') {
        movePlayer(keyPressed);
      }
    });
  
    canvas.addEventListener('mousedown', event => {
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  
      const newObstacle = {
        x: mouseX,
        y: mouseY,
        width: 30,
        height: 30,
        color: 'red',
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 - 2
      };
  
      obstacles.push(newObstacle);
    });
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      drawBorders();
      drawPlayer();
      drawObstacles();
      youWin();
  
      moveObstacles();
  
      requestAnimationFrame(draw);
    }
  
    draw();
  });
  