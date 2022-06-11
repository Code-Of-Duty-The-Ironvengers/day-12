class Player {
  constructor(top, left) {
    this.top = top;
    this.left = left;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
  }

  drawPlayer() {
    rect(this.left, this.top, this.width, this.height);
  }

  move() {
    // MOVE LATERALLY
    if (keyIsDown(ARROW_LEFT)) {
      this.left -= PLAYER_MOVEMENT;

      if (this.left <= -this.width) {
        this.left = CANVAS_WIDTH;
      }
    } else if (keyIsDown(ARROW_RIGHT)) {
      this.left += PLAYER_MOVEMENT;

      if (this.left >= CANVAS_WIDTH) {
        this.left = -this.width;
      }
    }

    // MOVE VERTICALLY
    if (keyIsDown(ARROW_DOWN)) {
      this.top += PLAYER_MOVEMENT;

      if (this.top >= CANVAS_HEIGHT) {
        this.top = -this.height;
      }
    } else if (keyIsDown(ARROW_UP)) {
      this.top -= PLAYER_MOVEMENT;

      if (this.top <= -this.height) {
        this.top = CANVAS_HEIGHT;
      }
    }
  }
}
