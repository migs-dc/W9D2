const View = require("./ttt-view.js")// require appropriate file
const Game = require("../ttt_node/game.js")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".ttt");
  const game = new Game();
  const view = new View(game, el);
});

window.View = View;