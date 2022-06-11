class Player {
  constructor(top, left, playerNumber, span) {
    if (playerNumber !== 1 && playerNumber !== 2) {
      throw new Error("You cannot create a player like this");
    }
    this.top = top;
    this.left = left;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.directions = DIRECTIONS[playerNumber];
    this.color = COLORS[playerNumber];
    this.score = 0;
    this.span = span;
  }

  setScore() {}

  drawPlayer() {
    this.span.innerText = this.score;
    push();
    fill(this.color);
    rect(this.left, this.top, this.width, this.height);
    pop();
  }

  move() {
    // MOVE LATERALLY
    // keyIsDown(ARROW_LEFT) -> ARROW LEFT is down, this is true
    // 1, 2

    if (keyIsDown(this.directions.left)) {
      this.left -= PLAYER_MOVEMENT;

      if (this.left <= -this.width) {
        this.left = CANVAS_WIDTH;
      }
    } else if (keyIsDown(this.directions.right)) {
      this.left += PLAYER_MOVEMENT;

      if (this.left >= CANVAS_WIDTH) {
        this.left = -this.width;
      }
    }

    // MOVE VERTICALLY
    if (keyIsDown(this.directions.down)) {
      this.top += PLAYER_MOVEMENT;

      if (this.top >= CANVAS_HEIGHT) {
        this.top = -this.height;
      }
    } else if (keyIsDown(this.directions.up)) {
      this.top -= PLAYER_MOVEMENT;

      if (this.top <= -this.height) {
        this.top = CANVAS_HEIGHT;
      }
    }
  }
}
