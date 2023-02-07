const squares = document.querySelectorAll('.square');
let turn = 'X';

for (const square of squares) {
  square.addEventListener('click', function (event) {
    if (event.target.textContent === '') {
      event.target.textContent = turn;
      checkWinner();
      turn = turn === 'X' ? 'O' : 'X';
    }
  });
}

function checkWinner() {
  const solutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (const solution of solutions) {
    const s1 = squares[solution[0]];
    const s2 = squares[solution[1]];
    const s3 = squares[solution[2]];
    
    if (s1.textContent === turn && s2.textContent === turn && s3.textContent === turn) {
      alert(turn + ' wins!');
      return;
    }
  }
  
  let draw = true;
  for (const square of squares) {
    if (square.textContent === '') {
      draw = false;
      break;
    }
  }
  
  if (draw) {
    alert('Draw!');
  }
}


//**reset button */
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', function () {
  for (const square of squares) {
    square.textContent = '';
  }
  turn = 'X';
});
