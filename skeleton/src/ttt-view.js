class View {
  constructor(game, el) {
    this.game = game,
    this.el = el
    this.setupBoard()
    this.bindEvents()
    // if(!this.game.board.winner())
    // this.game.run(this.game.reader, this.game.gameCompletionCallback)
  }

  setupBoard() {
    const li = document.querySelectorAll('.grid li') //.dataset.pos
    console.log(li)
    let board = this.game.board
    console.log(board, "board")
    li.forEach(()=> {

    })
    

    // for(let i = 0; i < this.game.board.length; i++){
    //   this.game.board[i] = document.getElementsByTagName('li')
    // }
    // this.game.board
    // let gridDummy = document.getElementsByClassName('grid')
    // this.el.appendChild(gridDummy)
  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
    // this.game.currentPlayer //
    e.stopPropagation();
    console.log(this.game.currentPlayer, "before e.target")

    if (e.target.nodeName === "LI"){
    e.target.classList.add(this.game.currentPlayer)
    e.target.innerText = this.game.currentPlayer

    this.makeMove(e.target)

    }

    // console.log(e.target, "e.target")
    // console.log(this.game.currentPlayer, "before swap")
    // // this.game.swapTurn()
    // console.log(this.game.currentPlayer, "after swap")

  }

  makeMove(square) {
    let firstIdx = parseInt(square.dataset.pos[1])
    let secondIdx = parseInt(square.dataset.pos[3])
    console.log([firstIdx, secondIdx] instanceof Array, "pos")
      this.game.playMove([firstIdx, secondIdx])
    if(this.game.board.winner()){
      let winner = document.getElementById("winner")
      winner.classList.add("winner");
      winner.classList.remove("hidden");
    }
  }

}

module.exports = View;
