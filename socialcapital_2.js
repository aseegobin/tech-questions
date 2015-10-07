// Given an array of strings consisting of braces, determine
// if the string is valid with all closing and opening braces matching.
// Braces are defined as (), {}, or []. The function should parse
// each string element in the array and output either YES or NO
// if the braces in the element are valid. 
//   The length of array passed in to the function should not be larger
//   than 5. Each string element in the array should be no larger than
//   100 characters.
// 

// example:
// given ["({})", "{)}", "[]()"], output should be
// YES NO YES. The second element is invalid

function Braces(values) {
    
    if (values.length < 1 || values.length > 5 ) {
        console.error("array is invalid length");
        return;
    }
    var openBraces = "([{";
    
    var valid = [];

    //iterate through array of string elements
    for (i = 0; i < values.length; i++) {

        if (values[i].length < 1 || values[i].length > 100) {
            console.error("value has invalid length");
            return;
        }

        if ((values[i].length/2).toString().split('.').length != 1) {
            //size of braces string is not even, therefore automatically
            //that it is invalid
            valid.push('NO');
        } else {
            valid.push(checkBraces(values[i].split('')));
        }
        
    };

    console.log(valid);
}

function checkBraces(arrayOfBraces) {
    var closeBraces = ")]}";

    var openBracesCountMap = {
        '(': 0,
        '[': 0,
        '{': 0
    };

    var closeBraceMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    var bracesArray = arrayOfBraces;
    
    if ( closeBraces.indexOf(bracesArray[0]) >=0 ) {
        //if first character is a close brace
        // automatically its invalid
        return 'NO';
    }

    bracesArray.forEach(function(character) {
        //iterate through each character in the string
        if (closeBraces.indexOf(character) >=0) {
            //if character is a close brace then decrement count
            // of open braces
            if ( openBracesCountMap[closeBraceMap[character]] == 0) {
                //if there is a close brace that has no matching 
                // open brace, the openbracecount is already 0 and cannot
                // be decremented, therefore string is invalid.

               return 'NO';
            } else {
                openBracesCountMap[closeBraceMap[character]]--;
            }
        } else {
            // character is an open brace so we increment the
            // count of open braces
            openBracesCountMap[character]++
        }
    });

    if (openBracesCountMap['('] + openBracesCountMap['{'] + openBracesCountMap['['] == 0) {
        return 'YES';
    }
    else {
        return 'NO';
    }
};