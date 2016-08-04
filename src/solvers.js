/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solutions = [];
  // recursive function that takes  count and current solution
  // base casepushes the solution to solutions if count is zero and return
  // make an empty array for n x n
  // place element on first spot and check all other spots, place at any
  // available spots
  var count = n;
  var array = makeEmptyMatrix(n);
  var solver = function(count, array) {
    if (count === 0) {
      solutions.push(array);
      return;
    }
  };


  var randomSolution = Math.floor(Math.random() * solutions.length);
  var solution = solution[randomSolution];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // recursive function that takes  count and current solution
  // base casepushes the solution to solutions if count is zero and return
  // make an empty array for n x n
  // place element on first spot and check all other spots, place at any
  // available spots
  var count = n;
  var solutions = [];
  var array = makeEmptyMatrix(n);
  var solver = function(count, board) {
    board = board || new Board({n:n});
    if (count === 0) {
      solutions.push(board);
      return;
    }
    if (board.hasAnyRooksConflicts()) {
      return;
    }
    for ()

  };
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
