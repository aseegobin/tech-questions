// Given array of ints, find length of longest set of values within array that is a quasi set
// - quasi set means that the difference between all values is less than or equal to 1

//--- examples:
//  1) given [6,10,6,7,8,9,2], the longest quasi would be 3: [6,6,7].

function solution(N) {

    var longestLength = 0;
    //loop through the array of ints and find 
    // the quasi set for each 
    for (i = 0; i < N.length; i++) {
        var tempSet = [N[i]];
        // inner loop to find quasi set
        for (j = i+1; j < N.length; j++) {
            if (Math.abs(N[i]-N[j]) < 2) {
                tempSet.push(N[j]);
            }
        }

        //check if the newly found quasi set length is 
        // longer than what we found before
        // if it is, then change the longest length value
        if (tempSet.length > longestLength) {
            longestLength = tempSet.length;
        }
    }

    // return longest length we found
    return longestLength;
};