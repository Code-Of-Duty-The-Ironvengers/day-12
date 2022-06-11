class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.obstacle = new Obstacle();
    this.score = 0;
  }

  play() {
    this.player.move();

    this.player.drawPlayer();
    this.obstacle.drawObstacle();

    if (this.isColliding()) {
      // noLoop();
      this.obstacle.resetTopAndLeft();
      this.score++;
    }
  }

  isColliding() {
    // we want to check wether the player it colliding with the obstacle
    // conditions for true collision
    // Bottom of A >= Top of B
    // Top of A <= Bottom of B
    // Left of A <= Right of B
    // Right of A >= Left of B

    // for sake of argument, lets say player is A and obstacle is B

    const bottomOfA = this.player.top + this.player.height;
    const topOfB = this.obstacle.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = this.player.top;
    const bottomOfB = this.obstacle.height + this.obstacle.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = this.player.left;
    const rightOfB = this.obstacle.left + this.obstacle.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = this.player.width + this.player.left;
    const leftOfB = this.obstacle.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
}
