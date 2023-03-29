const View = require('./ttt-view.js') // require appropriate file
const Game = require('../ttt_node/game.js') // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  
  let ttt = document.querySelector('.ttt')
  const g1 = new Game()
  const v1 = new View(g1, ttt)
});


