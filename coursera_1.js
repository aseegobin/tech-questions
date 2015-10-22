// Problem 1

// given [0,1,1] and n that is 0-based index
// return the nth index of the fibonacci sequence
//  -- however this fibonacci sums the 3 terms 
//  -- as opposed to the previous 2
//
// sequence follows: 0, 1, 1, 2, 4, 7, 13, 24, ...
// n = 0, fib3(0) => 0
// n = 5, fib3(5) => 7
function fib3(n) {
    var tempFib = [0,1,1];
    
    var twoBack = tempFib[0];
    var oneBack = tempFib[1];
    var current = tempFib[2];
    var temp;

    if (n <= 2) {
        return tempFib[n];
    } 

    for (i = 2; i < n; i++) {
        temp = twoBack + oneBack + current;
        twoBack = oneBack;
        oneBack = current;
        current = temp;
    }

    return current;
}

console.log(fib3(7));