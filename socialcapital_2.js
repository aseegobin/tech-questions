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
    var closeBraces = ")]}";
    
    var valid = [];

    //iterate through array of string elements
    for (i = 0; i < values.length; i++) {
        var valid;

        if (values[i].length < 1 || values[i].length > 100) {
            console.error("value has invalid length");
            return;
        }

        if ((values[i].length/2).toString().split('.').length != 1) {
            //size of braces string is not even, therefore automatically
            //there it is invalid
            valid.push('NO');
            return;
        }
        
        var bracesArray = values[i].split('');
        
        if ( closeBraces.indexOf(bracesArray[0]) >=0 ) {
            valid.push('NO');
            return;
        }
        
        bracesArray.forEach(function(character) {
            //iterate through each character in the string
            //to determine whether or not there is a pair

        });
        

    };
    return valid;
}

