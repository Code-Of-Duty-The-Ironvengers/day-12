class Game {
  constructor() {
    this.player = new Player(0, 0, 1, player1Score);
    this.player2 = new Player(450, 450, 2, player2Score);
    this.obstacle = new Obstacle();
  }

  play() {
    this.player.move();
    this.player2.move();

    this.player.drawPlayer();
    this.player2.drawPlayer();
    this.obstacle.drawObstacle();

    if (this.isColliding(this.player, this.obstacle)) {
      this.obstacle.resetTopAndLeft();
      this.player.score++;
    }

    if (this.isColliding(this.player2, this.obstacle)) {
      this.obstacle.resetTopAndLeft();
      this.player2.score++;
    }
  }

  isColliding(player, obstacle) {
    // we want to check wether the player it colliding with the obstacle
    // conditions for true collision
    // Bottom of A >= Top of B
    // Top of A <= Bottom of B
    // Left of A <= Right of B
    // Right of A >= Left of B

    // for sake of argument, lets say player is A and obstacle is B

    const bottomOfA = player.top + player.height;
    const topOfB = obstacle.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = player.top;
    const bottomOfB = obstacle.height + obstacle.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = player.left;
    const rightOfB = obstacle.left + obstacle.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = player.width + player.left;
    const leftOfB = obstacle.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
}
