// Given an array of two space-separated integers
// find all of the square integers between those two

// example:
// 1) given ['3 10'], the integers between 3 and 10 are:
//  4,5,6,7,8,9,10. The square integers are 4 (2*2), and 9 (3*3)
//  therefore the amount of square ints between 3 and 10 is 2

function count_Squares(arr) {
    
    var numSqInts = 0;
    var ints = arr.toString().split(' ');
    var A = parseInt(ints[0]);
    var B = parseInt(ints[1]);
    
    for (k = A; k <= B; k++) {
        if (Math.sqrt(k).toString().split('.').length == 1) {
            numSqInts++;
        }
    }
    console.log(numSqInts);
}
