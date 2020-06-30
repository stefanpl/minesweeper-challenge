import { assert } from 'chai';
import { BoardInput } from '../interfaces/BoardInput';
import { Board } from '../interfaces/Board';
import { createBoardFromInput } from '../createBoardFromInput';

declare const describe: Mocha.SuiteFunction;
declare const it: Mocha.TestFunction;

const testData: {
  input: BoardInput;
  board: Board;
}[] = [
  {
    input: [
      /* eslint-disable prettier/prettier */
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 1]
    ],
    board: [
      [1, 'x', 2, 1],
      [2, 3, 'x', 1],
      ['x', 3, 2, 2],
      ['x', 2, 1, 'x'],
    ],
  },
  {
    input: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    board: [
      [2, 3, 2],
      ['x', 'x', 'x'],
      [3, 'x', 3],
    ],
  }
  /* eslint-enable prettier/prettier */
];

describe('parses the board', () => {
  it.only('runs test boards', async () => {
    testData.forEach(test => {
      const board = createBoardFromInput(test.input);
      assert.equal(printBoard(board), printBoard(test.board));
    });
  });
});

function printBoard(board: Board): string {
  return board.reduce((res, row) => {
    return `${res}${row.toString()}\n`;
  }, '');
}

export default false;
