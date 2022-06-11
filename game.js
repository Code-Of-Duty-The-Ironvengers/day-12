// P5 so far has shown us the variables and functions below
// createCanvas
// keyIsDown
// background
// keyCode -> variable
// rect

// draw
// setup
// keyPressed
// SOLID
// S -> Single Responsibility Principle

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

const player = new Player(0, 0);

function draw() {
  background("orange");

  player.drawPlayer();

  player.move();
}
