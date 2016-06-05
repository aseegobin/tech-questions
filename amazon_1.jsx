// Traverse a maze, to find the goal, in the form of a two-dimensional, NxN array.
// 0s represent walls, 1s represent paths, 9 represents the goal.
// Return the path needed to take in order to get to the goal.

/*
 * eg. [[1,1,0], [9,1,1], [0,1,0]]
 * Correct path would be (0,0) then (1,0)
 * [1 1 0]
 * [9 1 1]
 * [0 1 0]
 */

function solveMaze(maze) {
  
  let dummyMaze = maze
  let path      = []
  let solveable = false

  let traverse = (column, row) => {

    if (maze[column][row] === 9) {
      path.push(`(${column},${row})`)
      solveable = true
      return true
    }
    else if (checkPath(dummyMaze, column, row)) {

      // dummyMaze[column][row]==1)
      
      path.push(`(${column},${row})`)
      dummyMaze[column][row] = 8

      if (column < dummyMaze.length - 1) {
        if (traverse(column + 1, row)) {
          // Check South, only if position in column is not at end
          return true
        }
      }

      if (row < dummyMaze[column].length - 1) {
        if (traverse(column, row + 1)) {
          // Check East, only if position in row is not at end
          return true
        }
      }
      
      if (column > 0) {
        if (traverse(column - 1, row)) {
          // Check North, only if position in column is not at beginning
          return true
        }
      }
      
      if (row > 0) {
        if (traverse(column, row - 1)) {
          // Check South, only if position in row is not at begnning
          return true
        }
      }
    }

    // Return false if dummyMaze[column][row] !== 1 or 9
    return false
  }

  traverse(0,0)

  if (path.length && solveable) {
    return `Solveable path is ${path}`
  }

  return 'Maze cannot be solved'
}

function checkPath(maze, column, row) {
  let N = maze.length
  return (column >= 0 && column < N && row >= 0 && row < N && maze[column][row] == 1);
}

console.log(solveMaze([[1,1,0], [9,1,1], [0,1,0]]))
console.log(solveMaze([[0,0,0], [9,1,1], [0,1,0]]))
console.log(solveMaze([[1,1,0], [1,1,1], [0,1,0]]))
console.log(solveMaze([[1,0,1], [1,0,0], [1,1,9]]))
console.log(solveMaze([[1,0,9], [1,0,1], [1,1,1]]))
// console.log(solveMaze([[1,9,0], [1,0,1], [1,1,1]]))