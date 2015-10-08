// Given a strings consisting of random characteres, find the 
// character that has only 1 occurance in the string. If multiple
// characters have only 1 occurance, return the character that
// appears first in the string.

// example:
// 1) given "abcbc", output should be: "a"
// 2) given "bcba", output should be "c"

function solution(string) {
    var charCount = {};
    var singleChar;

    for (i = 0 ; i < string.length; i++) {
        if (charCount[string.charAt(i)]) {
            charCount[string.charAt(i)]++;
        } else {
            charCount[string.charAt(i)] = 1;
        }
    }

    var characters = Object.keys(charCount);
    for (k = 0; k < characters.length; k++) {
        if (charCount[characters[k]] == 1 && !singleChar) {
            singleChar = characters[k];
        }
    }
    if (singleChar) {
        return "in the string: " + string + " - "+ singleChar + " repeats only once";
    }
    return "no character repeats only once in - " + string;
}

console.log(solution('abcbc'));
console.log(solution('abcdefg'));
console.log(solution('bbbbbcdad'));
console.log(solution('dcbcbd'));