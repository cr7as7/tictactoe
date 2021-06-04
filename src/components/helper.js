export function calculateWinner(squares, value, player1, player2) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line = 0; line < lines.length; line++) {
    const [ a, b, c ] = lines[ line ];
    if (squares[ a ] != null && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ]) {
      return (squares[ a ] === value ? player1 : player2);
    }
  }
  return null;
}
