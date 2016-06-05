// Problem 2

var englishDictionary; // given
// englishDictionary.isWord(word) -- boolean;
// englishDictionary.wordBeginsWith(prefix) - boolean

// EECA => [E,E,C,A]
// ALEP => [A,L,E,P]
// HNBO
// QTTY

// EEL, ACE, BOY, CAPE, ...

// In each word path, you cannot revisit the same cell. Also, diagonal movements are allowed

// @return list of valid English words on the board
function findBoggleWords(board) {
    // [row1,row2...]
    var numRows = board.length;
    var numCols = board[0].length;
    var validWords = [];
    var takenCharacter = {
        // E: [row,col]
        // A: [row,col]
    }
    
    for (i = 0; i < numRows; i++) {
        
        for (j=0; j < numCols; j++) {
            checkIfWord(board[i][j], i, j); //E
        }
    }
    
    function checkIfWord(prefix, row, col) {
        //board
        for (k=row-1; k < row+1; k++; {
            for (k=row-1; k < row+1; k++; {
            var prefix =    
        }
        englishDictionary.wordBeginsWith(prefix)
        
        validWords.push(word);
    }
    
}