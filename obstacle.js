class Obstacle {
  constructor() {
    this.top = this.randomPosition();
    this.left = this.randomPosition();
    this.width = PLAYER_WIDTH / 2;
    this.height = PLAYER_HEIGHT / 2;
  }
  randomPosition() {
    return Math.floor(Math.random() * (CANVAS_WIDTH - 75));
  }

  drawObstacle() {
    push();
    fill("blue");
    rect(this.left, this.top, this.width, this.height);
    pop();
  }

  resetTopAndLeft() {
    this.top = this.randomPosition();
    this.left = this.randomPosition();
  }
}
