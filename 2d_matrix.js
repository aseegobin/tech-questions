var row1 = [0,1,2,3];
var row2 = [4,5,6,7];
var row3 = [8,9,10,11];
var row4 = [12,13,14,15];

var matrix = [row1,row2,row3,row4];

function rotate(matrix) {
    //take in 2d matrix and returns 90 degrees rotated CCW
    var rotated=[];
    
    var numRows = matrix.length;
    var numColumns = matrix[0].length;

    for (column = 0; column < numColumns; column++) {
        rotated.unshift([matrix[0][column]]);
    };

    for (row = 1; row < numRows; row ++) {
        for (column = 0; column < numColumns; column++) {
            rotated[(numColumns-1)-column].push(matrix[row][column]);
        };
    }

    console.log(matrix, ": matrix");
    console.log(rotated, ": rotated");
}


rotate(matrix);