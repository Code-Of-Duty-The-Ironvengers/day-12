const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const PLAYER_WIDTH = CANVAS_WIDTH / 10;
const PLAYER_HEIGHT = PLAYER_WIDTH;
const PLAYER_MOVEMENT = PLAYER_WIDTH / 10;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const LETTER_W = 87;
const LETTER_A = 65;
const LETTER_S = 83;
const LETTER_D = 68;
const COLORS = ["blue", "red", "green", "yellow", "#bada55"];
const player1Score = document.querySelector(".player-1 span");
const player2Score = document.querySelector(".player-2 span");

const DIRECTIONS = {
  1: {
    left: ARROW_LEFT,
    up: ARROW_UP,
    right: ARROW_RIGHT,
    down: ARROW_DOWN,
  },
  2: {
    left: LETTER_A,
    up: LETTER_W,
    right: LETTER_D,
    down: LETTER_S,
  },
};
Object.freeze(DIRECTIONS);
