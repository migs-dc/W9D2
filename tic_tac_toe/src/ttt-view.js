

class View {
  constructor(game, board) {
    this.game = game;
    this.board = board;
    this.grid = [];
    this.setupBoard();
  }

  setupBoard() {
    let myRow = document.createElement("ul");
    this.board.appendChild(myRow);
    for (let i=0; i<3; i++){
      let subArray = [];
      for (let j=0; j<3; j++){
        let myCell = document.createElement("li");
        myCell.id = `${i},${j}`;  
        subArray.push(myCell);
        myRow.appendChild(myCell);
      }
      this.grid.push(subArray);
    }
  }

  bindEvents() {

  }

  handleClick(e) {
    moveBy.addEventListener('click', event => {
      if (event.target.tagName === "LI"){
        event.target.classList.toggle("place-mark");
      }
    })
  }

  makeMove(square) {

  }

}

module.exports = View;
