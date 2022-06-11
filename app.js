// P5 so far has shown us the variables and functions below
// createCanvas
// keyIsDown
// background
// keyCode -> variable
// rect

// draw
// setup
// keyPressed

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const PLAYER_WIDTH = CANVAS_WIDTH / 10;
const PLAYER_HEIGHT = PLAYER_WIDTH;
const PLAYER_MOVEMENT = PLAYER_WIDTH / 10;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

let xValueOfPlayer = 0;
let yValueOfPlayer = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background("orange");

  rect(xValueOfPlayer, yValueOfPlayer, PLAYER_WIDTH, PLAYER_HEIGHT);

  if (keyIsDown(ARROW_LEFT)) {
    xValueOfPlayer -= PLAYER_MOVEMENT;

    if (xValueOfPlayer <= -PLAYER_WIDTH) {
      xValueOfPlayer = CANVAS_WIDTH;
    }
  } else if (keyIsDown(ARROW_RIGHT)) {
    xValueOfPlayer += PLAYER_MOVEMENT;

    if (xValueOfPlayer >= CANVAS_WIDTH) {
      xValueOfPlayer = -PLAYER_WIDTH;
    }
  }

  if (keyIsDown(ARROW_DOWN)) {
    yValueOfPlayer += PLAYER_MOVEMENT;

    if (yValueOfPlayer >= CANVAS_HEIGHT) {
      yValueOfPlayer = -PLAYER_HEIGHT;
    }
  } else if (keyIsDown(ARROW_UP)) {
    yValueOfPlayer -= PLAYER_MOVEMENT;

    if (yValueOfPlayer <= -PLAYER_HEIGHT) {
      yValueOfPlayer = CANVAS_HEIGHT;
    }
  }
}
