// Given an number, return the amount of digit 1's there are in each integer 
// less than and equal to that given number

//--- examples:
//  1) given 13, the numbers less than or equal to 13 
//   with the digit 1 is [1,10,11,12,13] so there are 
//   a total of 6 1's that appear in total

//  2) given 24 
//   numbers with digit 1 = [1,10,11,12,13,14,15,16,17,18,19,21]
//   output should be 13

function solution(N) {
    var digitOneCount = 0;
    var splitDigits = [];

    for (i = 0; i <= N; i++) {
        splitDigits = i.toString().split('');
        splitDigits.forEach(function(element) {
            if (element == '1'){
                digitOneCount++;
            }
        })
    }
    return digitOneCount;
};